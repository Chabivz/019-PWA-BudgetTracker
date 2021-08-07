const FILES_TO_CACHE = [
  './index.html',
  './css/style.css',
  './js/indexedDB.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './js/index.js',
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  './manifest.json',
];

const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', (event) => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName));
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
      .catch(err => {
        res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
      })
  );
});



self.addEventListener("fetch", function(evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(RUNTIME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      }).catch(err => {
        res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
      })
    );

    return;
  }

  evt.respondWith(
    caches.open(PRECACHE).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});