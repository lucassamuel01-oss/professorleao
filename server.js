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
const { MongoClient, GridFSBucket } = require("mongodb");
let nodemailer = null;
try { nodemailer = require("nodemailer"); } catch (e) { /* opcional */ }
let MongoStore = null;
try { const _cm = require("connect-mongo"); MongoStore = _cm.default || _cm.MongoStore || _cm; } catch (e) { /* opcional */ }
let webpush = null;
try { webpush = require("web-push"); } catch (e) { /* opcional — push desativado sem a lib */ }

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
/* sessões no MongoDB (sobrevivem a deploys); se o store falhar por
   qualquer motivo, NÃO derruba o app — cai no MemoryStore padrão */
let _sessStore;
try {
  if (process.env.MONGODB_URI && MongoStore) {
    _sessStore = MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      dbName: "professor-leao",
      collectionName: "sessions",
      ttl: 30 * 24 * 60 * 60,
    });
  }
} catch (e) { console.error("[SESSION] store falhou, usando MemoryStore:", e && e.message); _sessStore = undefined; }
app.use(
  session({
    secret: getSessionSecret(),
    store: _sessStore,
    resave: false,
    saveUninitialized: false,
    /* secure:"auto" → cookie só viaja por HTTPS em produção (atrás do
       proxy do Railway, via trust proxy); em dev local (HTTP) continua
       funcionando. httpOnly evita leitura por JS; sameSite lax mitiga CSRF. */
    cookie: { httpOnly: true, sameSite: "lax", secure: "auto", maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);

/* ════════════════════════════════════════════════════════════
   SEGURANÇA E PROTEÇÃO
   ════════════════════════════════════════════════════════════ */

/* ── 1. Cabeçalhos de segurança (anti-embed, anti-sniff, etc.) ── */
app.use((req, res, next) => {
  /* impede que o site seja embutido em iframe de TERCEIROS
     (anti-clickjacking), mas permite o próprio site embutir suas
     páginas (a aula carrega jogos, listas e materiais em iframe) */
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
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
      "frame-ancestors 'self'", // só o próprio site pode embutir suas páginas
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
  /* webhooks são chamadas servidor-a-servidor (sem navegador): NÃO podem
     ser barradas, senão o Mercado Pago não consegue avisar do pagamento */
  if (/^\/api\/webhook\//.test(req.originalUrl)) return next();
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
let _couponsCache = [];
let _vendasCache = [];

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
  const file = path.join(DATA_DIR, id + ".json");
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
function readCupons() {
  return _couponsCache;
}
function writeCupons(cupons) {
  _couponsCache = cupons;
  persistDoc("coupons", "coupons", cupons);
}
function readVendas() {
  return _vendasCache;
}
function writeVendas(vendas) {
  _vendasCache = vendas;
  persistDoc("vendas", "vendas", vendas);
}

/* ── Inscrições de notificações push (Web Push) ──────────────
   Guardadas em app_data (Mongo) ou em data/push_subs.json (fallback). */
let _pushSubsCache = [];
function readPushSubs() {
  return _pushSubsCache;
}
function writePushSubs(subs) {
  _pushSubsCache = subs;
  if (_mongoDb) {
    _mongoDb
      .collection("app_data")
      .replaceOne({ _id: "push_subs" }, { _id: "push_subs", subs }, { upsert: true })
      .catch((err) => console.error("[PUSH] Erro ao salvar inscrições:", err.message));
  } else {
    try {
      ensureDataDir();
      fs.writeFileSync(path.join(DATA_DIR, "push_subs.json"), JSON.stringify(subs, null, 2), "utf8");
    } catch (err) {
      console.error("[PUSH] Erro ao salvar inscrições em arquivo:", err.message);
    }
  }
}
async function loadPushSubs() {
  if (_mongoDb) {
    try {
      const doc = await _mongoDb.collection("app_data").findOne({ _id: "push_subs" });
      return doc && Array.isArray(doc.subs) ? doc.subs : [];
    } catch (err) {
      console.error("[PUSH] Erro ao carregar inscrições:", err.message);
      return [];
    }
  }
  const file = path.join(DATA_DIR, "push_subs.json");
  if (!fs.existsSync(file)) return [];
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf8").trim() || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* Chaves VAPID — geradas uma vez (npx web-push generate-vapid-keys) e
   definidas no Railway. A privada NUNCA fica no código versionado. */
const VAPID_PUBLIC = process.env.VAPID_PUBLIC_KEY || "";
const VAPID_PRIVATE = process.env.VAPID_PRIVATE_KEY || "";
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || "mailto:contato@professorleao.com";
let _pushReady = false;
function setupPush() {
  if (webpush && VAPID_PUBLIC && VAPID_PRIVATE) {
    try {
      webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, VAPID_PRIVATE);
      _pushReady = true;
      console.log("[PUSH] Web Push ativo ✓");
    } catch (e) {
      console.error("[PUSH] Chaves VAPID inválidas:", e.message);
    }
  } else {
    console.log(
      "[PUSH] Web Push inativo — defina VAPID_PUBLIC_KEY e VAPID_PRIVATE_KEY" +
        (webpush ? "." : " e instale a dependência web-push.")
    );
  }
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

/* Credenciais do admin — NADA fica no código versionado.
   - E-mail: variável ADMIN_EMAIL (padrão: o e-mail do professor).
   - Senha:  variável ADMIN_PASSWORD (defina no Railway). Sem ela, na
             primeira vez o sistema gera uma senha aleatória forte,
             cria o admin e a registra UMA VEZ no log do servidor —
             depois disso a senha definida pelo admin é preservada. */
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "lucas.samuel01@gmail.com").toLowerCase();
const ADMIN_NAME = process.env.ADMIN_NAME || "Lucas Leão";

function seedAdminUser() {
  let users = readUsers();
  /* migração: remove credenciais antigas de admin (e-mail/senha que
     já estiveram no código público em versões anteriores) */
  const antigos = users.filter((u) => u.role === "admin" && u.email.toLowerCase() !== ADMIN_EMAIL);
  if (antigos.length) {
    users = users.filter((u) => !(u.role === "admin" && u.email.toLowerCase() !== ADMIN_EMAIL));
    console.log(`[ADMIN] ${antigos.length} admin(s) antigo(s) removido(s) na migração.`);
  }

  const atual = users.find((u) => u.email.toLowerCase() === ADMIN_EMAIL);
  if (atual) {
    atual.role = "admin";
    atual.name = atual.name || ADMIN_NAME;
    atual.active = true;
    atual.expiresAt = null;
    /* só (re)define a senha quando ADMIN_PASSWORD existe — é a âncora.
       Sem a variável, preserva a senha atual (incl. a redefinida pelo
       próprio admin via "esqueci minha senha"). */
    if (process.env.ADMIN_PASSWORD) {
      atual.password = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
    }
    writeUsers(users);
    console.log(`[ADMIN] Conta de administrador garantida: ${ADMIN_EMAIL}`);
    return;
  }

  /* admin ainda não existe → cria */
  let senha = process.env.ADMIN_PASSWORD;
  let gerada = false;
  if (!senha) {
    senha = crypto.randomBytes(9).toString("base64").replace(/[^A-Za-z0-9]/g, "").slice(0, 12) + "9A!";
    gerada = true;
  }
  users.push({
    id: "admin-001",
    name: ADMIN_NAME,
    email: ADMIN_EMAIL,
    password: bcrypt.hashSync(senha, 10),
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
  if (gerada) {
    console.log("════════════════════════════════════════════════════");
    console.log(`[ADMIN] Conta criada: ${ADMIN_EMAIL}`);
    console.log(`[ADMIN] Senha temporária (anote e troque): ${senha}`);
    console.log("[ADMIN] Defina ADMIN_PASSWORD nas variáveis do Railway para fixar a sua senha.");
    console.log("════════════════════════════════════════════════════");
  } else {
    console.log(`[ADMIN] Administrador criado: ${ADMIN_EMAIL}`);
  }
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

let _bancoCount = null, _bancoCountAt = 0;
app.get("/health", (req, res) => {
  /* responde IMEDIATAMENTE — o healthcheck do Railway não pode depender
     de uma consulta ao banco. A contagem é atualizada em segundo plano. */
  res.json({ ok: true, app: "professor-leao", db: !!_mongoDb, banco: _bancoCount });
  if (_mongoDb && Date.now() - _bancoCountAt > 30000) {
    _bancoCountAt = Date.now();
    try { getBancoCol().countDocuments().then((n) => { _bancoCount = n; }).catch(() => {}); } catch (e) {}
  }
});

/* ── Digital Asset Links (app Android / TWA) ─────────────────
   Verifica o app instalado para que ele abra a plataforma em TELA
   CHEIA, sem a barra do navegador. O fingerprint SHA-256 da chave de
   ASSINATURA do app (no Play App Signing, é a chave do Google — veja
   Play Console → Configuração → Assinatura do app) vai na variável de
   ambiente TWA_SHA256_FINGERPRINTS (separe por vírgula se houver mais
   de uma). O nome do pacote padrão é com.professorleao.app. */
app.get("/.well-known/assetlinks.json", (req, res) => {
  const pkg = process.env.TWA_PACKAGE_ID || "com.professorleao.app";
  const fingerprints = String(process.env.TWA_SHA256_FINGERPRINTS || "")
    .split(",").map((s) => s.trim()).filter(Boolean);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: { namespace: "android_app", package_name: pkg, sha256_cert_fingerprints: fingerprints },
    },
  ]);
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
    // timeouts curtos: se a porta SMTP estiver bloqueada (comum no Railway),
    // falha em ~12s em vez de pendurar por 2 minutos.
    connectionTimeout: 12000, greetingTimeout: 8000, socketTimeout: 12000,
  });
  return _mailer;
}

/* Remetente (apenas o e-mail, sem o nome) para a API do Brevo */
function _fromEmail() {
  const raw = process.env.SMTP_FROM || process.env.SMTP_USER || "";
  const m = raw.match(/<([^>]+)>/);
  return (m ? m[1] : raw).trim();
}

/* Envio unificado de e-mail. Prioriza a API HTTP do Brevo (porta 443 —
   não é bloqueada pelo Railway, ao contrário das portas SMTP). Sem
   BREVO_API_KEY, cai para SMTP (nodemailer). Retorna {ok, error}. */
async function enviarEmail(to, subject, html) {
  if (process.env.BREVO_API_KEY) {
    try {
      const r = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": process.env.BREVO_API_KEY, "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          sender: { email: _fromEmail() || "no-reply@professorleao.com", name: "Professor Leão" },
          to: [{ email: to }],
          subject,
          htmlContent: html,
        }),
      });
      if (r.ok) return { ok: true, via: "brevo-api" };
      const t = await r.text().catch(() => "");
      return { ok: false, error: "Brevo API " + r.status + ": " + t.slice(0, 180) };
    } catch (e) { return { ok: false, error: "Brevo API: " + e.message }; }
  }
  const mailer = getMailer();
  if (!mailer) return { ok: false, error: "sem-smtp" };
  try {
    await mailer.sendMail({ from: process.env.SMTP_FROM || `"Professor Leão" <${process.env.SMTP_USER}>`, to, subject, html });
    return { ok: true, via: "smtp" };
  } catch (e) { return { ok: false, error: e.message }; }
}

function baseUrl(req) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/+$/, "");
  const proto = (req.headers["x-forwarded-proto"] || (req.secure ? "https" : "http")).split(",")[0].trim();
  const host = (req.headers["x-forwarded-host"] || req.headers.host || "").split(",")[0].trim();
  return proto + "://" + host;
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
    const html =
      `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:auto;color:#1c2438">
        <h2 style="color:#0A1628">Redefinição de senha</h2>
        <p>Olá, ${String(user.name || "aluno").replace(/[<>]/g, "")}! Recebemos um pedido para redefinir a sua senha na plataforma Professor Leão.</p>
        <p style="text-align:center;margin:26px 0">
          <a href="${link}" style="background:#4A6CF7;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:bold">Criar nova senha</a>
        </p>
        <p style="font-size:13px;color:#56607a">O link vale por 1 hora. Se você não pediu isso, ignore este e-mail — sua senha continua a mesma.</p>
        <p style="font-size:12px;color:#8892a8;border-top:1px solid #e2e6f0;padding-top:12px;margin-top:18px">🦁 Professor Leão · www.professorleao.com</p>
      </div>`;
    const r = await enviarEmail(user.email, "Redefinição de senha — Professor Leão", html);
    if (!r.ok) {
      /* sem e-mail (ou falha): registra para o admin enviar o link via WhatsApp */
      console.error("[RESET] Falha ao enviar e-mail:", r.error);
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

/* ════════════════════════════════════════════════════════════
   LOJA — PRODUTOS, CUPONS E PAGAMENTO (Mercado Pago)
   ════════════════════════════════════════════════════════════ */

/* Catálogo oficial — o PREÇO é definido AQUI, no servidor (nunca
   confiamos no valor enviado pelo cliente). */
/* `dias` = período de acesso liberado pela compra. Assinaturas seguem
   seu ciclo; cursos/apostilas avulsos dão 1 ano (365 dias) de acesso. */
const PRODUTOS_LOJA = {
  mensal:         { nome: "Assinatura Mensal",                    preco: 49.9,  dias: 30 },
  trimestral:     { nome: "Assinatura Trimestral",               preco: 119.9, dias: 90 },
  anual:          { nome: "Assinatura Anual",                    preco: 297.0, dias: 365 },
  cfo:            { nome: "Curso CFO PMBA — Completo",            preco: 257.0, dias: 365 },
  sd:             { nome: "Curso SD PMBA — Completo",             preco: 210.0, dias: 365 },
  basica:         { nome: "Curso Matemática Básica",             preco: 96.0,  dias: 365 },
  correios:       { nome: "Curso Correios",                      preco: 140.0, dias: 365 },
  apostilaCfsd:   { nome: "Apostila CFSD 2026",                  preco: 47.0,  dias: 365 },
  apostilaCfo:    { nome: "Apostila CFO",                        preco: 57.0,  dias: 365 },
  aovivo:         { nome: "Aulas ao Vivo e Mentoria — SD/PMBA",   preco: 497.0, dias: 365 },
};

/* ── Cupons ── */
function cupomValido(codigo, produtoId) {
  if (!codigo) return null;
  const c = readCupons().find((x) => x.codigo.toUpperCase() === String(codigo).toUpperCase());
  if (!c || c.ativo === false) return null;
  if (c.validade && new Date(c.validade).getTime() < Date.now()) return null;
  if (c.limiteUso && (c.usos || 0) >= c.limiteUso) return null;
  if (Array.isArray(c.produtos) && c.produtos.length && !c.produtos.includes(produtoId)) return null;
  return c;
}
function aplicarCupom(preco, cupom) {
  if (!cupom) return preco;
  let p = cupom.tipo === "fixo" ? preco - cupom.valor : preco * (1 - cupom.valor / 100);
  return Math.max(0, Math.round(p * 100) / 100);
}

/* ── Acesso: período e cursos ──────────────────────────────────
   somarPeriodo: estende a validade. Se ainda houver acesso futuro,
   SOMA os dias ao fim atual (não perde o que falta); se já expirou
   ou não havia prazo, conta a partir de agora. */
function somarPeriodo(expiresAtAtual, dias) {
  const agora = Date.now();
  let base = agora;
  if (expiresAtAtual) {
    const t = new Date(expiresAtAtual).getTime();
    if (!isNaN(t) && t > agora) base = t; // ainda válido → soma ao restante
  }
  return new Date(base + (dias || 365) * 86400000).toISOString();
}
function cursoInclui(cursoAtual, produtoNome) {
  if (!cursoAtual || !produtoNome) return false;
  const a = cursoAtual.toLowerCase();
  const b = String(produtoNome).toLowerCase();
  if (a.includes("todos")) return true;           // acesso total cobre tudo
  return a.includes(b) || b.includes(a);          // casa nos dois sentidos
}
function mesclarCurso(cursoAtual, produtoNome) {
  if (!produtoNome) return cursoAtual || "";
  if (!cursoAtual) return produtoNome;
  if (cursoInclui(cursoAtual, produtoNome)) return cursoAtual;
  return cursoAtual + " + " + produtoNome;
}
function fmtDataBR(iso) {
  try { return new Date(iso).toLocaleDateString("pt-BR"); } catch { return ""; }
}

/* Envia o e-mail de acesso (novo cadastro OU renovação). Best-effort:
   só envia se houver SMTP e e-mail do comprador. Retorna true/false. */
async function enviarEmailAcesso(venda, req) {
  if (!process.env.BREVO_API_KEY && !getMailer()) { venda.emailStatus = "sem-config"; console.error("[VENDA] e-mail NÃO enviado: sem BREVO_API_KEY nem SMTP configurados no Railway."); return false; }
  if (!venda.email) { venda.emailStatus = "sem-email"; console.error("[VENDA] e-mail NÃO enviado: comprador sem e-mail capturado."); return false; }
  const base = baseUrl(req);
  const nomeProd = String(venda.produtoNome || "seu produto").replace(/[<>]/g, "");
  let assunto, corpo;
  if (venda.tipoAcesso === "estendido") {
    const ate = fmtDataBR(venda.novoExpiraEm);
    assunto = "Acesso renovado — Professor Leão";
    corpo = `<h2 style="color:#0A1628">Pagamento aprovado! 🎉</h2>
      <p>Sua compra de <b>${nomeProd}</b> foi confirmada. Como você já é aluno, somamos o período à sua conta — seu acesso vai até <b>${ate}</b>.</p>
      <p style="text-align:center;margin:24px 0"><a href="${base}/login.html" style="background:#4A6CF7;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:bold">Entrar na Área do Aluno</a></p>`;
  } else {
    const link = base + "/cadastro.html?convite=" + venda.conviteToken;
    assunto = "Acesso liberado — Professor Leão";
    corpo = `<h2 style="color:#0A1628">Pagamento aprovado! 🎉</h2>
      <p>Sua compra de <b>${nomeProd}</b> foi confirmada. Crie seu acesso à plataforma:</p>
      <p style="text-align:center;margin:24px 0"><a href="${link}" style="background:#4A6CF7;color:#fff;padding:13px 26px;border-radius:10px;text-decoration:none;font-weight:bold">Criar meu acesso</a></p>
      <p style="font-size:12px;color:#8892a8">Se o botão não funcionar, copie e cole no navegador:<br>${link}</p>`;
  }
  const html = `<div style="font-family:Arial,Helvetica,sans-serif;max-width:480px;margin:auto;color:#1c2438">${corpo}
        <p style="font-size:12px;color:#8892a8;border-top:1px solid #e2e6f0;padding-top:12px;margin-top:18px">🦁 Professor Leão · www.professorleao.com</p></div>`;
  const r = await enviarEmail(venda.email, assunto, html);
  if (r.ok) {
    venda.emailStatus = "enviado"; venda.emailErro = null;
    console.log(`[VENDA] e-mail de acesso enviado para ${venda.email} via ${r.via} (${venda.tipoAcesso})`);
    return true;
  }
  venda.emailStatus = "falha"; venda.emailErro = r.error;
  console.error("[VENDA] FALHA ao enviar e-mail para " + venda.email + ": " + r.error);
  return false;
}

/* Processa uma venda APROVADA (idempotente). Conta o cupom e, conforme
   o e-mail já seja de aluno ou não:
   - aluno existente → SOMA o período de acesso (evita duplicar conta);
   - e-mail novo     → gera convite de cadastro com validade do produto.
   Usado pelo webhook E pela página de sucesso (que também confirma o
   pagamento no MP), para que o acesso nunca dependa só do e-mail. */
async function processarVendaAprovada(vendaId, req) {
  const vendas = readVendas();
  const venda = vendas.find((v) => v.id === vendaId);
  if (!venda) return null;
  if (venda.status !== "approved") return { status: venda.status, venda };
  if (venda.processada) {
    return {
      status: "approved", processada: true, tipoAcesso: venda.tipoAcesso,
      conviteToken: venda.conviteToken || null, novoExpiraEm: venda.novoExpiraEm || null,
      produtoNome: venda.produtoNome,
    };
  }
  venda.processada = true; // trava de idempotência (antes de qualquer await)

  if (venda.cupom) {
    const cupons = readCupons();
    const c = cupons.find((x) => x.codigo.toUpperCase() === venda.cupom.toUpperCase());
    if (c) { c.usos = (c.usos || 0) + 1; writeCupons(cupons); }
  }

  const prod = PRODUTOS_LOJA[venda.produto] || {};
  const dias = prod.dias || 365;
  const users = readUsers();
  const existente = venda.email
    ? users.find((u) => u.email.toLowerCase() === venda.email.toLowerCase())
    : null;

  if (existente) {
    existente.expiresAt = somarPeriodo(existente.expiresAt, dias);
    existente.active = true;
    existente.curso = mesclarCurso(existente.curso, venda.produtoNome);
    venda.tipoAcesso = "estendido";
    venda.usuarioId = existente.id;
    venda.novoExpiraEm = existente.expiresAt;
    writeUsers(users);
    console.log(`[VENDA] Aprovada (${venda.produtoNome}) — aluno EXISTENTE ${venda.email}; acesso somado até ${fmtDataBR(existente.expiresAt)}`);
  } else {
    const token = crypto.randomBytes(16).toString("hex");
    const invites = readInvites();
    invites.push({
      id: "i" + Date.now().toString(36),
      token, email: venda.email || "", curso: venda.produtoNome,
      accessExpiresAt: new Date(Date.now() + dias * 86400000).toISOString(),
      createdAt: new Date().toISOString(), usedAt: null, origem: "compra:" + venda.id,
    });
    writeInvites(invites);
    venda.tipoAcesso = "novo";
    venda.conviteToken = token;
    console.log(`[VENDA] Aprovada (${venda.produtoNome}) — convite ${token} para ${venda.email || "sem e-mail"}`);
  }
  writeVendas(vendas);
  await enviarEmailAcesso(venda, req);
  writeVendas(vendas); // persiste o resultado do envio do e-mail (emailStatus/emailErro)
  return {
    status: "approved", processada: false, tipoAcesso: venda.tipoAcesso,
    conviteToken: venda.conviteToken || null, novoExpiraEm: venda.novoExpiraEm || null,
    produtoNome: venda.produtoNome,
  };
}

/* Cupom permanente de indicação: 10% para quem indica E para quem é
   indicado (ambos usam o mesmo código no checkout). Garantido no
   startup para sobreviver a redeploys, igual à conta de admin. */
function seedReferralCoupon() {
  const cupons = readCupons();
  if (cupons.some((c) => c.codigo.toUpperCase() === "INDICA10")) return;
  cupons.push({
    codigo: "INDICA10", tipo: "percent", valor: 10,
    validade: null, limiteUso: null, produtos: [],
    usos: 0, ativo: true, criadoEm: new Date().toISOString(),
  });
  writeCupons(cupons);
  console.log("[CUPOM] Cupom de indicação garantido: INDICA10 (10%)");
}

/* valida um cupom (usado pelo front para mostrar o desconto) */
app.post("/api/validar-cupom", rateLimit({ janelaMs: 60000, max: 30, escopo: "cupom" }), (req, res) => {
  const { codigo, produto } = req.body || {};
  const prod = PRODUTOS_LOJA[produto];
  if (!prod) return res.status(400).json({ valido: false, message: "Produto inválido." });
  const c = cupomValido(codigo, produto);
  if (!c) return res.json({ valido: false, message: "Cupom inválido ou expirado." });
  const precoFinal = aplicarCupom(prod.preco, c);
  res.json({
    valido: true,
    desconto: c.tipo === "fixo" ? `R$ ${c.valor.toFixed(2)}` : `${c.valor}%`,
    precoOriginal: prod.preco,
    precoFinal,
  });
});

/* ════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES (MongoDB · coleção banco_questoes)
   Questões reais de banca, carregadas no Mongo (privado) pelo
   script _ingest_banco.js. Servidas só a alunos logados. Sem
   Mongo / coleção vazia → responde vazio (degrada sem quebrar).
   ════════════════════════════════════════════════════════════ */
function getBancoCol() {
  return _mongoDb ? _mongoDb.collection("banco_questoes") : null;
}

/* catálogo completo (admin): contagem por área→assunto e por banca */
app.get("/api/banco/catalogo", requireAuthApi, requireAdminApi, async (req, res) => {
  const col = getBancoCol();
  if (!col) return res.json({ disponivel: false, total: 0 });
  try {
    const [porAssunto, porBanca, total] = await Promise.all([
      col.aggregate([
        { $group: { _id: { area: "$area", assunto: "$assunto" }, n: { $sum: 1 }, usaveis: { $sum: { $cond: ["$img", 0, 1] } } } },
        { $sort: { "_id.area": 1, n: -1 } },
      ]).toArray(),
      col.aggregate([{ $group: { _id: "$banca", n: { $sum: 1 } } }, { $sort: { n: -1 } }]).toArray(),
      col.countDocuments(),
    ]);
    res.json({
      disponivel: true, total,
      porAssunto: porAssunto.map(a => ({ area: a._id.area, assunto: a._id.assunto, n: a.n, usaveis: a.usaveis })),
      porBanca: porBanca.map(b => ({ banca: b._id, n: b.n })),
    });
  } catch (e) { res.status(500).json({ disponivel: false, message: e.message }); }
});

/* assuntos usáveis (qualquer aluno) — para montar simulados */
app.get("/api/banco/assuntos", requireAuthApi, async (req, res) => {
  const col = getBancoCol();
  if (!col) return res.json({ disponivel: false, assuntos: [] });
  try {
    const ass = await col.aggregate([
      { $match: { img: false } },
      { $group: { _id: { area: "$area", assunto: "$assunto" }, n: { $sum: 1 } } },
      { $sort: { "_id.area": 1, "_id.assunto": 1 } },
    ]).toArray();
    res.json({ disponivel: true, assuntos: ass.map(a => ({ area: a._id.area, assunto: a._id.assunto, n: a.n })) });
  } catch (e) { res.status(500).json({ disponivel: false, message: e.message }); }
});

/* gera N questões reais por assunto (minissimulado). Prioriza a banca
   preferida (ex.: UNEB do PMBA) e completa com as demais. */
app.post("/api/banco/simulado", requireAuthApi, rateLimit({ janelaMs: 60000, max: 40, escopo: "banco" }), async (req, res) => {
  const col = getBancoCol();
  if (!col) return res.json({ disponivel: false, questoes: [] });
  let { assuntos, termos, bancaPref, n, semImagem } = req.body || {};
  n = Math.min(Math.max(parseInt(n, 10) || 10, 1), 30);
  if (!Array.isArray(assuntos)) assuntos = assuntos ? [assuntos] : [];
  assuntos = assuntos.map(String).slice(0, 40);
  const match = {};
  if (semImagem) match.img = false; // ex.: geração de PDF
  if (Array.isArray(termos) && termos.length) {
    /* match flexível por palavra do assunto (ex.: "Porcentagem" casa o assunto do banco) */
    match.$or = termos.slice(0, 40).map((t) => ({
      assunto: { $regex: String(t).slice(0, 60).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" },
    }));
  } else if (assuntos.length) {
    match.assunto = { $in: assuntos };
  }
  try {
    const pipeline = [{ $match: match }, { $sample: { size: n * 5 } }];
    let docs = await col.aggregate(pipeline).toArray();
    /* prioriza banca preferida sem excluir as demais */
    if (bancaPref) docs.sort((a, b) => (a.banca === bancaPref ? 0 : 1) - (b.banca === bancaPref ? 0 : 1));
    /* evita repetir o mesmo assunto em sequência */
    const escolhidas = docs.slice(0, n).map((q, i) => ({
      num: i + 1,
      enunciado: q.enunciado,
      opcoes: q.opcoes,
      gabarito: q.gabarito,
      fonte: [q.banca, q.ano].filter(Boolean).join(" · "),
      imagens: q.imagens || [],
      _assunto: q.assunto,
    }));
    res.json({ disponivel: true, total: escolhidas.length, questoes: escolhidas });
  } catch (e) { res.status(500).json({ disponivel: false, message: e.message }); }
});

/* imagem de questão (GridFS) — só aluno logado. id = nome do arquivo. */
app.get("/api/banco/imagem/:id", requireAuthApi, (req, res) => {
  if (!_mongoDb) return res.sendStatus(404);
  const id = String(req.params.id || "").replace(/[^a-zA-Z0-9_.-]/g, "");
  if (!id) return res.sendStatus(404);
  _mongoDb.collection("banco_imagens.files").findOne({ filename: id }).then((f) => {
    if (!f) return res.sendStatus(404);
    res.setHeader("Content-Type", (f.metadata && f.metadata.contentType) || "application/octet-stream");
    res.setHeader("Cache-Control", "private, max-age=86400");
    const bucket = new GridFSBucket(_mongoDb, { bucketName: "banco_imagens" });
    bucket.openDownloadStreamByName(id).on("error", () => res.sendStatus(404)).pipe(res);
  }).catch(() => res.sendStatus(404));
});

/* ── Checkout via Mercado Pago (Checkout Pro) ──
   Cria uma preferência de pagamento e devolve a URL do checkout
   HOSPEDADO pelo Mercado Pago (o cartão é digitado lá, nunca aqui).
   Requer MP_ACCESS_TOKEN nas variáveis de ambiente. */
/* Verifica, ANTES do pagamento, se o e-mail já é de aluno e se já tem o
   produto — para avisar sobre duplicidade. Se o aluno seguir mesmo
   assim, o período é somado (ver processarVendaAprovada). Responde só
   booleans + a data de validade (do próprio comprador). */
app.post("/api/checkout/verificar", rateLimit({ janelaMs: 60000, max: 15, escopo: "verificar" }), (req, res) => {
  const produto = String((req.body && req.body.produto) || "");
  const email = String((req.body && req.body.email) || "").trim().toLowerCase();
  const prod = PRODUTOS_LOJA[produto];
  if (!prod) return res.status(400).json({ success: false, message: "Produto inválido." });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.json({ success: true, jaAluno: false });
  const u = readUsers().find((x) => x.email.toLowerCase() === email);
  if (!u || u.role === "admin") return res.json({ success: true, jaAluno: false });
  res.json({
    success: true,
    jaAluno: true,
    ativo: isAccessValid(u),
    expiraEm: u.expiresAt || null,
    jaTemProduto: cursoInclui(u.curso, prod.nome),
    diasProduto: prod.dias || 365,
    produtoNome: prod.nome,
  });
});

app.post("/api/checkout", rateLimit({ janelaMs: 60000, max: 20, escopo: "checkout" }), async (req, res) => {
  const { produto, cupom, nome, email } = req.body || {};
  const prod = PRODUTOS_LOJA[produto];
  if (!prod) return res.status(400).json({ success: false, message: "Produto inválido." });

  if (!process.env.MP_ACCESS_TOKEN) {
    return res.json({ success: false, semGateway: true, message: "Pagamento online ainda não configurado." });
  }

  const c = cupomValido(cupom, produto);
  const preco = aplicarCupom(prod.preco, c);
  const vendaId = "v" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const base = baseUrl(req);

  try {
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        items: [{ title: prod.nome, quantity: 1, unit_price: preco, currency_id: "BRL" }],
        payer: nome || email ? { name: nome || "", email: email || "" } : undefined,
        external_reference: vendaId,
        back_urls: {
          success: base + "/compra-sucesso.html",
          failure: base + "/planos.html",
          pending: base + "/compra-sucesso.html",
        },
        auto_return: "approved",
        notification_url: base + "/api/webhook/mercadopago",
        statement_descriptor: "PROFESSORLEAO",
      }),
    });
    const data = await r.json();
    if (!data.init_point) {
      console.error("[CHECKOUT] Resposta do MP sem init_point:", JSON.stringify(data).slice(0, 200));
      return res.status(502).json({ success: false, message: "Não foi possível iniciar o pagamento." });
    }
    /* registra a venda como pendente */
    const vendas = readVendas();
    vendas.unshift({
      id: vendaId, produto, produtoNome: prod.nome,
      precoOriginal: prod.preco, precoFinal: preco,
      cupom: c ? c.codigo : null, nome: nome || "", email: email || "",
      status: "pendente", criadoEm: new Date().toISOString(), mpPreferenceId: data.id,
    });
    writeVendas(vendas.slice(0, 2000));
    res.json({ success: true, url: data.init_point });
  } catch (err) {
    console.error("[CHECKOUT] Erro:", err.message);
    res.status(502).json({ success: false, message: "Erro ao iniciar o pagamento." });
  }
});

