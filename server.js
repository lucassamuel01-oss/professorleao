/* ============================================================
   PROFESSOR LEÃO — SERVIDOR (Express + MongoDB)

   Backend da plataforma:
   - Convites únicos por aluno (link de cadastro de uso único)
   - Usuários, progresso, plano de estudos e último acesso
     persistidos no MongoDB Atlas (fallback: arquivos em data/)
   - Painel admin: alunos com progresso, dias sem acesso e
     contato via WhatsApp

   O site continua funcionando como estático (GitHub Pages):
   o frontend degrada graciosamente quando /api não existe.

   Variáveis de ambiente:
     PORT            porta (default 3000)
     MONGODB_URI     string de conexão do MongoDB Atlas
     SESSION_SECRET  segredo da sessão (opcional)
   ============================================================ */

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
let nodemailer = null;
try { nodemailer = require("nodemailer"); } catch (e) { /* opcional */ }

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const DATA_DIR = path.join(__dirname, "data");
const USERS_JSON = path.join(DATA_DIR, "users.json");
const INVITES_JSON = path.join(DATA_DIR, "invites.json");
const SESSION_SECRET_FILE = path.join(DATA_DIR, "session-secret.txt");

app.disable("x-powered-by");
app.set("trust proxy", 1);

function ensureDataDir() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getSessionSecret() {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  ensureDataDir();
  if (fs.existsSync(SESSION_SECRET_FILE)) {
    const stored = fs.readFileSync(SESSION_SECRET_FILE, "utf8").trim();
    if (stored) return stored;
  }
  const generated = crypto.randomBytes(32).toString("hex");
  fs.writeFileSync(SESSION_SECRET_FILE, generated, "utf8");
  return generated;
}

app.use(bodyParser.urlencoded({ extended: true, limit: "4mb" }));
app.use(bodyParser.json({ limit: "4mb" }));
app.use(
  session({
    secret: getSessionSecret(),
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, sameSite: "lax", maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);

/* ════════════════════════════════════════════════════════════
   SEGURANÇA E PROTEÇÃO
   ════════════════════════════════════════════════════════════ */

/* ── 1. Cabeçalhos de segurança (anti-embed, anti-sniff, etc.) ── */
app.use((req, res, next) => {
  /* impede que o site seja embutido em iframe de terceiros
     (anti-clickjacking e anti-cópia da interface via embedding) */
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  if (req.secure || req.headers["x-forwarded-proto"] === "https") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'", // ninguém embute este site
    ].join("; ")
  );
  next();
});

/* ── 2. Rate limiting por IP (anti-scraping e anti-flood) ──
   Janela deslizante em memória. Limite generoso para uso normal,
   mas corta automação que dispara centenas de requisições. */
const _rl = new Map();
function rateLimit({ janelaMs, max, escopo }) {
  return (req, res, next) => {
    const ip = (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "?")
      .split(",")[0].trim();
    const chave = escopo + ":" + ip;
    const agora = Date.now();
    let reg = _rl.get(chave);
    if (!reg || agora - reg.inicio > janelaMs) reg = { inicio: agora, n: 0 };
    reg.n++;
    _rl.set(chave, reg);
    if (reg.n > max) {
      res.setHeader("Retry-After", Math.ceil((janelaMs - (agora - reg.inicio)) / 1000));
      return res.status(429).json({ success: false, message: "Muitas requisições. Aguarde um instante." });
    }
    next();
  };
}
/* limpeza periódica do mapa para não crescer indefinidamente */
setInterval(() => {
  const agora = Date.now();
  for (const [k, v] of _rl) if (agora - v.inicio > 600000) _rl.delete(k);
}, 600000).unref?.();

/* todas as APIs: no máx. 240 req/min por IP */
app.use("/api", rateLimit({ janelaMs: 60000, max: 240, escopo: "api" }));

/* ── 3. Bloqueio de ferramentas de automação conhecidas nas APIs ──
   User-agents de scraping/HTTP clients automatizados são barrados
   nas rotas de dados. Navegadores reais e buscadores passam. */
const UA_BLOQUEADOS = /(curl|wget|python-requests|python-urllib|scrapy|httpclient|libwww|go-http|node-fetch|axios\/|okhttp|java\/|httpie|postman|insomnia|headlesschrome|phantomjs|puppeteer|playwright|selenium|aiohttp)/i;
app.use("/api", (req, res, next) => {
  const ua = String(req.headers["user-agent"] || "");
  if (!ua || UA_BLOQUEADOS.test(ua)) {
    return res.status(403).json({ success: false, message: "Acesso automatizado não autorizado." });
  }
  next();
});

/* ── MongoDB + cache em memória ──────────────────────────────
   Cache síncrono em memória + persistência assíncrona.       */

const MONGODB_URI = process.env.MONGODB_URI || null;
let _mongoDb = null;
let _usersCache = null;
let _invitesCache = [];

