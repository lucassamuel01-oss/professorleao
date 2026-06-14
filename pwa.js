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

  /* ── Aquece o cache dos jogos em 2º plano (offline pronto) ──
     Respeita Economia de Dados e conexões lentas; no máximo 1x a cada
     6 dias. Roda em idle, só quando online. */
  function _warmGames() {
    try {
      if (!navigator.onLine) return;
      var c = navigator.connection;
      if (c && (c.saveData || /(^|-)2g/.test(c.effectiveType || ''))) return;
      var last = Number(localStorage.getItem('pl_games_warmed') || 0);
      if (Date.now() - last < 6 * 864e5) return;
      navigator.serviceWorker.ready.then(function (reg) {
        var sw = reg.active || (navigator.serviceWorker.controller);
        if (sw) { sw.postMessage('warm-games'); localStorage.setItem('pl_games_warmed', String(Date.now())); }
      });
    } catch (e) { /* */ }
  }
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      var idle = window.requestIdleCallback || function (f) { return setTimeout(f, 3000); };
      idle(_warmGames);
    });
  }

  /* ── Aviso discreto de offline / online ── */
  function _toast(msg, ok) {
    var t = document.getElementById('pl-net-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'pl-net-toast';
      t.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%) translateY(120%);z-index:2147483250;background:#0F1E38;color:#fff;border:1px solid rgba(74,108,247,.4);border-radius:11px;padding:10px 16px;font-family:Montserrat,Arial,sans-serif;font-size:13px;font-weight:700;box-shadow:0 12px 36px rgba(0,0,0,.5);transition:transform .35s cubic-bezier(.34,1.56,.64,1);max-width:90vw;text-align:center';
      document.body.appendChild(t);
    }
    t.style.borderColor = ok ? 'rgba(34,197,94,.5)' : 'rgba(245,158,11,.5)';
    t.textContent = msg;
    requestAnimationFrame(function () { t.style.transform = 'translateX(-50%) translateY(0)'; });
    clearTimeout(t._tmr);
    t._tmr = setTimeout(function () { t.style.transform = 'translateX(-50%) translateY(120%)'; }, ok ? 2200 : 3600);
  }
  window.addEventListener('offline', function () { _toast('📴 Você está offline — o conteúdo já aberto continua disponível.', false); });
  window.addEventListener('online', function () { _toast('✅ Conexão restabelecida.', true); });
  window.plToast = _toast;

  /* ── Notificações push (Web Push) ──────────────────────────
     Lembretes do minissimulado da semana e do caderno de erros.
     A inscrição exige login (o endpoint é protegido) e só funciona
     se o servidor tiver as chaves VAPID configuradas. */
  function _pushSupported() {
    return ('serviceWorker' in navigator) && ('PushManager' in window) && ('Notification' in window);
  }
  function _b64ToUint8(base64) {
    var pad = '='.repeat((4 - (base64.length % 4)) % 4);
    var b64 = (base64 + pad).replace(/-/g, '+').replace(/_/g, '/');
    var raw = atob(b64);
    var out = new Uint8Array(raw.length);
    for (var i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
    return out;
  }
  window.plPushSupported = _pushSupported;

  /* Estado atual: 'unsupported' | 'denied' | 'subscribed' | 'default' */
  window.plPushState = function () {
    if (!_pushSupported()) return Promise.resolve('unsupported');
    if (Notification.permission === 'denied') return Promise.resolve('denied');
    return navigator.serviceWorker.ready
      .then(function (reg) { return reg.pushManager.getSubscription(); })
      .then(function (sub) { return sub ? 'subscribed' : 'default'; })
      .catch(function () { return 'default'; });
  };

  window.plEnablePush = function () {
    if (!_pushSupported()) { _toast('🔕 Seu navegador não suporta notificações.', false); return Promise.resolve(false); }
    return fetch('/api/push/public-key', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function (cfg) {
        if (!cfg || !cfg.enabled || !cfg.publicKey) {
          _toast('🔔 As notificações ainda não estão disponíveis. Tente mais tarde.', false);
          return false;
        }
        return Notification.requestPermission().then(function (perm) {
          if (perm !== 'granted') { _toast('🔕 Permissão de notificações negada.', false); return false; }
          return navigator.serviceWorker.ready.then(function (reg) {
            return reg.pushManager.getSubscription().then(function (existing) {
              return existing || reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: _b64ToUint8(cfg.publicKey)
              });
            });
          }).then(function (sub) {
            return fetch('/api/push/subscribe', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'same-origin',
              body: JSON.stringify({ subscription: sub })
            }).then(function (r) {
              if (r.status === 401) { _toast('🔔 Entre na sua conta para ativar os lembretes.', false); return false; }
              if (!r.ok) { _toast('Não foi possível ativar agora.', false); return false; }
              _toast('🔔 Lembretes ativados!', true);
              return true;
            });
          });
        });
      })
      .catch(function () { _toast('Não foi possível ativar agora.', false); return false; });
  };

  window.plDisablePush = function () {
    if (!_pushSupported()) return Promise.resolve(false);
    return navigator.serviceWorker.ready
      .then(function (reg) { return reg.pushManager.getSubscription(); })
      .then(function (sub) {
        if (!sub) return false;
        var ep = sub.endpoint;
        return sub.unsubscribe().then(function () {
          return fetch('/api/push/unsubscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({ endpoint: ep })
          }).then(function () { _toast('🔕 Lembretes desativados.', true); return true; });
        });
      })
      .catch(function () { return false; });
  };
})();