/* Webhook do Mercado Pago: confirma o pagamento e marca a venda.
   Aprovado → conta o uso do cupom e, se houver SMTP, envia um convite
   de cadastro automático ao comprador. */
app.post("/api/webhook/mercadopago", async (req, res) => {
  res.sendStatus(200); // responde rápido (o MP reenvia se demorar)
  try {
    const tipo = req.body && (req.body.type || req.body.topic);
    const pid = req.body && req.body.data && req.body.data.id;
    if (tipo !== "payment" || !pid || !process.env.MP_ACCESS_TOKEN) return;

    const r = await fetch("https://api.mercadopago.com/v1/payments/" + pid, {
      headers: { Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN },
    });
    const pay = await r.json();
    const vendaId = pay.external_reference;
    const vendas = readVendas();
    const venda = vendas.find((v) => v.id === vendaId);
    if (!venda) return;

    venda.status = pay.status; // approved | rejected | pending …
    venda.mpPaymentId = pid;
    venda.pagoEm = pay.status === "approved" ? new Date().toISOString() : venda.pagoEm;
    /* o MP mascara o e-mail do pagador (Pix) — só usa se for válido e se
       o checkout não tiver capturado um e-mail */
    if (pay.payer && pay.payer.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(pay.payer.email) && !venda.email) {
      venda.email = pay.payer.email;
    }
    writeVendas(vendas);

    if (pay.status === "approved") {
      await processarVendaAprovada(vendaId, req);
    }
  } catch (err) {
    console.error("[WEBHOOK] Erro:", err.message);
  }
});

