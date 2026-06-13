/* ============================================================
   PROFESSOR LEÃO — PWA bootstrap (pwa.js)
   Registra o service worker e captura o evento de instalação,
   expondo window.plInstall() para um botão "Instalar app".
   ============================================================ */
(function () {
  'use strict';
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function () { /* sem PWA: segue normal */ });
    });
  }

  var _prompt = null;
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    _prompt = e;
    document.documentElement.classList.add('pl-installable');
    window.dispatchEvent(new Event('pl-installable'));
  });

  window.plInstall = function () {
    if (!_prompt) return false;
    _prompt.prompt();
    _prompt.userChoice.finally(function () {
      _prompt = null;
      document.documentElement.classList.remove('pl-installable');
    });
    return true;
  };

  window.addEventListener('appinstalled', function () {
    _prompt = null;
    document.documentElement.classList.remove('pl-installable');
  });
})();
