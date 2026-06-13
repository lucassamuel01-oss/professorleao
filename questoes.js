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
        tipoLista: s.tipoLista || '',
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
      aulaIds: Array.isArray(lista.aulaIds) ? lista.aulaIds : [],
      tipoLista: lista.tipoLista || '',
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
  /* apaga a tentativa salva — usado pelo botão "Refazer" */
  function limparResp(listaId, email) {
    localStorage.removeItem(_respKey(listaId, email));
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
  /* registra resultado de listas VIRTUAIS (simulado da semana) no histórico —
     o _saveToHistory padrão depende de getList e não enxerga listas virtuais */
  function historicoRegistrar(email, rec) {
    const record = {
      listaId: rec.listaId, titulo: rec.titulo,
      acertos: rec.acertos, total: rec.total,
      percent: rec.total > 0 ? Math.round(rec.acertos / rec.total * 100) : 0,
      data: new Date().toISOString(),
    };
    const key  = 'pl_hist_' + _safeMail(email);
    const hist = (() => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } })();
    hist.unshift(record);
    localStorage.setItem(key, JSON.stringify(hist.slice(0, 200)));
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
     CADERNO DE ERROS
     Toda questão errada em lista/minissimulado entra
     aqui e só sai depois de DOIS acertos seguidos.
     localStorage: pl_erros_<email> →
       { itens: { 'listaId|num': {listaId, num, addedAt,
         ultimoErro, acertosSeguidos} }, dominadas: n }
  ═══════════════════════════════════════════════ */
  function _errosKey(email) { return 'pl_erros_' + _safeMail(email); }
  function _errosLoad(email) {
    try {
      const d = JSON.parse(localStorage.getItem(_errosKey(email)) || 'null');
      if (d && d.itens) return d;
    } catch { /* recomeça */ }
    return { itens: {}, dominadas: 0 };
  }
  function _errosSave(email, data) {
    localStorage.setItem(_errosKey(email), JSON.stringify(data));
  }

  /* registra o resultado de uma questão respondida */
  function errosRegistrar(listaId, num, acertou, email) {
    if (!listaId || listaId === '__caderno') return;
    const data  = _errosLoad(email);
    const k     = listaId + '|' + num;
    const agora = new Date().toISOString();
    if (!acertou) {
      const item = data.itens[k] || { listaId, num, addedAt: agora };
      item.ultimoErro = agora;
      item.acertosSeguidos = 0;
      data.itens[k] = item;
    } else if (data.itens[k]) {
      const item = data.itens[k];
      item.acertosSeguidos = (item.acertosSeguidos || 0) + 1;
      if (item.acertosSeguidos >= 2) {
        delete data.itens[k];
        data.dominadas = (data.dominadas || 0) + 1;
      }
    }
    _errosSave(email, data);
  }

  /* pendentes com a questão completa resolvida (ignora listas removidas) */
  function errosPendentes(email) {
    const data = _errosLoad(email);
    const out  = [];
    Object.values(data.itens).forEach(item => {
      const lista = getList(item.listaId);
      if (!lista) return;
      const q = (lista.questoes || []).find(x => x.num === item.num);
      if (!q) return;
      out.push({ ...item, questao: q, listaTitulo: lista.titulo || '' });
    });
    out.sort((a, b) => String(a.ultimoErro || '') < String(b.ultimoErro || '') ? -1 : 1);
    return out;
  }

  function _inicioSemana() { /* segunda-feira 00:00 da semana atual */
    const dt = new Date(); dt.setHours(0, 0, 0, 0);
    dt.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
    return dt;
  }

  /* LAPSO DE 1 SEMANA: a questão errada só "entra" no caderno na semana
     SEGUINTE ao erro (revisão espaçada). Erradas nesta semana ficam
     aguardando e são liberadas na segunda-feira. */
  function errosParaRevisar(email) {
    const corte = _inicioSemana().getTime();
    return errosPendentes(email)
      .filter(i => new Date(i.ultimoErro || i.addedAt).getTime() < corte);
  }

  function errosStats(email) {
    const todos     = errosPendentes(email);
    const corte     = _inicioSemana().getTime();
    const liberadas = todos.filter(i => new Date(i.ultimoErro || i.addedAt).getTime() < corte).length;
    const data      = _errosLoad(email);
    return {
      pendentes: liberadas,                       /* visíveis no caderno  */
      aguardando: todos.length - liberadas,       /* entram na próxima 2ª */
      dominadas: data.dominadas || 0,
    };
  }

  /* destaque semanal: 1× por semana, quando houver questões LIBERADAS
     (erradas em semanas anteriores). Retorna { paraRevisar } ou null. */
  function errosPrecisaLembrete(email) {
    const wk = _inicioSemana().toISOString().slice(0, 10);
    if (localStorage.getItem('pl_erros_lembrete_' + _safeMail(email)) === wk) return null;
    const aRever = errosParaRevisar(email);
    if (!aRever.length) return null;
    return { paraRevisar: aRever.length };
  }
  function errosMarcarLembrete(email) {
    const wk = _inicioSemana().toISOString().slice(0, 10);
    localStorage.setItem('pl_erros_lembrete_' + _safeMail(email), wk);
  }

  /* ═══════════════════════════════════════════════
     MINISSIMULADO DA SEMANA
     Montado automaticamente com ~10 questões REAIS de
     banca (listas tipoLista 'banco') dos assuntos que o
     aluno estudou na semana. Seleção determinística por
     semana (refazer = mesmas questões até segunda-feira).
     localStorage: pl_estudo_<email> → { 'AAAA-MM-DD'(segunda): [aulaIds] }
  ═══════════════════════════════════════════════ */
  function _wkKey() { return _inicioSemana().toISOString().slice(0, 10); }

  /* chamada pela página da aula — registra que o aluno estudou a aula */
  function estudoRegistrar(aulaId, email) {
    if (!aulaId || !email) return;
    const k = 'pl_estudo_' + _safeMail(email);
    let log; try { log = JSON.parse(localStorage.getItem(k) || '{}'); } catch { log = {}; }
    const wk = _wkKey();
    log[wk] = log[wk] || [];
    if (log[wk].indexOf(aulaId) === -1) log[wk].push(aulaId);
    const chaves = Object.keys(log).sort().slice(-6); /* guarda 6 semanas */
    const novo = {}; chaves.forEach(x => { novo[x] = log[x]; });
    localStorage.setItem(k, JSON.stringify(novo));
  }

  function _aulasEstudadas(email) {
    let log; try { log = JSON.parse(localStorage.getItem('pl_estudo_' + _safeMail(email)) || '{}'); } catch { log = {}; }
    const wk = _wkKey();
    const prev = Object.keys(log).filter(x => x < wk).sort().pop();
    const daAnterior = (prev && log[prev]) || [];
    if (log[wk] && log[wk].length) {
      return { aulas: log[wk], extras: daAnterior, semana: 'atual' };
    }
    /* sem estudo nesta semana: usa a última semana com registro */
    if (daAnterior.length) return { aulas: daAnterior, extras: [], semana: 'anterior' };
    return { aulas: [], extras: [], semana: null };
  }

  function simuladoSemana(email) {
    const est = _aulasEstudadas(email);
    if (!est.aulas.length) return null;
    const bancos = getLists().filter(l => l.tipoLista === 'banco');
    const casaCom = aulas => bancos.filter(b => (b.aulaIds || []).some(s =>
      aulas.some(a => a === s || a.endsWith('-' + s))));
    let casam = casaCom(est.aulas);
    /* balanceamento: se os assuntos da semana rendem poucas questões,
       reforça com os assuntos da semana anterior (revisão) */
    const contar = ls => ls.reduce((a, b) => a + ((getList(b.id) || {}).questoes || []).length, 0);
    if (contar(casam) < 6 && est.extras.length) {
      const reforco = casaCom(est.extras).filter(b => !casam.some(c => c.id === b.id));
      casam = [...casam, ...reforco];
    }
    if (!casam.length) return null;

    const wk = _wkKey();
    let seed = 0; for (let i = 0; i < wk.length; i++) seed = (seed * 31 + wk.charCodeAt(i)) >>> 0;

    const fontes = casam.map(b => {
      const full = getList(b.id) || {};
      return { id: b.id, assunto: (b.titulo || '').replace(/^Banco de Questões — /, ''), qs: full.questoes || [] };
    }).filter(f => f.qs.length);

    const totalDisp = fontes.reduce((a, f) => a + f.qs.length, 0);
    const alvo = Math.min(totalDisp, casam.length > 3 ? 12 : 10); /* ~10, podendo variar */

    /* round-robin entre os assuntos, com rotação semanal (determinística) */
    const escolhidas = [];
    let rodada = 0;
    while (escolhidas.length < alvo) {
      let pegou = false;
      for (let i = 0; i < fontes.length && escolhidas.length < alvo; i++) {
        const f = fontes[i];
        if (rodada < f.qs.length) {
          const idx = (seed + i + rodada) % f.qs.length;
          /* percorre sem repetir: desloca a partir do offset semanal */
          const q = f.qs[(((seed + i) % f.qs.length) + rodada) % f.qs.length];
          escolhidas.push({ ...q, _orig: { listaId: f.id, num: q.num }, _assunto: f.assunto });
          pegou = true;
        }
      }
      rodada++;
      if (!pegou) break;
    }

    return {
      id: '__simulado-' + wk,
      _virtual: true, _simulado: true, tipoLista: 'simulado',
      titulo: '🎯 Minissimulado da Semana',
      materia: 'Revisão semanal',
      fonte: 'Questões reais de banca dos assuntos que você estudou' + (est.semana === 'anterior' ? ' (última semana de estudo)' : ' nesta semana'),
      dificuldade: 'medio',
      assuntos: fontes.map(f => f.assunto),
      total: escolhidas.length,
      questoes: escolhidas.map((q, i) => ({ ...q, num: i + 1 })),
    };
  }

  /* ── Lembrete semanal do minissimulado ─────────────────────
     1× por semana, a partir do dia preferido do aluno (padrão:
     sábado), enquanto o simulado da semana não for feito. */
  function simuladoLembreteDia(email, set) {
    const k = 'pl_simulado_dia_' + _safeMail(email);
    if (set !== undefined) { localStorage.setItem(k, String(set)); return set; }
    const v = parseInt(localStorage.getItem(k), 10);
    return (v >= 1 && v <= 7) ? v : 6; /* ISO: 1=seg … 6=sáb, 7=dom */
  }

  function simuladoPrecisaLembrete(email) {
    const wk = _wkKey();
    if (localStorage.getItem('pl_simulado_visto_' + _safeMail(email)) === wk) return null;
    const dow = new Date().getDay();
    const hojeIso = dow === 0 ? 7 : dow;
    if (hojeIso < simuladoLembreteDia(email)) return null; /* ainda não chegou o dia */
    const sim = simuladoSemana(email);
    if (!sim) return null;
    const resp = getResp(sim.id, email);
    if (resp && resp.finalizadoEm) return null; /* já fez o desta semana */
    return sim;
  }

  function simuladoLembreteDispensar(email) {
    localStorage.setItem('pl_simulado_visto_' + _safeMail(email), _wkKey());
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

  /* Minissimulado com questões REAIS do banco do servidor (11 mil).
     Cacheia por semana (estável + respostas persistem). Cai no seed
     automaticamente se o banco estiver indisponível. */
  async function bancoSimulado(seed, email) {
    if (!seed) return null;
    const key = 'pl_banco_sim_' + _wkKey() + '_' + _safeMail(email);
    try { const c = JSON.parse(localStorage.getItem(key) || 'null'); if (c && c.questoes && c.questoes.length) return c; } catch {}
    try {
      const r = await fetch('/api/banco/simulado', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin',
        body: JSON.stringify({ termos: seed.assuntos || [], bancaPref: 'UNEB', n: Math.max(10, seed.total || 10) }),
      });
      const d = await r.json();
      if (d && d.disponivel && Array.isArray(d.questoes) && d.questoes.length >= 5) {
        const lista = {
          ...seed, _banco: true,
          fonte: 'Questões reais de banca — banco do Professor Leão',
          questoes: d.questoes.map((q, i) => ({
            num: i + 1, enunciado: q.enunciado, opcoes: q.opcoes, gabarito: q.gabarito,
            fonte: q.fonte, imagens: q.imagens || [], _assunto: q._assunto,
          })),
          total: d.questoes.length,
        };
        try { localStorage.setItem(key, JSON.stringify(lista)); } catch {}
        return lista;
      }
    } catch (e) { /* sem banco → usa o seed */ }
    return null;
  }

  /* API pública */
  return {
    getLists, getList, saveList, deleteList,
    getResp, saveResp, limparResp, calcScore, getHistory, historicoRegistrar,
    errosRegistrar, errosPendentes, errosParaRevisar, errosStats,
    errosPrecisaLembrete, errosMarcarLembrete,
    estudoRegistrar, simuladoSemana, bancoSimulado,
    simuladoLembreteDia, simuladoPrecisaLembrete, simuladoLembreteDispensar,
    parsePDFText, extractTextFromPDF
  };

})();
