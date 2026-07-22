const CACHE_NAME = 'verificabet-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'templates.js',
  'database.js',
  'legal_data.js',
  'pirata_data.js',
  'anuncios.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
