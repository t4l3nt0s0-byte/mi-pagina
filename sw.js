/* Control de Gastos Hormiga — Service Worker (offline) · v1 */
const CACHE = 'gastos-hormiga-v4';
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon.jpeg',
  './banner-fesc.jpeg',
  './posgrado-unam.jpeg',
  './lib/chart.umd.js',
  './lib/html2canvas.min.js',
  './lib/jspdf1.min.js',
  './lib/html2pdf.js',
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.allSettled(CORE.map(u => c.add(u)))).then(() => self.skipWaiting())
  );
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html').then(cached =>
        cached || fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
          return res;
        }).catch(() => caches.match('./index.html'))
      )
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(hit =>
      hit || fetch(req).then(res => {
        try {
          if (res && res.status === 200 && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          }
        } catch (_) {}
        return res;
      }).catch(() => hit)
    )
  );
});