async function connectMongo() {
  if (!MONGODB_URI) return null;
  try {
    const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
    await client.connect();
    _mongoDb = client.db("professor-leao");
    console.log("[DB] MongoDB Atlas conectado ✓");
    return _mongoDb;
  } catch (err) {
    console.error("[DB] Falha ao conectar MongoDB:", err.message);
    return null;
  }
}

async function loadDoc(id, field) {
  if (_mongoDb) {
    try {
      const doc = await _mongoDb.collection("app_data").findOne({ _id: id });
      const list = doc && Array.isArray(doc[field]) ? doc[field] : [];
      console.log(`[DB] ${list.length} registro(s) de '${id}' carregado(s)`);
      return list;
    } catch (err) {
      console.error(`[DB] Erro ao carregar ${id}:`, err.message);
    }
  }
  const file = id === "users" ? USERS_JSON : INVITES_JSON;
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8").trim() || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function persistDoc(id, field, list) {
  if (_mongoDb) {
    _mongoDb
      .collection("app_data")
      .replaceOne({ _id: id }, { _id: id, [field]: list }, { upsert: true })
      .catch((err) => console.error(`[DB] Erro ao salvar ${id}:`, err.message));
  } else {
    try {
      ensureDataDir();
      const file = id === "users" ? USERS_JSON : INVITES_JSON;
      fs.writeFileSync(file, JSON.stringify(list, null, 2), "utf8");
    } catch (err) {
      console.error(`[DB] Erro ao salvar ${id} em arquivo:`, err.message);
    }
  }
}

function readUsers() {
  return _usersCache || [];
}
function writeUsers(users) {
  _usersCache = users;
  persistDoc("users", "users", users);
}
function readInvites() {
  return _invitesCache;
}
function writeInvites(invites) {
  _invitesCache = invites;
  persistDoc("invites", "invites", invites);
}

/* ── Helpers ────────────────────────────────────────────────── */

function isAccessValid(user) {
  if (!user.active) return false;
  if (!user.expiresAt) return true;
  return new Date(user.expiresAt).getTime() >= Date.now();
}

function safeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    telefone: user.telefone || "",
    role: user.role,
    curso: user.curso || "",
    active: user.active,
    expiresAt: user.expiresAt || null,
    createdAt: user.createdAt,
    lastAccessAt: user.lastAccessAt || null,
  };
}

function touchLastAccess(user) {
  // Atualiza no máximo a cada 5 minutos para não gravar a cada request
  const now = Date.now();
  const last = user.lastAccessAt ? new Date(user.lastAccessAt).getTime() : 0;
  if (now - last > 5 * 60 * 1000) {
    user.lastAccessAt = new Date(now).toISOString();
    writeUsers(readUsers());
  }
}

/* Credenciais do admin.
   - E-mail: variável ADMIN_EMAIL (padrão: o e-mail do professor).
   - Senha:  variável ADMIN_PASSWORD; sem ela, usa o hash abaixo
             (hash bcrypt = irreversível, seguro para versionar).
   Para trocar a senha sem mexer no código, defina ADMIN_PASSWORD
   no Railway. */
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "lucas.samuel01@gmail.com").toLowerCase();
const ADMIN_NAME = process.env.ADMIN_NAME || "Lucas Leão";
const ADMIN_PASS_HASH = process.env.ADMIN_PASSWORD
  ? bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10)
  : "$2b$10$HUAT6Qj/ED6D26I71wr1SOcKXjJvF5qaLycc.XmBvBM1hUIbfBJsW";

function seedAdminUser() {
  let users = readUsers();
  /* migração: remove credenciais antigas de admin (e-mail/senha
     que já estiveram no código público) e recria com as atuais */
  const antigos = users.filter((u) => u.role === "admin" && u.email.toLowerCase() !== ADMIN_EMAIL);
  if (antigos.length) {
    users = users.filter((u) => !(u.role === "admin" && u.email.toLowerCase() !== ADMIN_EMAIL));
    console.log(`[ADMIN] ${antigos.length} admin(s) antigo(s) removido(s) na migração.`);
  }

  const atual = users.find((u) => u.email.toLowerCase() === ADMIN_EMAIL);
  if (atual) {
    /* garante papel de admin + senha atual em quem já existe */
    atual.role = "admin";
    atual.name = atual.name || ADMIN_NAME;
    atual.password = ADMIN_PASS_HASH;
    atual.active = true;
    atual.expiresAt = null;
    writeUsers(users);
    console.log(`[ADMIN] Conta de administrador garantida: ${ADMIN_EMAIL}`);
    return;
  }

  users.push({
    id: "admin-001",
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASS_HASH,
    role: "admin",
    curso: "Todos",
    active: true,
    expiresAt: null,
    createdAt: new Date().toISOString(),
    lastAccessAt: null,
    progress: {},
    plano: null,
    lastVisited: null,
  });
  writeUsers(users);
  console.log(`[ADMIN] Administrador criado: ${ADMIN_EMAIL}`);
}

