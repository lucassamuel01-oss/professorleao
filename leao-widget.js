/* ============================================================
   PROFESSOR LEÃO — WIDGET FLUTUANTE 🦁 (IA + Plano em tudo)
   leao-widget.js

   Botão flutuante presente em todas as páginas para aluno logado:
   - Faixa "Hoje no seu plano" (dias p/ prova, pomodoros e matérias
     do dia — quando plano.js/PL_CATALOG estão na página)
   - Chat com o Leão IA ciente do CONTEXTO da página (aula aberta,
     curso, jogo, artigo) + desempenho do aluno
   - IA real via /api/ia quando o servidor está no ar; senão,
     orientação local

   Sem dependências obrigatórias — tudo é detectado dinamicamente.
   ============================================================ */
(function () {
  'use strict';

  /* só para aluno/admin logado */
  let SESS = null;
  try { SESS = JSON.parse(localStorage.getItem('pl_session') || 'null'); } catch (e) { /* */ }
  if (!SESS || !SESS.email) return;

  /* caminho base (páginas dentro de /jogos precisam de ../) */
  const BASE = /\/jogos\//.test(location.pathname) ? '../' : '';

  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ── contexto da página ─────────────────────────────────── */
  function contextoPagina() {
    const p = location.pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(location.search);
    const ctx = { pagina: p };
    if (p === 'aula.html') {
      ctx.tipo = 'aula';
      ctx.cursoId = params.get('curso');
      ctx.aulaId = params.get('aula');
      try {
        const a = (typeof PL_CATALOG !== 'undefined') ? PL_CATALOG.getAula(ctx.cursoId, ctx.aulaId) : null;
        if (a) { ctx.aulaTitulo = a.titulo; ctx.aulaDescricao = a.descricao; }
      } catch (e) { /* */ }
    } else if (p === 'curso.html') {
      ctx.tipo = 'curso';
      ctx.cursoId = params.get('curso');
      try {
        const c = (typeof PL_CATALOG !== 'undefined') ? PL_CATALOG.getCurso(ctx.cursoId) : null;
        if (c) ctx.cursoNome = c.nome;
      } catch (e) { /* */ }
    } else if (/jogos/.test(location.pathname)) {
      ctx.tipo = 'jogo';
      ctx.jogo = p.replace('.html', '');
    } else if (p === 'blog.html') {
      ctx.tipo = 'blog';
      ctx.artigo = location.hash.replace('#', '') || null;
    } else if (p === 'lista.html') {
      ctx.tipo = 'minissimulado';
    } else if (p === 'material.html') {
      ctx.tipo = 'material';
      try {
        const m = (window.PL_MATERIAIS || []).find(x => x.id === params.get('id'));
        if (m) ctx.materialTitulo = m.titulo;
      } catch (e) { /* */ }
    } else {
      ctx.tipo = 'geral';
    }
    return ctx;
  }

  /* ── plano do aluno ─────────────────────────────────────── */
  function meuLead() {
    try {
      const leads = JSON.parse(localStorage.getItem('pl_leads') || '[]');
      return [...leads].reverse().find(l =>
        l.email && l.email.toLowerCase() === SESS.email.toLowerCase()) || null;
    } catch (e) { return null; }
  }

  function diasParaProva(lead) {
    if (!lead || !lead.dataProva) return null;
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    return Math.max(0, Math.ceil((new Date(lead.dataProva + 'T00:00:00') - hoje) / 86400000));
  }

  function planoHoje(lead) {
    /* matérias e pomodoros de hoje — precisa de gerarPlanoCompleto na página */
    if (!lead || typeof window.gerarPlanoCompleto !== 'function') return null;
    try {
      const plano = gerarPlanoCompleto(lead);
      const DIAS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      const hojeNome = DIAS[new Date().getDay()];
      const inicio = lead.criadoEm ? new Date(lead.criadoEm) : new Date();
      const idx = Math.min(Math.floor(Math.max(0, (Date.now() - inicio) / 86400000) / 7),
        (plano.agenda || []).length - 1);
      const semana = (plano.agenda || [])[Math.max(0, idx)];
      const dia = semana ? (semana.dias || []).find(d => d.dia === hojeNome) : null;
      if (!dia) return { descanso: true, hojeNome };
      return {
        hojeNome,
        pomodoros: (dia.blocos || []).filter(b => b.tipo === 'pomodoro').length,
        materias: dia.matsDay || [],
      };
    } catch (e) { return null; }
  }

  /* ── stats de desempenho (tudo opcional) ────────────────── */
  function statsResumo() {
    const out = { nome: (SESS.name || 'Aluno').split(' ')[0], curso: SESS.curso || null };
    const lead = meuLead();
    if (lead) {
      out.concurso = lead.concurso;
      out.diasProva = diasParaProva(lead);
      out.rotina = lead.horasDia + 'h/dia x ' + lead.diasSemana + ' dias';
    }
    try {
      /* caderno de erros — para a IA cobrar a revisão */
      if (typeof PlQuestoes !== 'undefined' && PlQuestoes.errosStats) {
        out.cadernoErros = PlQuestoes.errosStats(SESS.email);
      }
    } catch (e) { /* */ }
    try {
      if (typeof PL_CATALOG !== 'undefined' && window.plAuth) {
        const prog = plAuth.getProgressV2();
        let tot = 0, done = 0;
        Object.values(PL_CATALOG.cursos).forEach(c => (c.aulas || []).forEach(a => {
          const disp = PL_CATALOG.ATIVIDADES.filter(at => a.materiais[at.key] !== null);
          if (!disp.length) return;
          tot++;
          const pa = (prog[c.id] || {})[a.id] || {};
          if (disp.every(at => pa[at.key])) done++;
        }));
        out.aulas = { concluidas: done, total: tot };
      }
    } catch (e) { /* */ }
    try {
      if (window.PlQuestoes) {
        const hist = PlQuestoes.getHistory(SESS.email);
        if (hist.length) {
          out.simulados = {
            qtd: hist.length,
            media: Math.round(hist.reduce((a, h) => a + (h.percent || 0), 0) / hist.length),
          };
        }
      }
    } catch (e) { /* */ }
    return out;
  }

  /* ── resposta local (sem servidor) ──────────────────────── */
  function respostaLocal(pergunta, ctx, s) {
    const dicas = {
      aula: 'Siga o trio do método: termine a aula, faça o Minissimulado — Revisão logo abaixo e feche com o jogo do assunto. Anote os erros no caderno de erros.',
      curso: 'Vá pela ordem do curso, mas priorize os assuntos do seu plano de hoje. Aula sem o minissimulado depois é estudo pela metade.',
      jogo: 'Use o modo 🎓 Treino para aprender sem pressão e o 🔥 Difícil para valer mais pontos no ranking. As perguntas mudam a cada partida!',
      blog: 'Os artigos de raio-X dos editais (SD e CFO) têm os números exatos da sua prova — vale a leitura com o caderno do lado.',
      minissimulado: 'Abaixo de 70%? Reveja a aula do assunto antes de seguir. 70%+? Avance e volte neste minissimulado em 1 semana.',
      material: 'Leia o material na ordem: ideia central → fórmulas → exemplo resolvido → pegadinhas. Depois faça o Treine Agora sem olhar a resposta e feche com o minissimulado da aula.',
      geral: 'Abra sua Minha Área para ver a Missão de Hoje — metas e lembretes do seu plano.',
    };
    let t = '🦁 ' + (s.nome || 'Aluno') + ', ';
    if (s.aulas) t += 'você concluiu ' + s.aulas.concluidas + ' de ' + s.aulas.total + ' aulas';
    else t += 'crie seu plano na Minha Área para eu te acompanhar de perto';
    if (s.simulados) t += ' e sua média nos minissimulados é ' + s.simulados.media + '%';
    if (s.diasProva != null) t += '. Faltam ' + s.diasProva + ' dias para a prova';
    if (s.cadernoErros && s.cadernoErros.pendentes > 0) {
      t += '. 📕 Você tem ' + s.cadernoErros.pendentes + ' questão(ões) no caderno de erros — refazê-las é a revisão mais valiosa';
    }
    t += '\n\n💡 Para conversa completa com a IA real, acesse pela plataforma oficial (servidor).';
    return t;
  }

  /* ── chat ───────────────────────────────────────────────── */
  let historico = [];
  let ocupado = false;

  function bolha(texto, who) {
    const chat = document.getElementById('lw-chat');
    const div = document.createElement('div');
    div.className = 'lw-bubble lw-bubble--' + who;
    div.innerHTML = esc(texto).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
    return div;
  }

  async function perguntar(pergunta) {
    if (ocupado || !pergunta) return;
    ocupado = true;
    bolha(pergunta, 'user');
    historico.push({ role: 'user', content: pergunta });
    const pensando = bolha('🦁 pensando…', 'leao');
    pensando.style.opacity = '.55';

    const ctx = contextoPagina();
    const s = statsResumo();
    let resposta = null;
    try {
      const res = await fetch('/api/ia', {
        method: 'POST', credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pergunta,
          contexto: { ...s, paginaAtual: ctx },
          historico: historico.slice(0, -1).slice(-8),
        }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.texto) resposta = '🦁 ' + data.texto;
      }
    } catch (e) { /* sem servidor */ }
    if (!resposta) resposta = respostaLocal(pergunta, ctx, s);
    pensando.remove();
    bolha(resposta, 'leao');
    historico.push({ role: 'assistant', content: resposta.replace(/^🦁 /, '') });
    if (historico.length > 12) historico = historico.slice(-12);
    ocupado = false;
  }

  /* ── UI ─────────────────────────────────────────────────── */
  function montarUI() {
    const css = document.createElement('style');
    css.textContent = `
      #lw-fab{position:fixed;right:18px;bottom:18px;z-index:9990;width:56px;height:56px;border-radius:50%;
        background:linear-gradient(135deg,#4A6CF7,#6B89FF);border:none;cursor:pointer;font-size:26px;
        box-shadow:0 8px 28px rgba(74,108,247,.45);transition:.2s}
      #lw-fab:hover{transform:scale(1.08)}
      #lw-panel{position:fixed;right:18px;bottom:84px;z-index:9991;width:min(360px,calc(100vw - 36px));
        max-height:min(560px,calc(100vh - 110px));display:none;flex-direction:column;
        background:#0F1E38;border:1px solid rgba(74,108,247,.35);border-radius:16px;
        box-shadow:0 24px 64px rgba(0,0,0,.5);overflow:hidden;font-family:'Open Sans',sans-serif;color:#fff}
      #lw-panel.aberto{display:flex}
      .lw-head{display:flex;align-items:center;justify-content:space-between;gap:8px;
        padding:12px 16px;background:rgba(74,108,247,.12);border-bottom:1px solid rgba(74,108,247,.25)}
      .lw-head b{font-family:'Montserrat',sans-serif;font-size:14px}
      .lw-plano{padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.07);font-size:12px;
        color:#8892B4;line-height:1.6}
      .lw-plano strong{color:#6B89FF}
      .lw-plano a{color:#6B89FF;text-decoration:none;font-weight:700}
      #lw-chat{flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:8px;min-height:120px}
      .lw-bubble{padding:9px 13px;border-radius:12px;font-size:12.5px;line-height:1.6;white-space:pre-line;max-width:95%}
      .lw-bubble--user{align-self:flex-end;background:rgba(74,108,247,.22);border:1px solid rgba(74,108,247,.4)}
      .lw-bubble--leao{align-self:flex-start;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:#D6DCEC}
      .lw-chips{display:flex;gap:6px;flex-wrap:wrap;padding:0 14px 10px}
      .lw-chip{padding:6px 11px;border-radius:99px;background:rgba(255,255,255,.05);
        border:1px solid rgba(255,255,255,.14);color:#D6DCEC;font-size:11px;font-weight:700;cursor:pointer}
      .lw-chip:hover{border-color:#4A6CF7}
      .lw-input{display:flex;gap:6px;padding:0 14px 14px}
      .lw-input input{flex:1;padding:9px 12px;border-radius:9px;background:#152545;
        border:1px solid rgba(255,255,255,.12);color:#fff;font-size:12.5px;outline:none;font-family:inherit}
      .lw-input button{padding:9px 14px;border-radius:9px;background:#4A6CF7;border:none;color:#fff;
        font-weight:800;cursor:pointer;font-size:13px}
    `;
    document.head.appendChild(css);

    const fab = document.createElement('button');
    fab.id = 'lw-fab';
    fab.title = 'Leão IA — seu treinador de estudos';
    fab.textContent = '🦁';
    document.body.appendChild(fab);

    const panel = document.createElement('div');
    panel.id = 'lw-panel';
    panel.innerHTML = `
      <div class="lw-head">
        <b>🦁 Leão IA</b>
        <button class="lw-chip" id="lw-fechar" style="font-size:13px">✕</button>
      </div>
      <div class="lw-plano" id="lw-plano"></div>
      <div id="lw-chat"></div>
      <div class="lw-chips">
        <button class="lw-chip" data-q="O que devo fazer agora nesta página?">🎯 O que faço agora?</button>
        <button class="lw-chip" data-q="Como está meu desempenho geral?">📊 Meu desempenho</button>
        <button class="lw-chip" data-q="Estou no ritmo certo para a prova?">⏱️ Meu ritmo</button>
      </div>
      <div class="lw-input">
        <input id="lw-q" maxlength="400" placeholder="Pergunte ao Leão…" />
        <button id="lw-send">➤</button>
      </div>`;
    document.body.appendChild(panel);

    /* faixa do plano de hoje */
    const lead = meuLead();
    const planoEl = document.getElementById('lw-plano');
    if (lead) {
      const dias = diasParaProva(lead);
      const hoje = planoHoje(lead);
      let h = '<strong>📋 Seu plano:</strong> ' + esc(lead.concurso) +
        (dias != null ? ' · <strong>' + dias + ' dias</strong> p/ prova' : ' · data a definir');
      if (hoje && !hoje.descanso) {
        h += '<br/>Hoje (' + hoje.hojeNome + '): <strong>' + hoje.pomodoros + ' Pomodoros</strong> — ' +
          hoje.materias.slice(0, 3).map(esc).join(' · ');
      } else if (hoje && hoje.descanso) {
        h += '<br/>Hoje (' + hoje.hojeNome + '): descanso 😴 — revisão leve, se quiser.';
      }
      h += ' <a href="' + BASE + 'minha-area.html">ver plano →</a>';
      planoEl.innerHTML = h;
    } else {
      planoEl.innerHTML = 'Você ainda não tem um Plano de Estudos. <a href="' + BASE + 'minha-area.html">Criar agora →</a>';
    }

    /* eventos */
    fab.addEventListener('click', () => {
      panel.classList.toggle('aberto');
      if (panel.classList.contains('aberto') && !document.querySelector('#lw-chat .lw-bubble')) {
        const ctx = contextoPagina();
        const oi = {
          aula: 'Estou vendo que você está na aula' + (ctx.aulaTitulo ? ' "' + ctx.aulaTitulo + '"' : '') + '. Posso ajudar com o assunto ou com a sua estratégia!',
          curso: 'Navegando pelo curso' + (ctx.cursoNome ? ' ' + ctx.cursoNome : '') + '? Te ajudo a decidir a próxima aula.',
          jogo: 'Boa! Jogar é fixação de verdade. Quer uma dica para pontuar mais ou revisar o assunto?',
          blog: 'Lendo o blog? Posso conectar o artigo com o seu plano de estudos.',
          minissimulado: 'Minissimulado na tela! Depois me pergunte o que fazer com os erros.',
          material: 'Estudando' + (ctx.materialTitulo ? ' "' + ctx.materialTitulo + '"' : ' o material da aula') + '? Me pergunte qualquer parte que não ficou clara!',
          geral: 'Pronto para estudar? Me pergunte qualquer coisa sobre sua preparação.',
        }[ctx.tipo];
        bolha('Olá, ' + (SESS.name || 'Aluno').split(' ')[0] + '! 🦁 ' + oi, 'leao');
      }
    });
    document.getElementById('lw-fechar').addEventListener('click', () => panel.classList.remove('aberto'));
    document.querySelectorAll('.lw-chip[data-q]').forEach(b =>
      b.addEventListener('click', () => perguntar(b.dataset.q)));
    document.getElementById('lw-send').addEventListener('click', () => {
      const el = document.getElementById('lw-q');
      const q = el.value.trim(); el.value = '';
      perguntar(q);
    });
    document.getElementById('lw-q').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('lw-send').click();
    });

    /* API pública: outras páginas abrem o chat já com uma pergunta */
    window.LeaoWidget = {
      abrir(pergunta) {
        panel.classList.add('aberto');
        if (pergunta) perguntar(pergunta);
      }
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarUI);
  } else {
    montarUI();
  }
})();
