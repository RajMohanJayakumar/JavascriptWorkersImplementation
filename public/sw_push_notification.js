self.addEventListener('push', (e) => {
    const data = e.data.json();

    self.registration.showNotification(data.title, {
        body: data.body
    })
});

self.addEventListener('install', (e) => e.waitUntil(self.skipWaiting()))
self.addEventListener('activate', (e) =>e.waitUntil(self.clients.claim()))
