const CACHE_NAME = "pwa-expenses-cache-v1";
const urlsTocache = ["/", "/index.html", "/style.css", "/script.js", "/manifest.json"];

//Install service worker dan cache file
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>{
            console.log("opened cache");
            return cache.addAll(urlsTocache);
        })
    );
});

//Ambil file dari cache saat offline
self.addEventListener("fetch", (event) =>{
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});