/* ============================================================
   PROFESSOR LEÃO – AUTH SYSTEM (localStorage-based)
   ============================================================ */

const PL_USERS_KEY   = 'pl_users';
const PL_SESSION_KEY = 'pl_session';

/* ---------- Admin padrão ---------- */
const DEFAULT_ADMIN = {
  id: 'admin-001',
  name: 'Lucas Samuel Leão',
  email: 'samuel@professorleao.com',
  password: 'leao2024',
  role: 'admin',
  active: true,
  expiresAt: null,
  createdAt: new Date('2024-01-01').toISOString(),
  curso: 'Todos'
};

/* ---------- CRUD usuarios ---------- */
function getUsers() {
  const raw = localStorage.getItem(PL_USERS_KEY);
  const users = raw ? JSON.parse(raw) : [];
  if (!users.find(u => u.id === DEFAULT_ADMIN.id)) {
    users.unshift(DEFAULT_ADMIN);
    _saveUsers(users);
  }
  return users;
}

function _saveUsers(users) {
  localStorage.setItem(PL_USERS_KEY, JSON.stringify(users));
}

function createUser({ name, email, password, role = 'student', expiresAt = null, curso = '' }) {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    return { success: false, message: 'E-mail já cadastrado.' };
  }
  const user = {
    id: 'u-' + Date.now(),
    name, email, password, role,
    active: true,
    expiresAt,
    curso,
    createdAt: new Date().toISOString()
  };
  users.push(user);
  _saveUsers(users);
  return { success: true, user };
}

function updateUser(id, changes) {
  const users = getUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return { success: false, message: 'Usuário não encontrado.' };
  users[idx] = { ...users[idx], ...changes };
  _saveUsers(users);
  return { success: true };
}

function deleteUser(id) {
  if (id === DEFAULT_ADMIN.id) return { success: false, message: 'Não é possível remover o admin principal.' };
  const users = getUsers().filter(u => u.id !== id);
  _saveUsers(users);
  return { success: true };
}

/* ---------- Session ---------- */
function getSession() {
  const raw = localStorage.getItem(PL_SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function _setSession(user) {
  const s = { id: user.id, name: user.name, email: user.email, role: user.role, expiresAt: user.expiresAt, curso: user.curso, loginAt: new Date().toISOString() };
  localStorage.setItem(PL_SESSION_KEY, JSON.stringify(s));
  return s;
}

function clearSession() {
  localStorage.removeItem(PL_SESSION_KEY);
}

/* ---------- Auth ---------- */
function login(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user)        return { success: false, message: 'E-mail não encontrado.' };
  if (user.password !== password) return { success: false, message: 'Senha incorreta.' };
  if (!user.active) return { success: false, message: 'Conta inativa. Fale com o Professor Leão.' };
  if (user.expiresAt && new Date(user.expiresAt) < new Date()) {
    return { success: false, message: 'Acesso expirado. Renove pelo WhatsApp ↓' };
  }
  _setSession(user);
  return { success: true, role: user.role };
}

function requireAuth(adminOnly = false) {
  const s = getSession();
  const base = _getBase();
  if (!s) { window.location.href = base + 'login.html'; return null; }
  if (s.expiresAt && new Date(s.expiresAt) < new Date()) {
    clearSession();
    window.location.href = base + 'login.html?expired=1';
    return null;
  }
  const user = getUsers().find(u => u.id === s.id);
  if (!user || !user.active) { clearSession(); window.location.href = base + 'login.html'; return null; }
  if (adminOnly && s.role !== 'admin') { window.location.href = base + 'minha-area.html'; return null; }
  return s;
}

function logout() {
  clearSession();
  window.location.href = _getBase() + 'login.html';
}

function _getBase() {
  // Works for GitHub Pages subpath or root
  const p = window.location.pathname;
  const parts = p.split('/').filter(Boolean);
  // If deployed to /professorleao/, prepend that
  if (parts.length && !parts[parts.length - 1].includes('.')) {
    return '/' + parts[0] + '/';
  }
  return '/';
}

/* ---------- Progress (localStorage) ---------- */
function getProgress() {
  const raw = localStorage.getItem('pl_progress_' + (getSession()?.id || ''));
  return raw ? JSON.parse(raw) : {};
}

function markWatched(videoId) {
  const s = getSession();
  if (!s) return;
  const key = 'pl_progress_' + s.id;
  const prog = getProgress();
  prog[videoId] = { watchedAt: new Date().toISOString() };
  localStorage.setItem(key, JSON.stringify(prog));
}

/* ---------- Progress v2 (por curso/aula/atividade) ---------- */
const PL_PROG2_KEY  = 'pl_progress_v2_';
const PL_LASTV_KEY  = 'pl_lastvisited_';

function getProgressV2() {
  const s = getSession();
  if (!s) return {};
  try { return JSON.parse(localStorage.getItem(PL_PROG2_KEY + s.id) || '{}'); } catch { return {}; }
}

function _saveProgressV2(data) {
  const s = getSession();
  if (!s) return;
  localStorage.setItem(PL_PROG2_KEY + s.id, JSON.stringify(data));
}

function toggleAtividade(cursoId, aulaId, atKey, force) {
  const prog = getProgressV2();
  if (!prog[cursoId])          prog[cursoId] = {};
  if (!prog[cursoId][aulaId])  prog[cursoId][aulaId] = {};
  const cur = prog[cursoId][aulaId][atKey];
  prog[cursoId][aulaId][atKey] = (force !== undefined) ? force : !cur;
  _saveProgressV2(prog);
  return prog;
}

function marcarAulaConcluida(cursoId, aulaId) {
  const prog = getProgressV2();
  if (!prog[cursoId])         prog[cursoId] = {};
  if (!prog[cursoId][aulaId]) prog[cursoId][aulaId] = {};
  prog[cursoId][aulaId].concluida   = true;
  prog[cursoId][aulaId].concluidaEm = new Date().toISOString();
  _saveProgressV2(prog);
}

function getLastVisited() {
  const s = getSession();
  if (!s) return null;
  try { return JSON.parse(localStorage.getItem(PL_LASTV_KEY + s.id) || 'null'); } catch { return null; }
}

function setLastVisited(cursoId, aulaId, aulaNumero, aulaTitulo, cursoNome) {
  const s = getSession();
  if (!s) return;
  localStorage.setItem(PL_LASTV_KEY + s.id, JSON.stringify({ cursoId, aulaId, aulaNumero, aulaTitulo, cursoNome, visitedAt: new Date().toISOString() }));
}

/* ---------- Expose ---------- */
window.plAuth = {
  getUsers, createUser, updateUser, deleteUser,
  getSession, requireAuth, login, logout, clearSession,
  getProgress, markWatched,
  getProgressV2, toggleAtividade, marcarAulaConcluida,
  getLastVisited, setLastVisited
};
