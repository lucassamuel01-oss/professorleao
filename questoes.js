/* ============================================================
   PROFESSOR LEÃO – ENGINE DE QUESTÕES
   questoes.js  (pure localStorage, sem backend)

   localStorage keys:
     pl_listas          → [{id, titulo, materia, fonte, dificuldade,
                             total, cursoId, aulaId, criadoEm}]
     pl_lista_{id}      → lista completa com array questoes
     pl_resp_{listaId}_{email_safe} → resposta do aluno
   ============================================================ */

'use strict';

const PlQuestoes = (() => {

  /* ─────────── helpers ─────────── */
  function _id() {
    return 'q' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
  function _safeMail(email) {
    return (email || 'anonimo').replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  /* ─────────── Listas integradas (listas-data.js) ───────────
     Listas que acompanham a plataforma e aparecem junto às
     salvas no localStorage. Uma lista salva pelo admin com o
     mesmo id sobrescreve a integrada (e excluí-la restaura a
     versão original). */
  function _seeds() {
    return (typeof window !== 'undefined' && Array.isArray(window.PL_SEED_LISTAS))
      ? window.PL_SEED_LISTAS : [];
  }

  /* ─────────── Storage ─────────── */
  function getLists() {
    let stored = [];
    try { stored = JSON.parse(localStorage.getItem('pl_listas') || '[]'); } catch { stored = []; }
    const seeds = _seeds()
      .filter(s => !stored.some(l => l.id === s.id))
      .map(s => ({
        id: s.id, titulo: s.titulo, materia: s.materia || '',
        fonte: s.fonte || '', dificuldade: s.dificuldade || 'medio',
        total: (s.questoes || []).length,
        cursoId: s.cursoId || '', aulaId: s.aulaId || '',
        aulaIds: Array.isArray(s.aulaIds) ? s.aulaIds : [],
        seed: true,
        criadoEm: s.criadoEm || ''
      }));
    return [...stored, ...seeds];
  }
  function getList(id) {
    try {
      const stored = JSON.parse(localStorage.getItem('pl_lista_' + id) || 'null');
      if (stored) return stored;
    } catch { /* cai para as integradas */ }
    return _seeds().find(s => s.id === id) || null;
  }
  function saveList(lista) {
    const id = lista.id || _id();
    lista.id = id;
    const full = { ...lista };
    const meta = {
      id, titulo: lista.titulo, materia: lista.materia || '',
      fonte: lista.fonte || '', dificuldade: lista.dificuldade || 'medio',
      total: (lista.questoes || []).length,
      cursoId: lista.cursoId || '', aulaId: lista.aulaId || '',
      criadoEm: lista.criadoEm || new Date().toISOString()
    };
    localStorage.setItem('pl_lista_' + id, JSON.stringify(full));
    const idx = getLists();
    const pos = idx.findIndex(l => l.id === id);
    if (pos >= 0) idx[pos] = meta; else idx.unshift(meta);
    localStorage.setItem('pl_listas', JSON.stringify(idx));
    return id;
  }
  function deleteList(id) {
    localStorage.removeItem('pl_lista_' + id);
    const idx = getLists().filter(l => l.id !== id);
    localStorage.setItem('pl_listas', JSON.stringify(idx));
  }

  /* ─────────── Respostas do aluno ─────────── */
  function _respKey(listaId, email) {
    return 'pl_resp_' + listaId + '_' + _safeMail(email);
  }
  function getResp(listaId, email) {
    try { return JSON.parse(localStorage.getItem(_respKey(listaId, email)) || 'null'); } catch { return null; }
  }
  function saveResp(listaId, email, respostas, finalizado) {
    const prev = getResp(listaId, email) || { iniciadoEm: new Date().toISOString() };
    const obj = {
      ...prev, listaId, email, respostas,
      finalizadoEm: finalizado ? new Date().toISOString() : (prev.finalizadoEm || null)
    };
    localStorage.setItem(_respKey(listaId, email), JSON.stringify(obj));
    if (finalizado) _saveToHistory(listaId, email, respostas);
  }
  function _saveToHistory(listaId, email, respostas) {
    const lista = getList(listaId);
    if (!lista) return;
    const total   = lista.questoes.length;
    const acertos = lista.questoes.filter(q => respostas[q.num] === q.gabarito).length;
    const record  = { listaId, titulo: lista.titulo, acertos, total,
                      percent: total > 0 ? Math.round(acertos / total * 100) : 0,
                      data: new Date().toISOString() };
    const key  = 'pl_hist_' + _safeMail(email);
    const hist = (() => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } })();
    hist.unshift(record);
    localStorage.setItem(key, JSON.stringify(hist.slice(0, 200)));
  }
  function getHistory(email) {
    const key = 'pl_hist_' + _safeMail(email);
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
  }
  function calcScore(listaId, respostas) {
    const lista = getList(listaId);
    if (!lista) return null;
    const total   = lista.questoes.length;
    const acertos = lista.questoes.filter(q => respostas[q.num] === q.gabarito).length;
    const erros   = total - acertos;
    return { acertos, erros, total, percent: total > 0 ? Math.round(acertos / total * 100) : 0 };
  }

  /* ═══════════════════════════════════════════════
     PDF PARSER
  ═══════════════════════════════════════════════ */

  /**
   * Recebe o texto bruto extraído do PDF (string) e retorna:
   * { questoes: [...], gabarito: {...}, orphanAnswers: {...} }
   */
  function parsePDFText(rawText) {
    const lines = rawText
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    // 1. Detectar seção de gabarito
    const gabaritoStart = _findGabaritoSection(lines);
    const bodyLines  = gabaritoStart > -1 ? lines.slice(0, gabaritoStart) : lines;
    const gabLines   = gabaritoStart > -1 ? lines.slice(gabaritoStart)   : [];

    // 2. Parsear gabarito
    const gabarito = _parseGabarito(gabLines.join('\n') || rawText);

    // 3. Parsear questões
    const questoes = _parseQuestoes(bodyLines);

    // 4. Se gabarito veio das questões (questões tipo "Resposta: X")
    const orphanAnswers = {};
    questoes.forEach(q => {
      if (q._inlineGabarito) {
        orphanAnswers[q.num] = q._inlineGabarito;
        delete q._inlineGabarito;
      }
    });

    // 5. Preencher gabarito nas questões
    questoes.forEach(q => {
      if (!q.gabarito) {
        q.gabarito = gabarito[q.num] || orphanAnswers[q.num] || '';
      }
    });

    return { questoes, gabarito, orphanAnswers };
  }

  function _findGabaritoSection(lines) {
    const GABS = /^\s*(gabarito|gabarito\s+oficial|gabarito\s+definitivo|resposta\s+oficial|respostas\s+oficiais|folha\s+de\s+respostas|gabarito\s+preliminar)/i;
    for (let i = 0; i < lines.length; i++) {
      if (GABS.test(lines[i])) return i;
    }
    // Se mais de 30% das linhas no final têm formato "01-A" pode ser gabarito inline
    const tail = lines.slice(-Math.floor(lines.length * 0.35));
    const pct  = tail.filter(l => /^\d{1,3}\s*[-–—.]\s*[A-Ea-e]\b/.test(l)).length / tail.length;
    if (pct > 0.5) return lines.length - tail.length;
    return -1;
  }

  function _parseGabarito(text) {
    const result = {};
    // Pattern 1: 01-A  01–A  01—A
    let m;
    const p1 = /(\d{1,3})\s*[-–—]\s*([A-Ea-e])\b/g;
    while ((m = p1.exec(text)) !== null) result[parseInt(m[1])] = m[2].toUpperCase();

    // Pattern 2: 01. A  ou  01) A  (se p1 não pegou)
    const p2 = /(\d{1,3})[.)]\s+([A-Ea-e])\b/g;
    while ((m = p2.exec(text)) !== null) {
      const n = parseInt(m[1]);
      if (!result[n]) result[n] = m[2].toUpperCase();
    }

    // Pattern 3: tabela tipo "01 A 02 B 03 C" na mesma linha
    const p3 = /(\d{1,3})\s+([A-Ea-e])(?=\s+\d|\s*$)/g;
    while ((m = p3.exec(text)) !== null) {
      const n = parseInt(m[1]);
      if (!result[n]) result[n] = m[2].toUpperCase();
    }

    return result;
  }

  function _parseQuestoes(lines) {
    const questoes = [];
    // Padrão de início de questão: "1." "1)" "(1)" "QUESTÃO 1" "Q1" "1 –"
    const QSTART = /^(?:questão\s+|questao\s+|q\.?\s*)?(\d{1,3})[.)–—\s]|^\((\d{1,3})\)/i;
    // Padrão de opção: "A)" "A." "(A)" "a)" letra seguida de ) . ou espaço e texto
    const OPTPAT = /^([A-Ea-e])\s*[).\-]\s*(.+)/;
    const OPTPAR = /^\(([A-Ea-e])\)\s*(.+)/;

    let current = null;
    let currentOpt = null;

    function flush() {
      if (current) {
        if (currentOpt) { current.opcoes[currentOpt.letra] += ' '; currentOpt = null; }
        // Limpar enunciado
        current.enunciado = current.enunciado.trim();
        // Limpar opções
        for (const k in current.opcoes) current.opcoes[k] = current.opcoes[k].trim();
        questoes.push(current);
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Gabarito inline "Resposta: B" ou "Gabarito: C"
      const inlineGab = line.match(/^(?:resposta|gabarito)\s*[:.]\s*([A-Ea-e])\b/i);
      if (inlineGab && current) {
        current._inlineGabarito = inlineGab[1].toUpperCase();
        currentOpt = null;
        continue;
      }

      // Início de nova questão
      const qm = line.match(QSTART);
      if (qm) {
        flush();
        const num = parseInt(qm[1] || qm[2]);
        // Resto da linha após o número é início do enunciado
        const restStart = line.indexOf(qm[1] || qm[2]) + (qm[1] || qm[2]).length;
        const rest = line.slice(restStart).replace(/^[.)–—\s]+/, '').trim();
        current = { num, enunciado: rest, opcoes: {}, gabarito: '', explicacao: '' };
        currentOpt = null;
        continue;
      }

      if (!current) continue;

      // Opção
      const om = line.match(OPTPAT) || line.match(OPTPAR);
      if (om) {
        if (currentOpt) current.opcoes[currentOpt.letra] = current.opcoes[currentOpt.letra].trim();
        const letra = om[1].toUpperCase();
        const texto = om[2].trim();
        current.opcoes[letra] = texto;
        currentOpt = { letra };
        continue;
      }

      // Continuação de opção ou enunciado
      if (currentOpt) {
        current.opcoes[currentOpt.letra] += ' ' + line;
      } else {
        if (current.enunciado) current.enunciado += ' ' + line;
        else current.enunciado = line;
      }
    }
    flush();

    return questoes.filter(q => q.enunciado.length > 5);
  }

  /* ─── Extrai texto de PDF via PDF.js ─── */
  async function extractTextFromPDF(file) {
    if (!window.pdfjsLib) throw new Error('PDF.js não carregado.');
    const buf = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: buf }).promise;
    let full  = '';
    for (let p = 1; p <= pdf.numPages; p++) {
      const page    = await pdf.getPage(p);
      const content = await page.getTextContent();
      // Agrupar por posição Y (para manter ordem das linhas)
      const byY = {};
      content.items.forEach(item => {
        const y = Math.round(item.transform[5]);
        if (!byY[y]) byY[y] = [];
        byY[y].push({ x: item.transform[4], text: item.str });
      });
      const ys   = Object.keys(byY).map(Number).sort((a, b) => b - a);
      const rows = ys.map(y => byY[y].sort((a, b) => a.x - b.x).map(i => i.text).join(' '));
      full += rows.join('\n') + '\n';
    }
    return full;
  }

  /* API pública */
  return {
    getLists, getList, saveList, deleteList,
    getResp, saveResp, calcScore, getHistory,
    parsePDFText, extractTextFromPDF
  };

})();
