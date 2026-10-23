
/*
 * Club Natación Garagua
 * Service Worker sin almacenamiento de páginas ni reservas.
 * Siempre solicita los archivos a la red.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (
    request.method === "GET" &&
    new URL(request.url).origin === self.location.origin
  ) {
    event.respondWith(
      fetch(request, { cache: "no-store" })
    );
  }
});
