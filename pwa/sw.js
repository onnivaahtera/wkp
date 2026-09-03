const cacheName = 'hello-pwa';
const filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/ComicRelief-Regular.ttf',
  '/js/main.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        await cache.addAll(filesToCache);
      } catch (error) {
        console.error('Failed to cache app content:', error);
      }
    })()
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || (await fetch(e.request));
      } catch (error) {
        console.error('Failed to fetch resource:', error);
        throw error;
      }
    })()
  );
});
