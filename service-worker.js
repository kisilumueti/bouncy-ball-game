const CACHE_NAME = "bouncy-ball-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/ball-icon-192.png",
  "./icons/ball-icon-512.png",
  "./styles.css", // Add your CSS file if applicable
  "./script.js",  // Add your JS file if applicable
  "./https://www.bensound.com/bensound-music/bensound-creativeminds.mp3" // External assets
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
