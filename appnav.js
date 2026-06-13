/* ============================================================
   PROFESSOR LEÃO — Barra de navegação do APP (appnav.js)
   Mostra uma barra inferior de abas (Jogos · Minha Área · Ranking)
   APENAS quando a plataforma roda como app instalado (standalone /
   TWA). No navegador comum, não aparece. Carregar nas páginas-hub:
     <script src="/appnav.js" defer></script>
   ============================================================ */
(function () {
  'use strict';

  var standalone =
    (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    window.navigator.standalone === true ||
    /[?&]source=(app|twa|shortcut)/.test(location.search);
  if (!standalone) return;

  var path = (location.pathname || '/').replace(/\/+$/, '') || '/';
  var TABS = [
    { href: '/jogos.html', label: 'Jogos', icon: '🎮', re: /\/jogos\.html$/ },
    { href: '/minha-area.html', label: 'Minha Área', icon: '📚', re: /\/(minha-area|curso|aula|lista|material)\.html$/ },
    { href: '/jogos/ranking-geral.html', label: 'Ranking', icon: '🏆', re: /ranking-geral\.html$/ }
  ];

  var css =
    '#pl-appnav{position:fixed;left:0;right:0;bottom:0;z-index:2147482000;display:flex;' +
    'background:rgba(10,22,40,.97);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);' +
    'border-top:1px solid rgba(74,108,247,.22);padding-bottom:env(safe-area-inset-bottom,0px);' +
    "font-family:'Montserrat',Arial,sans-serif}" +
    '#pl-appnav a{flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;' +
    'padding:9px 4px 8px;text-decoration:none;color:#8892B4;font-size:11px;font-weight:700;transition:color .15s}' +
    '#pl-appnav a .ic{font-size:20px;line-height:1}' +
    '#pl-appnav a.on{color:#6B89FF}' +
    '#pl-appnav a:active{background:rgba(74,108,247,.10)}' +
    'body.pl-has-appnav{padding-bottom:calc(62px + env(safe-area-inset-bottom,0px))!important}' +
    /* empurra o botão/painel do Leão IA para cima da barra */
    'body.pl-has-appnav #lw-fab{bottom:80px!important}' +
    'body.pl-has-appnav #lw-panel{bottom:146px!important}' +
    'body.pl-has-appnav.lw-tem-whats #lw-fab{bottom:154px!important}' +
    'body.pl-has-appnav.lw-tem-whats #lw-panel{bottom:220px!important}';

  var nav = document.createElement('nav');
  nav.id = 'pl-appnav';
  nav.setAttribute('aria-label', 'Navegação do app');
  nav.innerHTML = TABS.map(function (t) {
    var on = t.re.test(path) ? ' on' : '';
    return '<a href="' + t.href + '" class="' + on.trim() + '"><span class="ic">' + t.icon + '</span><span class="lb">' + t.label + '</span></a>';
  }).join('');

  var st = document.createElement('style');
  st.textContent = css;

  function mount() {
    if (document.getElementById('pl-appnav')) return;
    document.head.appendChild(st);
    document.body.appendChild(nav);
    document.body.classList.add('pl-has-appnav');
  }
  if (document.body) mount();
  else document.addEventListener('DOMContentLoaded', mount);
})();
