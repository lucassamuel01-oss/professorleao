/* ============================================================
   PROFESSOR LEÃO – AUTH SYSTEM (híbrido API + localStorage)

   Modo API (servidor Node/Express + MongoDB no ar):
   - Login/cadastro via /api, sessão por cookie
   - Progresso, plano e último acesso sincronizados no banco
   Modo local (site estático, ex.: GitHub Pages sem backend):
   - Comporta-se como antes: contas e progresso no localStorage

   A troca é automática: se /api não responder, cai no modo local.
   ============================================================ */

const PL_USERS_KEY   = 'pl_users';
const PL_SESSION_KEY = 'pl_session';

/* ---------- Admin padrão (modo local) ---------- */
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

/* ---------- API helper ---------- */
let _apiDown = false;

async function _api(path, opts = {}) {
  if (_apiDown) return null;
  try {
    const res = await fetch(path, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      ...opts,
    });
    return res;
  } catch {
    _apiDown = true; // sem backend nesta origem (site estático)
    return null;
  }
}

function apiAvailable() { return !_apiDown; }

/* ---------- CRUD usuários (modo local) ---------- */
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

/* ---------- Session (espelho local em ambos os modos) ---------- */
function getSession() {
  const raw = localStorage.getItem(PL_SESSION_KEY);
  return raw ? JSON.parse(raw) : null;
}

function _setSession(user, via) {
  const s = {
    id: user.id, name: user.name, email: user.email,
    telefone: user.telefone || '',
    role: user.role, expiresAt: user.expiresAt || null,
    curso: user.curso || '',
    via: via || 'local',
    loginAt: new Date().toISOString()
  };
  localStorage.setItem(PL_SESSION_KEY, JSON.stringify(s));
  return s;
}

function clearSession() {
  localStorage.removeItem(PL_SESSION_KEY);
}

/* ---------- Auth ---------- */

/**
 * Login híbrido (assíncrono).
 * Tenta a API; sem backend, autentica no localStorage como antes.
 * @returns {Promise<{success:boolean, role?:string, message?:string}>}
 */
async function login(email, password) {
  const res = await _api('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (res) {
    let data = {};
    try { data = await res.json(); } catch { /* ignore */ }
    if (res.ok && data.success) {
      _setSession(data.user, 'api');
      await pullSync(); // baixa progresso/plano salvos no banco
      return { success: true, role: data.user.role };
    }
    return { success: false, message: data.message || 'Falha no login.' };
  }

  /* — modo local — */
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user)                      return { success: false, message: 'E-mail não encontrado.' };
  if (user.password !== password) return { success: false, message: 'Senha incorreta.' };
  if (!user.active)               return { success: false, message: 'Conta inativa. Fale com o Professor Leão.' };
  if (user.expiresAt && new Date(user.expiresAt) < new Date()) {
    return { success: false, message: 'Acesso expirado. Renove pelo WhatsApp ↓' };
  }
  _setSession(user, 'local');
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

  if (s.via === 'api') {
    // Validação assíncrona contra o servidor + sincronização
    _validateApiSession();
  } else {
    const user = getUsers().find(u => u.id === s.id);
    if (!user || !user.active) { clearSession(); window.location.href = base + 'login.html'; return null; }
  }

  if (adminOnly && s.role !== 'admin') { window.location.href = base + 'minha-area.html'; return null; }
  return s;
}

let _validated = false;
async function _validateApiSession() {
  if (_validated) return;
  _validated = true;
  const res = await _api('/api/me');
  if (!res) return;                 // backend fora do ar — segue com espelho local
  if (res.status === 401 || res.status === 403) {
    clearSession();
    window.location.href = _getBase() + 'login.html?expired=1';
    return;
  }
  pullSync();
}

function logout() {
  const s = getSession();
  if (s && s.via === 'api') { _api('/api/logout', { method: 'POST' }); }
  clearSession();
  window.location.href = _getBase() + 'login.html';
}

function _getBase() {
  const p = window.location.pathname;
  const parts = p.split('/').filter(Boolean);
  if (parts.length && !parts[parts.length - 1].includes('.')) {
    return '/' + parts[0] + '/';
  }
  return '/';
}

/* ---------- Progress (legado v1) ---------- */
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
  _schedulePush();
  return prog;
}

