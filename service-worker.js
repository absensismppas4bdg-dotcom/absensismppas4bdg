const CACHE_NAME = 'absensi-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logosmppas4.jpg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(err => console.warn('Cache addAll failed', err))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  try {
    if (e.request.mode === 'navigate' || (e.request.headers.get && e.request.headers.get('accept')?.includes('text/html'))) {
      e.respondWith(fetch(e.request).catch(() => caches.match('/index.html')));
      return;
    }
  } catch (err) { /* ignore */ }

  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request).then(fetchRes => {
        // Cache same-origin successful GET responses
        if (fetchRes && fetchRes.status === 200 && fetchRes.type !== 'opaque' && e.request.method === 'GET') {
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, fetchRes.clone()));
        }
        return fetchRes;
      }).catch(() => caches.match('/logosmppas4.jpg'));
    })
  );
});