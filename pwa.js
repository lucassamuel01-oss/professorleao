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

  /* ── Pedir permissão de notificações ao instalar / abrir o app ──
     Mostra UMA vez um convite (com gesto do usuário, como exigem os
     navegadores). Só aparece no app instalado, com aluno logado e
     quando o push está configurado no servidor (chaves VAPID). */
  function _isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      window.navigator.standalone === true ||
      /[?&]source=(app|twa|shortcut)/.test(location.search);
  }
  function _logado() {
    try { var s = JSON.parse(localStorage.getItem('pl_session') || 'null'); return !!(s && s.id); } catch (e) { return false; }
  }
  function _notifBanner() {
    if (document.getElementById('pl-notif-ask')) return;
    var b = document.createElement('div');
    b.id = 'pl-notif-ask';
    b.style.cssText = 'position:fixed;left:50%;bottom:calc(80px + env(safe-area-inset-bottom,0px));transform:translateX(-50%) translateY(160%);z-index:2147483300;background:#0F1E38;color:#fff;border:1px solid rgba(74,108,247,.45);border-radius:14px;padding:14px 16px;width:min(380px,calc(100vw - 28px));box-shadow:0 16px 44px rgba(0,0,0,.55);font-family:Montserrat,Arial,sans-serif;transition:transform .4s cubic-bezier(.34,1.56,.64,1)';
    b.innerHTML =
      '<div style="display:flex;gap:11px;align-items:flex-start">' +
        '<div style="font-size:26px;line-height:1">🔔</div>' +
        '<div style="flex:1">' +
          '<div style="font-weight:800;font-size:14px;margin-bottom:3px">Ativar lembretes?</div>' +
          '<div style="font-size:12.5px;color:#B7C0DC;line-height:1.5">Receba avisos do minissimulado da semana e das aulas ao vivo — mesmo com o app fechado.</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;margin-top:12px">' +
        '<button id="pl-notif-no" style="flex:1;padding:10px;border-radius:9px;background:transparent;border:1px solid rgba(255,255,255,.16);color:#B7C0DC;font-family:inherit;font-weight:700;font-size:13px;cursor:pointer">Agora não</button>' +
        '<button id="pl-notif-yes" style="flex:1;padding:10px;border-radius:9px;background:#4A6CF7;border:none;color:#fff;font-family:inherit;font-weight:800;font-size:13px;cursor:pointer">🔔 Ativar</button>' +
      '</div>';
    document.body.appendChild(b);
    requestAnimationFrame(function () { b.style.transform = 'translateX(-50%) translateY(0)'; });
    function fechar() { b.style.transform = 'translateX(-50%) translateY(160%)'; setTimeout(function () { b.remove(); }, 420); }
    function marcar() { try { localStorage.setItem('pl_push_prompted', '1'); } catch (e) {} }
    document.getElementById('pl-notif-no').addEventListener('click', function () { marcar(); fechar(); });
    document.getElementById('pl-notif-yes').addEventListener('click', function () {
      marcar(); fechar();
      if (typeof window.plEnablePush === 'function') window.plEnablePush();
    });
  }
  function _maybePromptNotif() {
    try {
      if (localStorage.getItem('pl_push_prompted')) return;
      if (!('Notification' in window) || Notification.permission !== 'default') return;
      if (!(window.plPushSupported && window.plPushSupported())) return;
      if (!_isStandalone() || !_logado()) return;
      fetch('/api/push/public-key', { credentials: 'same-origin' })
        .then(function (r) { return r.json(); })
        .then(function (cfg) {
          if (cfg && cfg.enabled && cfg.publicKey && !localStorage.getItem('pl_push_prompted')) _notifBanner();
        })
        .catch(function () { /* */ });
    } catch (e) { /* */ }
  }
  window.addEventListener('appinstalled', function () { setTimeout(_maybePromptNotif, 1500); });
  window.addEventListener('load', function () { setTimeout(_maybePromptNotif, 3500); });

  /* ── Abrir no app, se já instalado ───────────────────────────
     No Android, links do professorleao.com já abrem direto no app
     (Digital Asset Links / TWA). Este banner é um reforço: se o app
     estiver instalado e a pessoa abrir no navegador, oferece abrir nele. */
  var APP_PKG = 'com.professorleao.app';
  function _openAppBanner() {
    if (document.getElementById('pl-openapp')) return;
    var b = document.createElement('div');
    b.id = 'pl-openapp';
    b.style.cssText = 'position:fixed;left:50%;top:calc(12px + env(safe-area-inset-top,0px));transform:translateX(-50%) translateY(-160%);z-index:2147483300;display:flex;align-items:center;gap:12px;background:#0F1E38;color:#fff;border:1px solid rgba(74,108,247,.45);border-radius:12px;padding:10px 12px;width:min(420px,calc(100vw - 24px));box-shadow:0 14px 40px rgba(0,0,0,.5);font-family:Montserrat,Arial,sans-serif;transition:transform .4s cubic-bezier(.34,1.56,.64,1)';
    b.innerHTML =
      '<img src="/assets/img/icon-192.png" alt="" style="width:34px;height:34px;border-radius:8px;flex-shrink:0">' +
      '<div style="flex:1;min-width:0"><div style="font-weight:800;font-size:13px">Você tem o app instalado</div>' +
      '<div style="font-size:12px;color:#B7C0DC">Abra no app para a melhor experiência.</div></div>' +
      '<button id="pl-openapp-go" style="padding:8px 14px;border-radius:8px;background:#4A6CF7;border:none;color:#fff;font-family:inherit;font-weight:800;font-size:12.5px;cursor:pointer;white-space:nowrap">Abrir</button>' +
      '<button id="pl-openapp-x" aria-label="Fechar" style="background:none;border:none;color:#8892B4;font-size:18px;cursor:pointer;padding:0 2px">✕</button>';
    document.body.appendChild(b);
    requestAnimationFrame(function () { b.style.transform = 'translateX(-50%) translateY(0)'; });
    function fechar() { try { sessionStorage.setItem('pl_openapp_dismiss', '1'); } catch (e) {} b.style.transform = 'translateX(-50%) translateY(-160%)'; setTimeout(function () { b.remove(); }, 420); }
    document.getElementById('pl-openapp-x').addEventListener('click', fechar);
    document.getElementById('pl-openapp-go').addEventListener('click', function () {
      var url = 'intent://' + location.host + location.pathname + location.search +
        '#Intent;scheme=https;package=' + APP_PKG + ';end';
      try { location.href = url; } catch (e) {}
      fechar();
    });
  }
  function _maybeOpenInApp() {
    try {
      if (_isStandalone()) return;
      if (sessionStorage.getItem('pl_openapp_dismiss')) return;
      if (!navigator.getInstalledRelatedApps) return;
      navigator.getInstalledRelatedApps().then(function (apps) {
        if ((apps || []).some(function (a) { return a && (a.id === APP_PKG || a.platform === 'play'); })) _openAppBanner();
      }).catch(function () { /* */ });
    } catch (e) { /* */ }
  }
  window.addEventListener('load', function () { setTimeout(_maybeOpenInApp, 1200); });
})();
