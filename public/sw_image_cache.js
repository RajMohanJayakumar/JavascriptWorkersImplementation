const cacheVersion = 'sw_cached_images';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheVersion)
        .then(() => self.skipWaiting())
    )})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(allCaches => {
                return Promise.all(allCaches.map((cache) => {
                    if(cache !== cacheVersion) {
                        return caches.delete(cache)
                    }
                }))
            })
        .then(res => console.log('Removed unwanted caches'))
        .then(res => self.clients.claim())
        .catch(console.error)
    )})

    self.addEventListener('fetch', (event) => {
        if(!event.request.url.includes('http://picsum.photos/500')) { return; }
            event.respondWith(
                caches.match(event.request)
                .then(res => {

                    if(res){
                        return res;
                    }

                    return fetch(event.request)
                            .then(res => {
                                return caches.open(cacheVersion)
                                    .then(cache => {
                                        const response = res.clone();
                                        return cache.put(event.request, response)
                                    })
                                    .then(() => res)
                            }).catch(console.error)
                })
            )
    })
    