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
                .then(syncData => {
                    sendBulkRequest(syncData) 
                })
                // .then(() => db.backgroundSyncTable.clear())          // to delete the table if all the requests are processed
                .catch(err => console.error('Sync failed'+err))
        }
})

function sendBulkRequest(syncData) {
        const bulkFetchCall = syncData.map((data) => {

            if(data.isSynced) { return; }

            const { id, name, city } = data;

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
            })
            .then(() => db.backgroundSyncTable.put({id, name, city, isSynced:true}));

        });

        return Promise.all(bulkFetchCall);
}
