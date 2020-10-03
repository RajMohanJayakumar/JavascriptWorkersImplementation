const publicKey = 'BH0qq3x0keUa2ptC64C1_WvBZMv60YJYXUjM0r9PumZcILFRlLoUGVcagF_9xI-RoanOF0b9wOKWehqOk8QFXNQ';
let subscription;

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw_push_notification.js', {
        scope: '/notification'
    })
    .then(sw => {
        sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(publicKey),
        }).then(res => {
            subscription = res;
        })
    })
    .catch(console.error);
    
    if(Notification.permission === "default"){
        Notification.requestPermission();
    }
}

let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');
let showNotificationBtn = document.getElementById('show-notification');

showNotificationBtn.addEventListener('click', () => {
    sendNotification()
})

function sendNotification(){
    fetch('/notification/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subscription, payload: { title: input1.value, body: input2.value }}),
    }).catch(console.error);
}

function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
