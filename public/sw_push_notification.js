self.addEventListener('push', (e) => {
    const data = e.data.json();
        self.registration.showNotification(data.title, {
            body: data.body
        })
});

self.addEventListener('install', (e) => self.skipWaiting())
self.addEventListener('activate', (e) => self.clients.claim())
