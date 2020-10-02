// Registering Service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw_background_sync.js', {
            scope: '/background_sync'
        })
        .catch(console.error)
}

let name = document.getElementById('input-1');
let city = document.getElementById('input-2');
let sendButton = document.getElementById('send-button');

// DB initialization
let db = new Dexie('Sync');
db.version(1).stores({
    backgroundSyncTable: `id, name, city, isSynced`
});
db.open();

sendButton.onclick = () => {
    db.backgroundSyncTable.add({id:getRandomString(5), name: name.value, city: city.value, isSynced: false})
    .then(() => {
        if('serviceWorker' in navigator && 'SyncManager' in window){
            navigator.serviceWorker.ready.then(sw => {
                return sw.sync.register('sync-user').catch(console.error)
            })
        }
    })
}

function getRandomString(){
    const strings = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    let randomString = '';
    for(let i=0; i < 5; i++){
        randomString = randomString + strings[Math.round(Math.random()*61)];
    }
    return randomString;
}