/* ── Auth middleware (somente APIs e páginas protegidas) ───── */

function currentUser(req) {
  if (!req.session.userId) return null;
  const user = readUsers().find((u) => u.id === req.session.userId);
  if (!user || !isAccessValid(user)) return null;
  return user;
}

function requireAuthApi(req, res, next) {
  const user = currentUser(req);
  if (!user) {
    return res.status(401).json({ success: false, message: "Não autenticado." });
  }
  req.currentUser = user;
  next();
}

function requireAdminApi(req, res, next) {
  if (!req.currentUser || req.currentUser.role !== "admin") {
    return res.status(403).json({ success: false, message: "Acesso negado." });
  }
  next();
}

/* ── Rotas públicas de autenticação ─────────────────────────── */

app.get("/health", (req, res) => {
  res.json({ ok: true, app: "professor-leao", db: !!_mongoDb });
});

/* ── Anti-brute-force: trava login após tentativas falhas ──
   Conta por (email + IP). 8 erros → bloqueio progressivo. */
const _loginFails = new Map();
function _clientIp(req) {
  return (req.headers["x-forwarded-for"] || req.socket.remoteAddress || "?").split(",")[0].trim();
}
function loginBloqueio(email, ip) {
  const reg = _loginFails.get(email + "|" + ip);
  if (!reg) return 0;
  if (reg.n < 8) return 0;
  const espera = Math.min(15 * 60000, (reg.n - 7) * 60000); // 1 min por erro extra, até 15 min
  const restante = reg.ate - Date.now();
  return restante > 0 ? Math.ceil(restante / 1000) : 0;
}
function registrarFalha(email, ip) {
  const k = email + "|" + ip;
  const reg = _loginFails.get(k) || { n: 0, ate: 0 };
  reg.n++;
  reg.ate = Date.now() + Math.min(15 * 60000, Math.max(0, reg.n - 7) * 60000);
  _loginFails.set(k, reg);
}

app.post("/api/login", rateLimit({ janelaMs: 60000, max: 15, escopo: "login" }), (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");
  const ip = _clientIp(req);

  const espera = loginBloqueio(email, ip);
  if (espera > 0) {
    return res.status(429).json({ success: false, message: `Muitas tentativas. Tente novamente em ${Math.ceil(espera / 60)} min.` });
  }

  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    registrarFalha(email, ip);
    return res.status(401).json({ success: false, message: "E-mail ou senha incorretos." });
  }
  if (!user.active) {
    return res.status(403).json({ success: false, message: "Conta inativa. Fale com o Professor Leão." });
  }
  if (user.expiresAt && new Date(user.expiresAt) < new Date()) {
    return res.status(403).json({ success: false, message: "Acesso expirado. Renove pelo WhatsApp." });
  }

  _loginFails.delete(email + "|" + ip); // sucesso zera o contador

  /* detecção de conta compartilhada: registra os IPs recentes da conta.
     Muitos IPs distintos em 24h é sinal de credencial vazada. */
  detectarCompartilhamento(user, ip, users);

  req.session.userId = user.id;
  user.lastAccessAt = new Date().toISOString();
  writeUsers(users);
  res.json({ success: true, user: safeUser(user) });
});

/* registra IPs recentes e sinaliza compartilhamento suspeito */
const LIMITE_IPS_24H = 4; // mesma conta em >4 IPs/dia = suspeito
function detectarCompartilhamento(user, ip, users) {
  const agora = Date.now();
  user.acessos = (user.acessos || []).filter((a) => agora - a.t < 24 * 60 * 60 * 1000);
  if (!user.acessos.some((a) => a.ip === ip)) user.acessos.push({ ip, t: agora });
  const ipsDistintos = new Set(user.acessos.map((a) => a.ip)).size;
  user.compartilhamentoSuspeito = ipsDistintos > LIMITE_IPS_24H;
  if (user.compartilhamentoSuspeito) {
    console.warn(`[SEGURANÇA] Conta ${user.email} acessada de ${ipsDistintos} IPs em 24h — possível compartilhamento.`);
  }
}

app.post("/api/logout", (req, res) => {
  req.session.destroy(() => {});
  res.json({ success: true });
});

app.get("/api/me", (req, res) => {
  const user = currentUser(req);
  if (!user) return res.status(401).json({ success: false });
  touchLastAccess(user);
  res.json({ success: true, user: safeUser(user) });
});

/* ════════════════════════════════════════════════════════════
   RECUPERAÇÃO DE SENHA (por e-mail)
   ════════════════════════════════════════════════════════════ */