function marcarAulaConcluida(cursoId, aulaId) {
  const prog = getProgressV2();
  if (!prog[cursoId])         prog[cursoId] = {};
  if (!prog[cursoId][aulaId]) prog[cursoId][aulaId] = {};
  prog[cursoId][aulaId].concluida   = true;
  prog[cursoId][aulaId].concluidaEm = new Date().toISOString();
  _saveProgressV2(prog);
  _schedulePush();
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
  _schedulePush();
}

/* ---------- Sincronização com o banco (modo API) ---------- */

function _myLead() {
  const s = getSession();
  if (!s) return null;
  try {
    const leads = JSON.parse(localStorage.getItem('pl_leads') || '[]');
    return [...leads].reverse().find(l => l.email && l.email.toLowerCase() === s.email.toLowerCase()) || null;
  } catch { return null; }
}

function _adoptLead(lead) {
  if (!lead || !lead.email) return;
  try {
    const leads = JSON.parse(localStorage.getItem('pl_leads') || '[]');
    const local = [...leads].reverse().find(l => l.email && l.email.toLowerCase() === lead.email.toLowerCase());
    const localTime  = local && local.criadoEm ? new Date(local.criadoEm).getTime() : 0;
    const remoteTime = lead.criadoEm ? new Date(lead.criadoEm).getTime() : 1;
    if (!local || remoteTime > localTime) {
      leads.push(lead);
      localStorage.setItem('pl_leads', JSON.stringify(leads));
    }
  } catch { /* ignore */ }
}

function _mergeProgress(local, remote) {
  const out = JSON.parse(JSON.stringify(local || {}));
  Object.entries(remote || {}).forEach(([cursoId, aulas]) => {
    if (!out[cursoId]) out[cursoId] = {};
    Object.entries(aulas || {}).forEach(([aulaId, ats]) => {
      if (!out[cursoId][aulaId]) out[cursoId][aulaId] = {};
      Object.entries(ats || {}).forEach(([k, v]) => {
        // booleans: OR; strings (datas): mantém a existente ou adota a remota
        if (out[cursoId][aulaId][k] === undefined || out[cursoId][aulaId][k] === false) {
          out[cursoId][aulaId][k] = v;
        }
      });
    });
  });
  return out;
}

/** Baixa progresso/plano do servidor e mescla com o local. */
async function pullSync() {
  const s = getSession();
  if (!s || s.via !== 'api') return;
  const res = await _api('/api/sync');
  if (!res || !res.ok) return;
  let data = {};
  try { data = await res.json(); } catch { return; }

  const merged = _mergeProgress(getProgressV2(), data.progress);
  _saveProgressV2(merged);

  if (data.lastVisited) {
    const local = getLastVisited();
    const lt = local && local.visitedAt ? new Date(local.visitedAt).getTime() : 0;
    const rt = data.lastVisited.visitedAt ? new Date(data.lastVisited.visitedAt).getTime() : 0;
    if (rt > lt) {
      localStorage.setItem(PL_LASTV_KEY + s.id, JSON.stringify(data.lastVisited));
    }
  }

  if (data.plano) _adoptLead(data.plano);

  window.dispatchEvent(new CustomEvent('pl-sync'));
  _schedulePush(); // envia de volta o resultado da mesclagem
}

let _pushTimer = null;
function _schedulePush() {
  const s = getSession();
  if (!s || s.via !== 'api') return;
  clearTimeout(_pushTimer);
  _pushTimer = setTimeout(_pushNow, 2000);
}

async function _pushNow() {
  const s = getSession();
  if (!s || s.via !== 'api') return;
  await _api('/api/sync', {
    method: 'PUT',
    body: JSON.stringify({
      progress: getProgressV2(),
      lastVisited: getLastVisited(),
      plano: _myLead(),
    }),
  });
}

/* ---------- Expose ---------- */
window.plAuth = {
  getUsers, createUser, updateUser, deleteUser,
  getSession, requireAuth, login, logout, clearSession,
  getProgress, markWatched,
  getProgressV2, toggleAtividade, marcarAulaConcluida,
  getLastVisited, setLastVisited,
  apiAvailable, pullSync,
  syncPlano: _schedulePush,
};
