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

function seedAdminUser() {
  const users = readUsers();
  if (users.some((u) => u.role === "admin")) return;
  users.push({
    id: "admin-001",
    name: "Lucas Samuel Leão",
    email: "samuel@professorleao.com",
    password: bcrypt.hashSync("leao2024", 10),
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
  console.log("Admin padrão criado — email: samuel@professorleao.com  senha: leao2024");
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

app.post("/api/login", (req, res) => {
  const email = String(req.body.email || "").trim().toLowerCase();
  const password = String(req.body.password || "");

  const users = readUsers();
  const user = users.find((u) => u.email.toLowerCase() === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ success: false, message: "E-mail ou senha incorretos." });
  }
  if (!user.active) {
    return res.status(403).json({ success: false, message: "Conta inativa. Fale com o Professor Leão." });
  }
  if (user.expiresAt && new Date(user.expiresAt) < new Date()) {
    return res.status(403).json({ success: false, message: "Acesso expirado. Renove pelo WhatsApp." });
  }

  req.session.userId = user.id;
  user.lastAccessAt = new Date().toISOString();
  writeUsers(users);
  res.json({ success: true, user: safeUser(user) });
});

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

/* ── Leão IA (opcional) ───────────────────────────────────────
   Se ANTHROPIC_API_KEY estiver configurada no ambiente, as
   perguntas do aluno são respondidas por um LLM real com base
   nos dados de desempenho. Sem a chave, responde 503 e o
   frontend usa o motor de análise local. */

app.post("/api/ia", requireAuthApi, async (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(503).json({ success: false, local: true });
  try {
    const pergunta = String(req.body.pergunta || "Análise geral do meu desempenho").slice(0, 300);
    const contexto = req.body.contexto && typeof req.body.contexto === "object" ? req.body.contexto : {};
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.IA_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 700,
        system:
          "Você é o Leão IA, assistente de estudos da plataforma Professor Leão (matemática para concursos PMBA, CBMBA e Correios). " +
          "Analise os dados de desempenho do aluno fornecidos em JSON (aulas concluídas, ritmo vs. plano, minissimulados, jogos, dias até a prova) " +
          "e responda em português do Brasil, de forma curta, prática e encorajadora, com recomendações concretas de estudo na plataforma " +
          "(aulas, Minissimulado — Revisão, jogos, caderno de erros). Não invente dados que não estejam no JSON.",
        messages: [{
          role: "user",
          content: `Dados do aluno (JSON):\n${JSON.stringify(contexto).slice(0, 6000)}\n\nPergunta do aluno: ${pergunta}`,
        }],
      }),
    });
    const data = await r.json();
    const texto = data && Array.isArray(data.content) && data.content[0] && data.content[0].text;
    if (!texto) throw new Error("resposta vazia da API");
    res.json({ success: true, texto });
  } catch (err) {
    console.error("[IA]", err.message);
    res.status(502).json({ success: false, local: true });
  }
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
  }));
  res.json(alunos);
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
  seedAdminUser();
  app.listen(PORT, () => {
    console.log(`Professor Leão rodando em http://localhost:${PORT}`);
  });
})();