/* transporte de e-mail — configurado por variáveis de ambiente.
   Com Gmail: SMTP_HOST=smtp.gmail.com, SMTP_PORT=465,
   SMTP_USER=seu@gmail.com, SMTP_PASS=<senha de app de 16 dígitos>. */
let _mailer = null;
function getMailer() {
  if (_mailer !== null) return _mailer;
  if (!nodemailer || !process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    _mailer = false; // sem e-mail automático → fluxo de fallback (admin envia o link)
    return _mailer;
  }
  _mailer = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return _mailer;
}

function baseUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  const proto = req.headers["x-forwarded-proto"] || (req.secure ? "https" : "http");
  return proto + "://" + req.headers.host;
}

/* solicita recuperação: gera token (1h), envia e-mail (ou deixa
   o link para o admin). Resposta SEMPRE genérica — não revela se o
   e-mail existe (proteção contra enumeração de contas). */
app.post(
  "/api/recuperar-senha",
  rateLimit({ janelaMs: 60000, max: 6, escopo: "recuperar" }),
  async (req, res) => {
    const email = String(req.body.email || "").trim().toLowerCase();
    const generica = {
      success: true,
      message: "Se este e-mail estiver cadastrado, enviamos as instruções de redefinição.",
    };
    if (!email) return res.json(generica);

    const users = readUsers();
    const user = users.find((u) => u.email.toLowerCase() === email);
    if (!user) return res.json(generica); // não revela ausência

    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = crypto.createHash("sha256").update(token).digest("hex");
    user.resetExpira = Date.now() + 60 * 60 * 1000; // 1 hora
    user.resetSolicitadoEm = new Date().toISOString();
    writeUsers(users);

    const link = baseUrl(req) + "/redefinir-senha.html?token=" + token;
    const mailer = getMailer();
    let enviado = false;
    if (mailer) {
      try {
        await mailer.sendMail({
          from: process.env.SMTP_FROM || `"Professor Leão" <${process.env.SMTP_USER}>`,
          to: user.email,
          subject: "Redefinição de senha — Professor Leão",
          html:
            `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:auto;color:#1c2438">
              <h2 style="color:#0A1628">Redefinição de senha</h2>
              <p>Olá, ${String(user.name || "aluno").replace(/[<>]/g, "")}! Recebemos um pedido para redefinir a sua senha na plataforma Professor Leão.</p>
              <p style="text-align:center;margin:26px 0">
                <a href="${link}" style="background:#4A6CF7;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:bold">Criar nova senha</a>
              </p>
              <p style="font-size:13px;color:#56607a">O link vale por 1 hora. Se você não pediu isso, ignore este e-mail — sua senha continua a mesma.</p>
              <p style="font-size:12px;color:#8892a8;border-top:1px solid #e2e6f0;padding-top:12px;margin-top:18px">🦁 Professor Leão · www.professorleao.com</p>
            </div>`,
        });
        enviado = true;
      } catch (err) {
        console.error("[RESET] Falha ao enviar e-mail:", err.message);
      }
    }
    if (!enviado) {
      /* sem SMTP (ou falha): registra para o admin enviar o link via WhatsApp */
      console.log(`[RESET] Link de redefinição para ${user.email}: ${link}`);
    }
    res.json(generica);
  }
);

/* valida o token (a página confere antes de mostrar o formulário) */
app.get("/api/redefinir-senha/:token", (req, res) => {
  const hash = crypto.createHash("sha256").update(String(req.params.token)).digest("hex");
  const user = readUsers().find((u) => u.resetToken === hash && u.resetExpira > Date.now());
  res.json({ valido: !!user });
});

/* efetiva a nova senha */
app.post(
  "/api/redefinir-senha",
  rateLimit({ janelaMs: 60000, max: 10, escopo: "redefinir" }),
  (req, res) => {
    const token = String(req.body.token || "");
    const novaSenha = String(req.body.senha || "");
    if (novaSenha.length < 6) {
      return res.status(400).json({ success: false, message: "A senha precisa de pelo menos 6 caracteres." });
    }
    const hash = crypto.createHash("sha256").update(token).digest("hex");
    const users = readUsers();
    const user = users.find((u) => u.resetToken === hash && u.resetExpira > Date.now());
    if (!user) {
      return res.status(400).json({ success: false, message: "Link inválido ou expirado. Solicite um novo." });
    }
    user.password = bcrypt.hashSync(novaSenha, 10);
    delete user.resetToken;
    delete user.resetExpira;
    delete user.resetSolicitadoEm;
    writeUsers(users);
    res.json({ success: true, message: "Senha redefinida com sucesso. Você já pode entrar." });
  }
);

/* ── Cadastro via convite único ─────────────────────────────── */

function findInvite(token) {
  return readInvites().find((i) => i.token === token);
}

