/**
 * PL_Rankings — Motor de rankings local (localStorage)
 * Professor Leão · GitHub Pages static site
 *
 * Estrutura no localStorage (chave 'pl_rankings'):
 * {
 *   "game-id": [
 *     { n:"nome", e:"email", s:1200, ws:1800, t:1717900000000, d:"dificil" },
 *     ...
 *   ]
 * }
 *
 * ws = weighted score (s × multiplicador de dificuldade)
 * Rankings são ordenados por ws. s é o score bruto para exibição.
 */

const PL_Rankings = (() => {
  'use strict';
  const KEY = 'pl_rankings';
  const MAX_PER_GAME = 1000;

  /* ══ Multiplicadores de dificuldade ══ */
  const DIFF_MULTIPLIER = { facil: 0.7, normal: 1.0, dificil: 1.5 };
  const DIFF_LABEL = {
    facil:   '😊 Fácil ×0.7',
    normal:  '⚡ Normal ×1.0',
    dificil: '🔥 Difícil ×1.5'
  };
  const DIFF_COLOR = {
    facil:   '#22c55e',
    normal:  '#f59e0b',
    dificil: '#ef4444'
  };

  function calcWeighted(rawScore, difficulty) {
    const mult = DIFF_MULTIPLIER[String(difficulty || 'normal').toLowerCase()] || 1.0;
    return Math.round(rawScore * mult);
  }

  /* ── helpers de tempo ── */
  function _startOfDay(ts) {
    const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime();
  }
  function _startOfWeek(ts) {
    const d = new Date(ts);
    const dow = d.getDay();
    const diff = dow === 0 ? -6 : 1 - dow; // segunda-feira
    d.setDate(d.getDate() + diff); d.setHours(0, 0, 0, 0); return d.getTime();
  }

  /* ── persistência ── */
  function _load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch { return {}; }
  }
  function _save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); }
    catch (e) { console.warn('[PL_Rankings] Erro ao salvar:', e); }
  }

  /* ── normaliza entrada ── */
  function _norm(entry) {
    const rawScore = Math.max(0, Math.round(Number(entry.score || entry.s) || 0));
    const diff = String(entry.difficulty || entry.d || 'normal').toLowerCase();
    return {
      n:  String(entry.name  || entry.n || 'Anônimo').trim().slice(0, 32),
      e:  String(entry.email || entry.e || '').toLowerCase().trim().slice(0, 80),
      s:  rawScore,
      ws: calcWeighted(rawScore, diff),   // pontuação ponderada (usada no ranking)
      t:  Number(entry.ts || entry.t || Date.now()),
      d:  diff,
    };
  }

  /* ── API pública ── */

  /**
   * Salva uma pontuação.
   * @param {string} gameId
   * @param {object} entry  { name, email, score, ts?, difficulty? }
   * @returns {object} entrada normalizada (inclui ws)
   */
  function save(gameId, entry) {
    const data = _load();
    if (!data[gameId]) data[gameId] = [];
    const rec = _norm(entry);
    data[gameId].push(rec);
    if (data[gameId].length > MAX_PER_GAME) {
      data[gameId] = data[gameId].slice(-MAX_PER_GAME);
    }
    _save(data);
    return rec;
  }

  /**
   * Retorna o ranking para um jogo e período.
   * Deduplica por email (melhor pontuação ponderada por jogador).
   * @param {string} gameId
   * @param {'all'|'daily'|'weekly'} period
   * @param {number} limit
   * @returns {Array} [{ n, e, s, ws, t, d, rank }, ...]
   */
  function getBoard(gameId, period = 'all', limit = 20) {
    const data    = _load();
    const entries = data[gameId] || [];
    const now     = Date.now();
    const dayStart  = _startOfDay(now);
    const weekStart = _startOfWeek(now);

    let filtered = entries;
    if (period === 'daily')  filtered = entries.filter(e => e.t >= dayStart);
    if (period === 'weekly') filtered = entries.filter(e => e.t >= weekStart);

    // melhor score ponderado por jogador
    const best = {};
    filtered.forEach(e => {
      const key    = e.e || ('__name__' + e.n);
      const eScore = e.ws !== undefined ? e.ws : e.s;   // compatibilidade com entradas antigas
      const prev   = best[key];
      const pScore = prev ? (prev.ws !== undefined ? prev.ws : prev.s) : -1;
      if (!prev || eScore > pScore) best[key] = { ...e };
    });

    return Object.values(best)
      .sort((a, b) => {
        const sa = a.ws !== undefined ? a.ws : a.s;
        const sb = b.ws !== undefined ? b.ws : b.s;
        return sb - sa;
      })
      .slice(0, limit)
      .map((e, i) => ({ ...e, rank: i + 1 }));
  }

  /** Posição de um jogador no ranking (1-based, ou null). */
  function getPlayerRank(gameId, email, period = 'all') {
    const board = getBoard(gameId, period, 10000);
    const idx   = board.findIndex(e => e.e === email.toLowerCase());
    return idx === -1 ? null : idx + 1;
  }

  /** Melhor entrada de um jogador. */
  function getPlayerBest(gameId, email, period = 'all') {
    const board = getBoard(gameId, period, 10000);
    return board.find(e => e.e === email.toLowerCase()) || null;
  }

  /** Totais por jogo: { plays, topScore, topWs, players }. */
  function getGameStats(gameId) {
    const data    = _load();
    const entries = data[gameId] || [];
    const players = new Set(entries.map(e => e.e || e.n)).size;
    const topScore = entries.reduce((m, e) => Math.max(m, e.s),  0);
    const topWs    = entries.reduce((m, e) => Math.max(m, e.ws !== undefined ? e.ws : e.s), 0);
    return { plays: entries.length, topScore, topWs, players };
  }

  /** Totais globais: { totalPlays, activeGames }. */
  function getGlobalStats() {
    const data = _load();
    let totalPlays = 0;
    let topWs = 0;
    Object.values(data).forEach(arr => {
      totalPlays += arr.length;
      arr.forEach(e => { const w = e.ws !== undefined ? e.ws : e.s; if (w > topWs) topWs = w; });
    });
    return { totalPlays, topWs };
  }

  /** Formata timestamp relativo. */
  function timeAgo(ts) {
    const diff = Date.now() - ts;
    const min  = Math.floor(diff / 60000);
    const hr   = Math.floor(diff / 3600000);
    const day  = Math.floor(diff / 86400000);
    if (min < 1)   return 'agora mesmo';
    if (min < 60)  return `${min}min atrás`;
    if (hr  < 24)  return `${hr}h atrás`;
    if (day === 1) return 'ontem';
    return `${day} dias atrás`;
  }

  return {
    save, getBoard, getPlayerRank, getPlayerBest,
    getGameStats, getGlobalStats,
    calcWeighted, timeAgo,
    DIFF_MULTIPLIER, DIFF_LABEL, DIFF_COLOR
  };
})();
