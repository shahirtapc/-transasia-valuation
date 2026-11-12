
const CACHE_NAME = "transasia-valuation-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    self.clients.claim()
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Do not cache Google Apps Script.
  if (
    url.hostname.includes("google.com") ||
    url.hostname.includes("googleusercontent.com")
  ) {
    return;
  }
});
