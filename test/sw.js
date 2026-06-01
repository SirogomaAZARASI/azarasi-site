const CACHE_NAME = "ita-recorder-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

    .then(cache => cache.addAll(ASSETS))

  );

});

self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys

        .filter(key => key !== CACHE_NAME)

        .map(key => caches.delete(key))

      )

    )

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

    .then(cached => {

      return cached || fetch(event.request);

    })

  );

});