function inviteStatus(inv) {
  if (!inv) return "invalido";
  if (inv.usedAt) return "usado";
  if (inv.expiresAt && new Date(inv.expiresAt).getTime() < Date.now()) return "expirado";
  return "disponivel";
}

app.get("/api/invite/:token", (req, res) => {
  const inv = findInvite(req.params.token);
  const status = inviteStatus(inv);
  if (status !== "disponivel") {
    return res.status(404).json({ success: false, status });
  }
  res.json({ success: true, status, label: inv.label || "", curso: inv.curso || "" });
});

app.post("/api/cadastro", (req, res) => {
  const token = String(req.body.token || "").trim();
  const name = String(req.body.name || "").trim();
  const email = String(req.body.email || "").trim().toLowerCase();
  const telefone = String(req.body.telefone || "").replace(/\D/g, "").slice(0, 13);
  const password = String(req.body.password || "");

  const inv = findInvite(token);
  const status = inviteStatus(inv);
  if (status !== "disponivel") {
    const msg = {
      usado: "Este link de cadastro já foi utilizado.",
      expirado: "Este link de cadastro expirou. Peça um novo ao Professor Leão.",
      invalido: "Link de cadastro inválido.",
    }[status];
    return res.status(400).json({ success: false, message: msg });
  }

  if (!name || name.length < 3) {
    return res.status(400).json({ success: false, message: "Informe seu nome completo." });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ success: false, message: "Informe um e-mail válido." });
  }
  if (telefone.length < 10) {
    return res.status(400).json({ success: false, message: "Informe um WhatsApp válido com DDD." });
  }
  if (password.length < 6) {
    return res.status(400).json({ success: false, message: "A senha precisa de pelo menos 6 caracteres." });
  }

  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === email)) {
    return res.status(409).json({ success: false, message: "Este e-mail já possui cadastro. Faça login." });
  }

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    telefone,
    password: bcrypt.hashSync(password, 10),
    role: "student",
    curso: inv.curso || "",
    active: true,
    expiresAt: inv.accessExpiresAt || null,
    createdAt: new Date().toISOString(),
    lastAccessAt: new Date().toISOString(),
    progress: {},
    plano: null,
    lastVisited: null,
  };
  users.push(user);
  writeUsers(users);

  // Invalida o convite (uso único)
  const invites = readInvites();
  const idx = invites.findIndex((i) => i.id === inv.id);
  if (idx >= 0) {
    invites[idx].usedAt = new Date().toISOString();
    invites[idx].usedBy = `${name} <${email}>`;
    writeInvites(invites);
  }

  req.session.userId = user.id;
  res.json({ success: true, user: safeUser(user) });
});

/* ── Sincronização de progresso / plano / último acesso ─────── */

app.get("/api/sync", requireAuthApi, (req, res) => {
  const u = req.currentUser;
  touchLastAccess(u);
  res.json({
    success: true,
    progress: u.progress || {},
    plano: u.plano || null,
    lastVisited: u.lastVisited || null,
  });
});

app.put("/api/sync", requireAuthApi, (req, res) => {
  const users = readUsers();
  const u = users.find((x) => x.id === req.currentUser.id);
  if (!u) return res.status(404).json({ success: false });

  if (req.body.progress && typeof req.body.progress === "object") {
    u.progress = req.body.progress;
  }
  if (Object.prototype.hasOwnProperty.call(req.body, "plano")) {
    u.plano = req.body.plano || null;
  }
  if (Object.prototype.hasOwnProperty.call(req.body, "lastVisited")) {
    u.lastVisited = req.body.lastVisited || null;
  }
  u.lastAccessAt = new Date().toISOString();
  writeUsers(users);
  res.json({ success: true });
});

/* ── Estatísticas de leitura do Blog ──────────────────────────
   Contagem pública de leituras por artigo (para "mais lidos").
   Persistida no MongoDB (app_data/blog_stats) com fallback em
   data/blog-stats.json. O dedup fica no cliente (1/navegador/dia). */

const BLOG_STATS_JSON = path.join(DATA_DIR, "blog-stats.json");
let _blogStats = {};

async function loadBlogStats() {
  if (_mongoDb) {
    try {
      const doc = await _mongoDb.collection("app_data").findOne({ _id: "blog_stats" });
      return (doc && doc.counts) || {};
    } catch (err) { console.error("[DB] blog_stats:", err.message); }
  }
  try { return JSON.parse(fs.readFileSync(BLOG_STATS_JSON, "utf8") || "{}"); } catch { return {}; }
}

let _blogStatsTimer = null;
function persistBlogStats() {
  clearTimeout(_blogStatsTimer);
  _blogStatsTimer = setTimeout(() => {
    if (_mongoDb) {
      _mongoDb.collection("app_data")
        .replaceOne({ _id: "blog_stats" }, { _id: "blog_stats", counts: _blogStats }, { upsert: true })
        .catch(err => console.error("[DB] blog_stats:", err.message));
    } else {
      try { ensureDataDir(); fs.writeFileSync(BLOG_STATS_JSON, JSON.stringify(_blogStats), "utf8"); }
      catch (err) { console.error("[DB] blog_stats arquivo:", err.message); }
    }
  }, 1500);
}

