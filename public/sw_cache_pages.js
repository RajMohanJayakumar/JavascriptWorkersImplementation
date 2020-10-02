// Service worker for pre-caching the required pages

const cacheName = 'sw_cached_pages';

self.addEventListener('install', (e) => {
    e.waitUntil(
                                                                                                                // caches
                                                                                                                // .open(cacheName) 
    preCaching()
        .then(() => self.skipWaiting())
        .catch(console.error)
                                                                                                                // self.skipWaiting()
    );
})

function preCaching(){
    return new Promise ((res, rej) => {
        caches
        .open(cacheName)
        .then(cache => {
            cache.addAll([
                    '/',
                    '/service_worker',
                    '/dedicated_worker',
                    '/shared_worker/1',
                    '/shared_worker/2',
                    '/background_sync',
                    '/notification/local', 
                    '/notification/push', 
                    '/stylesheets/style.css',
                ])
        })
        .then(response => res(response))
        .catch(response => rej(response));
    });
}

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName && cache !== 'sw_cached_images') {         // 'sw_cached_images is an another cache is in use 
                        return caches.delete(cache)
                    }
                })
            )
            .then(res => self.clients.claim())
        })
    )
})

self.addEventListener('fetch', e => {
    if(e.request.url.includes('clean')) {
        return;
    }
    e.respondWith(cacheFirst(e.request)); // Can be switched between network first and cache first algorithms
})

function networkFirst(request){
    if(!navigator.onLine){
        return caches.match(request)
    }

    return fetch(request)
                .then(res => {
                    let resClone = res.clone();
                    caches.open(cacheName).then(cache => cache.put(request, resClone))
                    return res;
                });
}

function cacheFirst(request) {
    console.log('cc')
    return caches.match(request)
                .then(cache => {
                    if(cache){
                        return cache;
                    }

                    return fetch(request)
                        .then(res => {
                            let resClone = res.clone();
                            return caches.open(cacheName)
                            .then(cache => cache.put(request, resClone))
                            .then(res => res);
                        })
                })
        .catch(() => caches.match(request));
}
