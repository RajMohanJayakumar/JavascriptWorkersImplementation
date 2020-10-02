self.importScripts("https://unpkg.com/dexie@3.0.0-rc.7/dist/dexie.js");

const db = new Dexie('Sync');
db.version(1).stores({
    backgroundSyncTable: `id, name, city, isSynced`
});
db.open();

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim())
})

self.addEventListener('sync', (e) => {
        if(e.tag === 'sync-user'){
            db.backgroundSyncTable.toArray()
                .then(val => {
                    return sendBulkRequest(val)
                })
                // .then(() => db.backgroundSyncTable.clear())          // to delete the table if all the requests are processed
                .catch(err => console.error('Sync failed'+err))
        }
})

function sendBulkRequest(values) {
    return new Promise((res, rej) => {
        const bulkFetchCall = values.map(element => {
            if(element.isSynced) { return; }
            const { id, name, city } = element;
            return fetch('/background_sync/postdata', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    name,
                    city,
                })
            }).then(() => db.backgroundSyncTable.put({id, name, city, isSynced:true}))
        });

        Promise.all(bulkFetchCall)
        .then(() => res(''))
        .catch((err) => { console.log(err); rej('');})
    })
}
