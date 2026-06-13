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
const VERSION = 'pl-v1';
const CACHE = 'pl-cache-' + VERSION;
const PRECACHE = ['/', '/offline.html', '/styles.css', '/icon.svg', '/manifest.json'];
const STATIC_RE = /\.(?:css|js|mjs|png|jpg|jpeg|gif|webp|svg|ico|woff2?|ttf|otf)$/i;

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

self.addEventListener('message', (e) => { if (e.data === 'skipWaiting') self.skipWaiting(); });

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