/* Status da compra para a página de sucesso. Confirma o pagamento
   direto no MP (não depende só do webhook) e processa a liberação de
   acesso. Devolve o link de cadastro (conta nova) ou a renovação
   (aluno existente). Assim o acesso NUNCA fica preso só no e-mail. */
app.get("/api/compra/status", rateLimit({ janelaMs: 60000, max: 40, escopo: "compra-status" }), async (req, res) => {
  const ref = String(req.query.ref || "").trim();
  if (!ref) return res.status(400).json({ success: false, message: "Referência ausente." });
  const venda = readVendas().find((v) => v.id === ref);
  if (!venda) return res.json({ success: true, status: "desconhecida" });

  /* ainda não aprovada? pergunta ao MP (caso o webhook tenha atrasado) */
  if (venda.status !== "approved" && process.env.MP_ACCESS_TOKEN) {
    try {
      const r = await fetch(
        "https://api.mercadopago.com/v1/payments/search?external_reference=" + encodeURIComponent(ref) + "&sort=date_created&criteria=desc",
        { headers: { Authorization: "Bearer " + process.env.MP_ACCESS_TOKEN } }
      );
      const data = await r.json();
      const pago = (data.results || []).find((p) => p.status === "approved") || (data.results || [])[0];
      if (pago) {
        const vendas = readVendas();
        const v = vendas.find((x) => x.id === ref);
        if (v) {
          v.status = pago.status;
          v.mpPaymentId = pago.id;
          if (pago.status === "approved" && !v.pagoEm) v.pagoEm = new Date().toISOString();
          if (pago.payer && pago.payer.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(pago.payer.email) && !v.email) {
            v.email = pago.payer.email;
          }
          writeVendas(vendas);
        }
      }
    } catch (e) { console.error("[COMPRA-STATUS] MP:", e.message); }
  }

  const atual = readVendas().find((v) => v.id === ref);
  if (atual && atual.status === "approved") {
    const r = await processarVendaAprovada(ref, req);
    return res.json({
      success: true, status: "approved",
      tipoAcesso: r ? r.tipoAcesso : atual.tipoAcesso,
      conviteToken: r ? r.conviteToken : atual.conviteToken || null,
      novoExpiraEm: r ? r.novoExpiraEm : atual.novoExpiraEm || null,
      produtoNome: atual.produtoNome,
      temEmail: !!atual.email,
    });
  }
  return res.json({ success: true, status: (atual && atual.status) || "pendente", produtoNome: atual && atual.produtoNome });
});

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
      "FORMATAÇÃO: escreva em texto simples e legível. Use símbolos matemáticos Unicode (², ³, √, ×, ÷, ½, ≤, ≥, π, ≠) — NUNCA LaTeX (\\frac, $...$, \\sqrt) nem blocos de código. Frações como a/b. Pode usar **negrito** e listas com '-'. " +
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