app.get("/api/blog/stats", (req, res) => {
  res.json({ success: true, counts: _blogStats });
});

app.post("/api/blog/leitura", (req, res) => {
  const id = String(req.body.artigoId || "").trim().slice(0, 80);
  if (!/^[a-z0-9-]+$/.test(id)) {
    return res.status(400).json({ success: false });
  }
  _blogStats[id] = (_blogStats[id] || 0) + 1;
  persistBlogStats();
  res.json({ success: true, total: _blogStats[id] });
});

/* ── Leão IA (opcional) ───────────────────────────────────────
   Se ANTHROPIC_API_KEY estiver configurada no ambiente, as
   perguntas do aluno são respondidas por um LLM real com base
   nos dados de desempenho. Sem a chave, responde 503 e o
   frontend usa o motor de análise local. */

const IA_LIMITE_DIA = parseInt(process.env.IA_LIMITE_DIA || "40", 10);
const _iaUso = new Map(); // userId -> { dia: 'YYYY-MM-DD', usos: n }

function iaDentroDoLimite(userId) {
  const hoje = new Date().toISOString().slice(0, 10);
  const reg = _iaUso.get(userId);
  if (!reg || reg.dia !== hoje) { _iaUso.set(userId, { dia: hoje, usos: 1 }); return true; }
  if (reg.usos >= IA_LIMITE_DIA) return false;
  reg.usos++;
  return true;
}

/* Provedores suportados (em ordem de preferência — os 2 primeiros têm
   nível GRATUITO): Gemini (Google AI Studio), Groq, Anthropic (Claude). */
function iaProvider() {
  const forced = (process.env.IA_PROVIDER || "").toLowerCase();
  if (forced === "gemini" && process.env.GEMINI_API_KEY) return "gemini";
  if (forced === "groq" && process.env.GROQ_API_KEY) return "groq";
  if (forced === "anthropic" && process.env.ANTHROPIC_API_KEY) return "anthropic";
  if (process.env.GEMINI_API_KEY) return "gemini";
  if (process.env.GROQ_API_KEY) return "groq";
  if (process.env.ANTHROPIC_API_KEY) return "anthropic";
  return null;
}

/* Tenta os modelos em ordem e memoriza o que funcionar — nomes de
   modelo do Gemini mudam com o tempo (2.5 → 2.0 → 1.5). */
const GEMINI_MODELS = [
  process.env.IA_MODEL,
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-flash-latest",
].filter(Boolean);
let _geminiModelOk = null;

async function chamarGemini(system, messages) {
  const modelos = _geminiModelOk ? [_geminiModelOk] : GEMINI_MODELS;
  let lastErr = null;
  for (const model of modelos) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
      /* Modelos 2.5 têm "thinking" (raciocínio interno) que CONSOME o
         maxOutputTokens antes da resposta visível — sem desligar, a
         resposta chega truncada no meio da frase. */
      const generationConfig = { maxOutputTokens: 1500, temperature: 0.7 };
      if (/2\.5/.test(model)) generationConfig.thinkingConfig = { thinkingBudget: 0 };
      const r = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: system }] },
          contents: messages.map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }],
          })),
          generationConfig,
        }),
      });
      const data = await r.json();
      const texto = data && data.candidates && data.candidates[0] &&
        data.candidates[0].content && data.candidates[0].content.parts &&
        data.candidates[0].content.parts.filter(p => !p.thought).map(p => p.text || "").join("");
      if (!texto) {
        throw new Error(`Gemini(${model}): ` +
          String(data && data.error ? data.error.message : JSON.stringify(data)).slice(0, 200));
      }
      _geminiModelOk = model;
      return texto;
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("Gemini indisponível");
}

async function chamarGroq(system, messages) {
  const model = process.env.IA_MODEL || "llama-3.3-70b-versatile";
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      max_tokens: 1200,
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  const data = await r.json();
  const texto = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!texto) throw new Error("Groq: " + JSON.stringify(data && data.error ? data.error.message : data).slice(0, 200));
  return texto;
}

async function chamarAnthropic(system, messages) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.IA_MODEL || "claude-haiku-4-5-20251001",
      max_tokens: 1200,
      system,
      messages,
    }),
  });
  const data = await r.json();
  const texto = data && Array.isArray(data.content) && data.content[0] && data.content[0].text;
  if (!texto) throw new Error("Anthropic: " + JSON.stringify(data && data.error ? data.error.message : data).slice(0, 200));
  return texto;
}

