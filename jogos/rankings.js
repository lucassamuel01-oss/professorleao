/**
 * PL_Rankings — Motor de rankings local (localStorage)
 * Professor Leão · GitHub Pages static site
 *
 * Estrutura no localStorage (chave 'pl_rankings'):
 * {
 *   "game-id": [
 *     { n: "nome", e: "email", s: 1200, t: 1717900000000, d: "hard" },
 *     ...
 *   ]
 * }
 *
 * Rankings são locais por device. Para upgrade para backend compartilhado,
 * substitua _load()/_save() por chamadas à API mantendo a mesma interface.
 */

const PL_Rankings = (() => {
  'use strict';
  const KEY = 'pl_rankings';
  const MAX_PER_GAME = 1000; // máx entradas por jogo

  /* ── helpers de tempo ── */
  function _startOfDay(ts) {
    const d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime();
  }
  function _startOfWeek(ts) {
    const d = new Date(ts);
    const dow = d.getDay(); // 0 = domingo
    const diff = dow === 0 ? -6 : 1 - dow; // segunda-feira
    d.setDate(d.getDate() + diff); d.setHours(0, 0, 0, 0); return d.getTime();
  }

  /* ── persistência ── */
  function _load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function _save(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); }
    catch (e) { console.warn('[PL_Rankings] Erro ao salvar:', e); }
  }

  /* ── normaliza entrada ── */
  function _norm(entry) {
    return {
      n: String(entry.name || entry.n || 'Anônimo').trim().slice(0, 32),
      e: String(entry.email || entry.e || '').toLowerCase().trim().slice(0, 80),
      s: Math.max(0, Math.round(Number(entry.score || entry.s) || 0)),
      t: Number(entry.ts || entry.t || Date.now()),
      d: String(entry.difficulty || entry.d || 'normal'),
    };
  }

  /* ── API pública ── */

  /**
   * Salva uma pontuação.
   * @param {string} gameId  Identificador do jogo
   * @param {object} entry   { name, email, score, ts?, difficulty? }
   * @returns {object} entrada normalizada
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
   * Deduplica por email (melhor pontuação por jogador).
   * @param {string} gameId
   * @param {'all'|'daily'|'weekly'} period
   * @param {number} limit
   * @returns {Array} [{ n, e, s, t, d, rank }, ...]
   */
  function getBoard(gameId, period = 'all', limit = 20) {
    const data = _load();
    const entries = data[gameId] || [];
    const now = Date.now();
    const dayStart  = _startOfDay(now);
    const weekStart = _startOfWeek(now);

    // filtrar por período
    let filtered = entries;
    if (period === 'daily')  filtered = entries.filter(e => e.t >= dayStart);
    if (period === 'weekly') filtered = entries.filter(e => e.t >= weekStart);

    // melhor por jogador (key = email ou nome)
    const best = {};
    filtered.forEach(e => {
      const key = e.e || ('__name__' + e.n);
      if (!best[key] || e.s > best[key].s) best[key] = { ...e };
    });

    return Object.values(best)
      .sort((a, b) => b.s - a.s)
      .slice(0, limit)
      .map((e, i) => ({ ...e, rank: i + 1 }));
  }

  /**
   * Retorna a posição de um jogador no ranking.
   * @param {string} gameId
   * @param {string} email
   * @param {'all'|'daily'|'weekly'} period
   * @returns {number|null} posição (1-based) ou null se não encontrado
   */
  function getPlayerRank(gameId, email, period = 'all') {
    const board = getBoard(gameId, period, 10000);
    const idx = board.findIndex(e => e.e === email.toLowerCase());
    return idx === -1 ? null : idx + 1;
  }

  /**
   * Melhor pontuação de um jogador em um período.
   */
  function getPlayerBest(gameId, email, period = 'all') {
    const board = getBoard(gameId, period, 10000);
    return board.find(e => e.e === email.toLowerCase()) || null;
  }

  /**
   * Retorna totais por jogo: { plays, topScore, players }
   */
  function getGameStats(gameId) {
    const data = _load();
    const entries = data[gameId] || [];
    const players = new Set(entries.map(e => e.e || e.n)).size;
    const topScore = entries.reduce((m, e) => Math.max(m, e.s), 0);
    return { plays: entries.length, topScore, players };
  }

  /**
   * Formata timestamp para exibição relativa ("2h atrás", "ontem").
   */
  function timeAgo(ts) {
    const diff = Date.now() - ts;
    const min  = Math.floor(diff / 60000);
    const hr   = Math.floor(diff / 3600000);
    const day  = Math.floor(diff / 86400000);
    if (min < 1)  return 'agora mesmo';
    if (min < 60) return `${min}min atrás`;
    if (hr < 24)  return `${hr}h atrás`;
    if (day === 1) return 'ontem';
    return `${day} dias atrás`;
  }

  return { save, getBoard, getPlayerRank, getPlayerBest, getGameStats, timeAgo };
})();