/* ── Admin: cupons de desconto ── */
app.get("/api/admin/cupons", requireAuthApi, requireAdminApi, (req, res) => {
  res.json(readCupons());
});
app.post("/api/admin/cupons", requireAuthApi, requireAdminApi, (req, res) => {
  const { codigo, tipo, valor, validade, limiteUso, produtos } = req.body || {};
  const cod = String(codigo || "").trim().toUpperCase().replace(/\s+/g, "");
  const val = Number(valor);
  if (!cod) return res.status(400).json({ success: false, message: "Informe o código do cupom." });
  if (!["percent", "fixo"].includes(tipo)) return res.status(400).json({ success: false, message: "Tipo inválido." });
  if (!(val > 0)) return res.status(400).json({ success: false, message: "Valor do desconto inválido." });
  if (tipo === "percent" && val > 90) return res.status(400).json({ success: false, message: "Desconto percentual máximo: 90%." });

  const cupons = readCupons();
  if (cupons.some((c) => c.codigo.toUpperCase() === cod)) {
    return res.status(409).json({ success: false, message: "Já existe um cupom com esse código." });
  }
  const novo = {
    codigo: cod, tipo, valor: val,
    validade: validade || null,
    limiteUso: limiteUso ? Number(limiteUso) : null,
    produtos: Array.isArray(produtos) ? produtos : [],
    usos: 0, ativo: true, criadoEm: new Date().toISOString(),
  };
  cupons.unshift(novo);
  writeCupons(cupons);
  res.json({ success: true, cupom: novo });
});
app.patch("/api/admin/cupons/:codigo", requireAuthApi, requireAdminApi, (req, res) => {
  const cupons = readCupons();
  const c = cupons.find((x) => x.codigo.toUpperCase() === String(req.params.codigo).toUpperCase());
  if (!c) return res.status(404).json({ success: false, message: "Cupom não encontrado." });
  if (typeof req.body.ativo === "boolean") c.ativo = req.body.ativo;
  writeCupons(cupons);
  res.json({ success: true, cupom: c });
});
app.delete("/api/admin/cupons/:codigo", requireAuthApi, requireAdminApi, (req, res) => {
  const cupons = readCupons().filter((c) => c.codigo.toUpperCase() !== String(req.params.codigo).toUpperCase());
  writeCupons(cupons);
  res.json({ success: true });
});