app.post("/api/ia", requireAuthApi, async (req, res) => {
  const provider = iaProvider();
  if (!provider) return res.status(503).json({ success: false, local: true });
  if (!iaDentroDoLimite(req.currentUser.id)) {
    return res.json({
      success: true,
      texto: "Você atingiu o limite diário de perguntas ao Leão IA. 🦁 Volte amanhã — enquanto isso, que tal um Minissimulado — Revisão ou uma rodada nos jogos?",
    });
  }
  try {
    const pergunta = String(req.body.pergunta || "Análise geral do meu desempenho").slice(0, 500);
    const contexto = req.body.contexto && typeof req.body.contexto === "object" ? req.body.contexto : {};

    // Histórico de conversa (até 8 mensagens anteriores, alternadas)
    const historico = Array.isArray(req.body.historico)
      ? req.body.historico.slice(-8).filter(m =>
          m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
        .map(m => ({ role: m.role, content: m.content.slice(0, 1200) }))
      : [];

    const messages = [
      ...historico,
      {
        role: "user",
        content: `Dados atualizados do aluno (JSON):\n${JSON.stringify(contexto).slice(0, 6000)}\n\nPergunta do aluno: ${pergunta}`,
      },
    ];
    // A primeira mensagem precisa ser do usuário
    while (messages.length && messages[0].role !== "user") messages.shift();

    const system =
      "Você é o Leão IA, assistente de estudos da plataforma Professor Leão (matemática para concursos PMBA, CBMBA e Correios). " +
      `O aluno se chama ${req.currentUser.name} e está na turma ${req.currentUser.curso || "(não definida)"}. ` +
      "Analise os dados de desempenho fornecidos em JSON (aulas concluídas, ritmo vs. plano, minissimulados, jogos, dias até a prova) " +
      "e responda em português do Brasil, de forma curta, prática e encorajadora, com recomendações concretas de estudo na plataforma " +
      "(aulas, Minissimulado — Revisão, jogos, caderno de erros, plano Pomodoro). Não invente dados que não estejam no JSON. " +
      "Se perguntarem algo fora de estudos/concursos, redirecione gentilmente para a preparação. " +
      "Fatos dos editais que você pode citar: SD PMBA/CBMBA (FCC): 80 questões (50 gerais + 30 específicas), 1,25 ponto cada, corte 60, redação de 20 a 30 linhas. " +
      "CFO PM/BM (UNEB): 80 questões em 5h, zerar qualquer disciplina elimina, Matemática tem 10 questões na PM e 15 na BM; TAF é 2ª etapa com natação.";

    const chamar = { gemini: chamarGemini, groq: chamarGroq, anthropic: chamarAnthropic }[provider];
    const texto = await chamar(system, messages);
    _iaUltimoErro = null;
    res.json({ success: true, texto, provider });
  } catch (err) {
    console.error("[IA]", err.message);
    _iaUltimoErro = err.message;
    res.status(502).json({ success: false, local: true });
  }
});

/* Informa ao frontend se a IA real está configurada (e qual provedor).
   Para admins, expõe o último erro do provedor (debug sem logs). */
let _iaUltimoErro = null;
app.get("/api/ia/status", requireAuthApi, (req, res) => {
  const provider = iaProvider();
  const out = { success: true, llm: !!provider, provider };
  if (req.currentUser.role === "admin" && _iaUltimoErro) out.ultimoErro = _iaUltimoErro;
  res.json(out);
});

/* ── Rotas de admin: convites ───────────────────────────────── */

app.get("/api/admin/invites", requireAuthApi, requireAdminApi, (req, res) => {
  res.json(readInvites());
});

app.post("/api/admin/invites", requireAuthApi, requireAdminApi, (req, res) => {
  const label = String(req.body.label || "").trim().slice(0, 80);
  const curso = String(req.body.curso || "").trim().slice(0, 40);
  const expiresAt = req.body.expiresAt || null;          // validade do LINK
  const accessExpiresAt = req.body.accessExpiresAt || null; // validade do ACESSO criado

  const invite = {
    id: crypto.randomUUID(),
    token: crypto.randomBytes(24).toString("hex"),
    label,
    curso,
    createdAt: new Date().toISOString(),
    expiresAt,
    accessExpiresAt,
    usedAt: null,
    usedBy: null,
  };

  const invites = readInvites();
  invites.push(invite);
  writeInvites(invites);

  const base = `${req.protocol}://${req.get("host")}`;
  res.json({ success: true, invite: { ...invite, url: `${base}/cadastro.html?convite=${invite.token}` } });
});

app.delete("/api/admin/invites/:id", requireAuthApi, requireAdminApi, (req, res) => {
  const invites = readInvites();
  const filtered = invites.filter((i) => i.id !== req.params.id);
  if (filtered.length === invites.length) {
    return res.status(404).json({ success: false, message: "Convite não encontrado." });
  }
  writeInvites(filtered);
  res.json({ success: true });
});

/* ── Rotas de admin: alunos ─────────────────────────────────── */

app.get("/api/admin/alunos", requireAuthApi, requireAdminApi, (req, res) => {
  const alunos = readUsers().map((u) => ({
    ...safeUser(u),
    progress: u.progress || {},
    /* alerta de segurança: conta usada de muitos IPs em 24h
       (possível credencial compartilhada) — sem expor os IPs */
    compartilhamentoSuspeito: !!u.compartilhamentoSuspeito,
    ipsRecentes: new Set((u.acessos || []).map((a) => a.ip)).size,
  }));
  res.json(alunos);
});

/* admin gera um link de redefinição para um aluno (fallback do
   WhatsApp quando o e-mail automático não está configurado) */
app.post("/api/admin/gerar-reset/:id", requireAuthApi, requireAdminApi, (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ success: false, message: "Aluno não encontrado." });
  const token = crypto.randomBytes(32).toString("hex");
  user.resetToken = crypto.createHash("sha256").update(token).digest("hex");
  user.resetExpira = Date.now() + 60 * 60 * 1000;
  writeUsers(users);
  const link = baseUrl(req) + "/redefinir-senha.html?token=" + token;
  res.json({ success: true, link, email: user.email, validade: "1 hora" });
});

