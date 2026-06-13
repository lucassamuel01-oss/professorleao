/* ============================================================
   PROFESSOR LEÃO — PROTEÇÃO DE CONTEÚDO
   protecao.js

   Camada de dissuasão para as páginas de conteúdo do aluno:
   - marca d'água RASTREÁVEL com nome/e-mail do aluno (se vazar,
     identifica de quem saiu);
   - bloqueio de menu de contexto, seleção, arrastar imagem e
     atalhos de cópia/impressão/código-fonte;
   - aviso ao detectar ferramentas de desenvolvedor.

   IMPORTANTE: proteção de frontend é DISSUASÃO — desencoraja o
   compartilhamento casual. A proteção real do conteúdo vem do
   servidor (login, rate-limit) e da marca d'água que torna cada
   cópia rastreável até o aluno.

   Carregar por último, nas páginas protegidas:
     <script src="protecao.js" defer></script>
   ============================================================ */
(function () {
  'use strict';

  /* identifica o aluno a partir da sessão (auth.js) */
  function alunoAtual() {
    try {
      const s = JSON.parse(localStorage.getItem('pl_session') || 'null');
      if (s && (s.name || s.email)) {
        return { nome: s.name || 'Aluno', email: s.email || '', id: s.id || '' };
      }
    } catch (e) { /* */ }
    return null;
  }

  const aluno = alunoAtual();
  /* sem aluno logado (página pública), não aplica proteção pesada */
  if (!aluno) return;

  /* ── 1. Marca d'água rastreável ─────────────────────────── */
  function montarMarcaDagua() {
    if (document.getElementById('pl-watermark')) return;
    const etiqueta = (aluno.nome + ' · ' + aluno.email).trim();
    const data = new Date().toLocaleDateString('pt-BR');
    const texto = etiqueta + '  ·  ' + data + '  ·  professorleao.com';

    /* tile SVG em data-URI: leve, repetível, não selecionável */
    const svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='420' height='220'>" +
      "<text x='0' y='110' transform='rotate(-24 0 110)' " +
      "fill='rgba(120,140,180,0.16)' font-family='Arial,Helvetica,sans-serif' " +
      "font-size='14' font-weight='bold'>" +
      texto.replace(/&/g, '&amp;').replace(/</g, '&lt;') +
      "</text></svg>";
    const uri = "url(\"data:image/svg+xml;utf8," + encodeURIComponent(svg) + "\")";

    const wm = document.createElement('div');
    wm.id = 'pl-watermark';
    wm.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:2147483000',
      'pointer-events:none', 'background-image:' + uri,
      'background-repeat:repeat', 'opacity:1', 'mix-blend-mode:normal'
    ].join(';');
    document.body.appendChild(wm);

    /* se removerem a marca d'água via DevTools, recolocamos */
    const obs = new MutationObserver(() => {
      if (!document.getElementById('pl-watermark')) {
        try { document.body.appendChild(wm); } catch (e) { /* */ }
      }
    });
    try { obs.observe(document.body, { childList: true }); } catch (e) { /* */ }
  }

  /* ── 2. Bloqueio de cópia / menu / arrastar ─────────────── */
  function bloquearCopia() {
    const ehCampo = (el) => el && (
      el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable
    );

    /* menu de contexto (botão direito) */
    document.addEventListener('contextmenu', (e) => {
      if (!ehCampo(e.target)) { e.preventDefault(); avisar(); }
    });

    /* arrastar imagens/textos para fora */
    document.addEventListener('dragstart', (e) => {
      if (!ehCampo(e.target)) e.preventDefault();
    });

    /* copiar / recortar fora de campos de digitação */
    ['copy', 'cut'].forEach((ev) =>
      document.addEventListener(ev, (e) => {
        if (!ehCampo(e.target)) { e.preventDefault(); avisar(); }
      })
    );

    /* atalhos: Ctrl/⌘ + C, X, S, U, P  e  PrintScreen / F12 */
    document.addEventListener('keydown', (e) => {
      const k = (e.key || '').toLowerCase();
      const mod = e.ctrlKey || e.metaKey;
      if (mod && ['c', 'x', 's', 'u', 'p'].includes(k) && !ehCampo(e.target)) {
        e.preventDefault(); avisar();
      }
      if (k === 'printscreen') { avisar(); }
      if (e.key === 'F12') { e.preventDefault(); avisar(); }
      if (mod && e.shiftKey && ['i', 'j', 'c'].includes(k)) { e.preventDefault(); avisar(); }
    });

    /* impede seleção de texto fora de campos (CSS) */
    const st = document.createElement('style');
    st.textContent =
      'body{-webkit-user-select:none;-ms-user-select:none;user-select:none;' +
      '-webkit-touch-callout:none}' +
      'input,textarea,[contenteditable]{-webkit-user-select:text;user-select:text}' +
      'img{-webkit-user-drag:none;user-drag:none;pointer-events:none}';
    document.head.appendChild(st);
  }

  /* ── 3. Aviso discreto (sem travar a navegação) ─────────── */
  let _avisoEm = 0;
  function avisar() {
    const agora = Date.now();
    if (agora - _avisoEm < 2500) return; /* não spammar */
    _avisoEm = agora;
    let t = document.getElementById('pl-aviso-protecao');
    if (!t) {
      t = document.createElement('div');
      t.id = 'pl-aviso-protecao';
      t.style.cssText = [
        'position:fixed', 'left:50%', 'bottom:26px', 'transform:translateX(-50%)',
        'z-index:2147483600', 'background:#0A1628', 'color:#fff',
        'border:1px solid rgba(251,146,60,.5)', 'border-radius:12px',
        'padding:12px 18px', 'font-family:Arial,Helvetica,sans-serif',
        'font-size:13px', 'box-shadow:0 12px 40px rgba(0,0,0,.5)',
        'max-width:90vw', 'text-align:center', 'transition:opacity .3s'
      ].join(';');
      document.body.appendChild(t);
    }
    t.innerHTML = '🔒 Conteúdo exclusivo do Professor Leão. Esta cópia está identificada com o seu nome.';
    t.style.opacity = '1';
    clearTimeout(t._tmr);
    t._tmr = setTimeout(() => { t.style.opacity = '0'; }, 2600);
  }

  /* ── 4. Detecção leve de DevTools (dissuasão) ───────────── */
  function vigiarDevTools() {
    let avisado = false;
    setInterval(() => {
      const limiar = 170;
      const aberto =
        window.outerWidth - window.innerWidth > limiar ||
        window.outerHeight - window.innerHeight > limiar;
      if (aberto && !avisado) { avisado = true; avisar(); }
      if (!aberto) avisado = false;
    }, 1500);
  }

  /* inicializa quando o body existir */
  function iniciar() {
    montarMarcaDagua();
    bloquearCopia();
    vigiarDevTools();
  }
  if (document.body) iniciar();
  else document.addEventListener('DOMContentLoaded', iniciar);

  /* expõe a etiqueta para os PDFs personalizarem a marca d'água */
  window.PL_ALUNO = aluno;
})();