/* ── Admin: vendas ── */
app.get("/api/admin/vendas", requireAuthApi, requireAdminApi, (req, res) => {
  res.json(readVendas());
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

/* ── Notificações push (Web Push / VAPID) ───────────────────── */

/* chave pública para o navegador se inscrever */
app.get("/api/push/public-key", (req, res) => {
  res.json({ success: true, enabled: _pushReady, publicKey: _pushReady ? VAPID_PUBLIC : "" });
});

/* aluno logado registra (ou atualiza) a inscrição do seu dispositivo */
app.post("/api/push/subscribe", requireAuthApi, (req, res) => {
  const sub = req.body && req.body.subscription;
  if (!sub || !sub.endpoint || !sub.keys) {
    return res.status(400).json({ success: false, message: "Inscrição inválida." });
  }
  const subs = readPushSubs().slice();
  const rec = {
    endpoint: String(sub.endpoint),
    keys: { p256dh: sub.keys.p256dh, auth: sub.keys.auth },
    userId: req.currentUser.id,
    email: req.currentUser.email,
    createdAt: new Date().toISOString(),
  };
  const i = subs.findIndex((s) => s.endpoint === rec.endpoint);
  if (i >= 0) subs[i] = rec; else subs.push(rec);
  writePushSubs(subs);
  res.json({ success: true });
});

/* remove a inscrição do dispositivo */
app.post("/api/push/unsubscribe", requireAuthApi, (req, res) => {
  const ep = req.body && req.body.endpoint;
  if (!ep) return res.status(400).json({ success: false, message: "Endpoint ausente." });
  const subs = readPushSubs();
  const filtered = subs.filter((s) => s.endpoint !== ep);
  if (filtered.length !== subs.length) writePushSubs(filtered);
  res.json({ success: true });
});

/* admin: status (ativo? quantos inscritos?) */
app.get("/api/admin/push/status", requireAuthApi, requireAdminApi, (req, res) => {
  res.json({ success: true, enabled: _pushReady, inscritos: readPushSubs().length });
});

/* admin: dispara uma notificação para todos os inscritos */
app.post("/api/admin/push/enviar", requireAuthApi, requireAdminApi, async (req, res) => {
  if (!_pushReady) {
    return res.status(503).json({ success: false, message: "Push não configurado (defina as chaves VAPID)." });
  }
  const { titulo, corpo, url } = req.body || {};
  if (!titulo || !corpo) {
    return res.status(400).json({ success: false, message: "Informe título e mensagem." });
  }
  const payload = JSON.stringify({
    title: String(titulo).slice(0, 80),
    body: String(corpo).slice(0, 240),
    url: (url && String(url).slice(0, 300)) || "/jogos.html",
  });
  const subs = readPushSubs();
  let ok = 0, fail = 0;
  const validas = [];
  await Promise.all(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification({ endpoint: s.endpoint, keys: s.keys }, payload);
        ok++; validas.push(s);
      } catch (err) {
        const code = err && err.statusCode;
        fail++;
        /* 404/410 = inscrição expirada → descarta; demais falhas mantêm */
        if (code !== 404 && code !== 410) validas.push(s);
      }
    })
  );
  if (validas.length !== subs.length) writePushSubs(validas);
  res.json({ success: true, enviadas: ok, falhas: fail, inscritos: subs.length });
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

/* nunca derruba o processo por erro não tratado (mantém o site no ar) */
process.on("unhandledRejection", (e) => console.error("[unhandledRejection]", e && e.message));
process.on("uncaughtException", (e) => console.error("[uncaughtException]", e && e.message));

/* sobe o servidor IMEDIATAMENTE — o healthcheck do Railway não pode
   esperar o Mongo. A conexão e os seeds rodam em segundo plano. */
app.listen(PORT, () => {
  console.log(`Professor Leão rodando em http://localhost:${PORT}`);
});

(async () => {
  try {
    ensureDataDir();
    await connectMongo();
    _usersCache = await loadDoc("users", "users");
    _invitesCache = await loadDoc("invites", "invites");
    _couponsCache = await loadDoc("coupons", "coupons");
    _vendasCache = await loadDoc("vendas", "vendas");
    _blogStats = await loadBlogStats();
    _pushSubsCache = await loadPushSubs();
    setupPush();
    seedAdminUser();
    seedReferralCoupon();
    console.log("[STARTUP] inicialização completa");
  } catch (e) { console.error("[STARTUP] erro:", e && e.message); }
})();
