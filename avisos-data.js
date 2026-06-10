/* ============================================================
   PROFESSOR LEÃO — QUADRO DE AVISOS
   avisos-data.js

   Avisos publicados pelo admin (aulas ao vivo, concursos,
   editais, comunicados) exibidos na Minha Área do aluno.

   Funcionamento (site estático, sem backend):
   - PL_SEED_AVISOS: avisos integrados ao site (valem para todos
     os visitantes — para publicar um aviso "global", adicione
     aqui e faça commit).
   - localStorage 'pl_avisos': avisos criados pelo admin no
     painel — visíveis no navegador onde foram criados.
   Categorias: aula | concurso | edital | aviso
   ============================================================ */

window.PL_SEED_AVISOS = [
  {
    id: 'seed-bemvindo',
    titulo: 'Bem-vindo(a) ao novo Quadro de Avisos!',
    mensagem: 'Aqui você fica por dentro de aulas ao vivo, novidades de concursos e editais publicados. Fique de olho! 👀',
    categoria: 'aviso',
    link: null,
    dataEvento: null,
    fixado: true,
    criadoEm: '2026-06-10T12:00:00.000Z',
  },
];

const PL_Avisos = (() => {
  'use strict';
  const KEY        = 'pl_avisos';
  const KEY_HIDDEN = 'pl_avisos_hidden';
  const CATEGORIAS = ['aula', 'concurso', 'edital', 'aviso'];

  function _stored() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
  }
  function _saveStored(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch (e) { console.warn('[PL_Avisos]', e); }
  }
  function _hidden() {
    try { return JSON.parse(localStorage.getItem(KEY_HIDDEN) || '[]'); } catch { return []; }
  }
  function _saveHidden(ids) {
    try { localStorage.setItem(KEY_HIDDEN, JSON.stringify(ids)); } catch (e) { console.warn('[PL_Avisos]', e); }
  }
  function _seeds() {
    return Array.isArray(window.PL_SEED_AVISOS) ? window.PL_SEED_AVISOS : [];
  }

  /** Todos os avisos visíveis: fixados primeiro, depois mais recentes. */
  function getAll() {
    const stored = _stored();
    const hidden = _hidden();
    const seeds  = _seeds().filter(s =>
      !hidden.includes(s.id) && !stored.some(a => a.id === s.id));
    return [...stored, ...seeds].sort((a, b) => {
      if (!!b.fixado !== !!a.fixado) return b.fixado ? 1 : -1;
      return new Date(b.criadoEm) - new Date(a.criadoEm);
    });
  }

  /** Publica um aviso (localStorage). */
  function publish(aviso) {
    const rec = {
      id: 'av' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      titulo:   String(aviso.titulo   || '').trim().slice(0, 120),
      mensagem: String(aviso.mensagem || '').trim().slice(0, 2000),
      categoria: CATEGORIAS.includes(aviso.categoria) ? aviso.categoria : 'aviso',
      link: /^https?:\/\//i.test(String(aviso.link || '').trim()) ? String(aviso.link).trim() : null,
      dataEvento: aviso.dataEvento || null,
      fixado: !!aviso.fixado,
      criadoEm: new Date().toISOString(),
    };
    if (!rec.titulo || !rec.mensagem) return null;
    const list = _stored();
    list.unshift(rec);
    _saveStored(list);
    return rec;
  }

  /** Remove um aviso (os integrados são ocultados). */
  function remove(id) {
    const list = _stored();
    const filtered = list.filter(a => a.id !== id);
    if (filtered.length !== list.length) { _saveStored(filtered); return true; }
    if (_seeds().some(s => s.id === id)) {
      const hidden = _hidden();
      if (!hidden.includes(id)) { hidden.push(id); _saveHidden(hidden); }
      return true;
    }
    return false;
  }

  return { getAll, publish, remove, CATEGORIAS };
})();