app.post("/api/admin/users", requireAuthApi, requireAdminApi, (req, res) => {
  const { name, email, telefone, password, expiresAt, role, curso } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Nome, e-mail e senha são obrigatórios." });
  }
  if (String(password).length < 6) {
    return res.status(400).json({ success: false, message: "Senha mínima de 6 caracteres." });
  }
  const users = readUsers();
  if (users.some((u) => u.email.toLowerCase() === String(email).toLowerCase())) {
    return res.status(400).json({ success: false, message: "E-mail já cadastrado." });
  }
  const user = {
    id: crypto.randomUUID(),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    telefone: String(telefone || "").replace(/\D/g, "").slice(0, 13),
    password: bcrypt.hashSync(String(password), 10),
    role: role === "admin" ? "admin" : "student",
    curso: String(curso || "").trim(),
    active: true,
    expiresAt: expiresAt || null,
    createdAt: new Date().toISOString(),
    lastAccessAt: null,
    progress: {},
    plano: null,
    lastVisited: null,
  };
  users.push(user);
  writeUsers(users);
  res.json({ success: true, user: safeUser(user) });
});

app.patch("/api/admin/users/:id", requireAuthApi, requireAdminApi, (req, res) => {
  const users = readUsers();
  const idx = users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: "Usuário não encontrado." });

  ["active", "expiresAt", "name", "role", "curso", "telefone"].forEach((f) => {
    if (Object.prototype.hasOwnProperty.call(req.body, f)) users[idx][f] = req.body[f];
  });
  if (req.body.password && String(req.body.password).length >= 6) {
    users[idx].password = bcrypt.hashSync(String(req.body.password), 10);
  }
  writeUsers(users);
  res.json({ success: true });
});

app.delete("/api/admin/users/:id", requireAuthApi, requireAdminApi, (req, res) => {
  if (req.params.id === req.currentUser.id) {
    return res.status(400).json({ success: false, message: "Você não pode remover a própria conta." });
  }
  const users = readUsers();
  const filtered = users.filter((u) => u.id !== req.params.id);
  if (filtered.length === users.length) {
    return res.status(404).json({ success: false, message: "Usuário não encontrado." });
  }
  writeUsers(filtered);
  res.json({ success: true });
});

/* ── Arquivos estáticos (o site inteiro) ────────────────────── */

const BLOCKED_PATHS = [
  /^\/data(\/|$)/i,
  /^\/node_modules(\/|$)/i,
  /^\/_fontes(\/|$)/i,
  /^\/\.git(\/|$)/i,
  /^\/server\.js$/i,
  /^\/package(-lock)?\.json$/i,
  /^\/railway\.json$/i,
];

app.use((req, res, next) => {
  if (BLOCKED_PATHS.some((re) => re.test(req.path))) {
    return res.status(404).send("Not found");
  }
  next();
});

app.use(express.static(ROOT_DIR, { extensions: ["html"] }));

app.use((req, res) => {
  if (req.accepts("html")) {
    return res.status(404).sendFile(path.join(ROOT_DIR, "index.html"));
  }
  res.status(404).json({ success: false, message: "Rota não encontrada." });
});

/* ── Startup ────────────────────────────────────────────────── */

(async () => {
  ensureDataDir();
  await connectMongo();
  _usersCache = await loadDoc("users", "users");
  _invitesCache = await loadDoc("invites", "invites");
  _blogStats = await loadBlogStats();
  seedAdminUser();
  app.listen(PORT, () => {
    console.log(`Professor Leão rodando em http://localhost:${PORT}`);
  });
})();
