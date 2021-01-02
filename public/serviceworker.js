const CACHE_NAME = "version-1";
const urlstoCache = ["insex.html", "offline.html"];
const self = this;
/// install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("ayman");

      return cache.addAll(urlstoCache);
    })
  );
});

/// listen for requset
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

/// active the service worker
self.addEventListener("activate", (event) => {
  const cacheWaiteList = [];
  cacheWaiteList.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWaiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
