const { cache } = require("webpack");

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/css/style.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/js/index.js",
]

const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Cleaning the old caches
self.addEventListener("activate", event => {
  const currentCaches = [STATIC_CACHES, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return cacheNames.filter(
          cacheName => !currentCaches.includes(cacheName)
        );
      })
      .then(cachesToDelete => {
        return Promise.all(
          cachesToDelete.map(cacheToDelete => {
            return caches.delete(cacheToDelete)
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  // GET Request are not cached and requested to other origins are not cahced.
  if ( event.request.method !== "GET" ||
  !event.request.url.startsWith(self.location.origin)) 
  {
    event.respondWith(fetch(event.request));
  return;  
}
})