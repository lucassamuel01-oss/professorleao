/* ============================================================
   PROFESSOR LEÃO — SERVICE WORKER (PWA)
   sw.js

   Estratégia de cache CONSERVADORA e segura:
   - /api/*            → NUNCA cacheia (sempre rede; dados/auth ao vivo)
   - origem externa    → ignora (Google Fonts, Mercado Pago, etc.)
   - navegação (HTML)  → rede primeiro; se offline, usa o cache; senão,
                         a página offline.
   - estáticos (css/js/img/fontes) → cache primeiro + atualiza em 2º plano
                         (stale-while-revalidate). Isso deixa os JOGOS
                         (HTML autocontido) jogáveis OFFLINE após a 1ª visita.

   Para forçar atualização do cache, suba o número da versão.
   ============================================================ */
const VERSION = 'pl-v10';
const CACHE = 'pl-cache-' + VERSION;
const PRECACHE = ['/', '/offline.html', '/styles.css', '/icon.svg', '/manifest.json'];
const STATIC_RE = /\.(?:css|js|mjs|png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|otf)$/i;

/* Jogos + dependências compartilhadas — aquecidos em SEGUNDO PLANO (sob
   demanda da página, respeitando Economia de Dados) para ficarem jogáveis
   OFFLINE sem o aluno precisar abrir cada um antes. */
const GAME_DEPS = ['/jogos.html', '/jogos/arcade.js', '/jogos/rankings.js', '/auth.js', '/protecao.js', '/leao-widget.js', '/appnav.js', '/flashcards.html', '/flashcards-data.js'];
const GAME_URLS = GAME_DEPS.concat([
  '/jogos/calculo.html', '/jogos/combinatoria.html', '/jogos/conjuntos-numericos.html',
  '/jogos/conjuntos-operacoes.html', '/jogos/equacoes.html', '/jogos/estatistica.html',
  '/jogos/expressoes.html', '/jogos/figuras.html', '/jogos/fracoes.html', '/jogos/funcoes.html',
  '/jogos/geo-areas.html', '/jogos/geo-espacial.html', '/jogos/geometria-plana.html',
  '/jogos/graficos.html', '/jogos/juros.html', '/jogos/logica-vf.html', '/jogos/matrizes.html',
  '/jogos/multiplos-divisores.html', '/jogos/pa-pg.html', '/jogos/porcentagem.html',
  '/jogos/potenciacao.html', '/jogos/probabilidade.html', '/jogos/ranking-geral.html',
  '/jogos/razao.html', '/jogos/regra-de-tres.html', '/jogos/sequencias.html',
  '/jogos/sistemas.html', '/jogos/unidades.html', '/jogos/trigonometria.html',
  '/jogos/logaritmos.html'
]);
function warmGames() {
  return caches.open(CACHE).then((c) =>
    Promise.allSettled(GAME_URLS.map((u) =>
      fetch(u, { credentials: 'same-origin' }).then((r) => { if (r && r.ok) return c.put(u, r); }).catch(() => {})
    ))
  );
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(PRECACHE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('pl-cache-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
  if (e.data === 'warm-games') e.waitUntil(warmGames());
});

/* ── Notificações push ───────────────────────────────────────── */
self.addEventListener('push', (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; }
  catch (err) { data = { title: 'Professor Leão', body: (e.data && e.data.text && e.data.text()) || '' }; }
  const title = data.title || 'Professor Leão';
  const opts = {
    body: data.body || '',
    icon: '/assets/img/logo-azul.png',
    badge: '/assets/img/logo-azul.png',
    data: { url: data.url || '/jogos.html' },
    vibrate: [80, 40, 80],
    tag: data.tag || 'pl-notif',
    renotify: true
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/jogos.html';
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ('focus' in c) { if (c.navigate) { try { c.navigate(url); } catch (_) {} } return c.focus(); }
      }
      if (self.clients.openWindow) return self.clients.openWindow(url);
    })
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin) return;       // externos: deixa a rede cuidar
  if (url.pathname.startsWith('/api/')) return;           // API: nunca cacheia

  /* navegação (páginas HTML): rede primeiro */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
          return res;
        })
        .catch(() => caches.match(req).then((m) => m || caches.match('/offline.html').then((o) => o || caches.match('/'))))
    );
    return;
  }

  /* estáticos: cache primeiro, revalida em 2º plano */
  if (STATIC_RE.test(url.pathname)) {
    e.respondWith(
      caches.match(req).then((cached) => {
        const net = fetch(req)
          .then((res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; })
          .catch(() => cached);
        return cached || net;
      })
    );
    return;
  }

  /* demais: rede, com fallback ao cache se offline */
  e.respondWith(fetch(req).catch(() => caches.match(req)));
});
