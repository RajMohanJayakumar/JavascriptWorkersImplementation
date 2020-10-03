exports.renderLocalNotification = (req, res) => {
    res.render('local_notification', {
        title: 'Local Notification',
        description: 'Here notifications are generated locally'
    })
}

exports.renderPushNotification = (req, res) => {
    res.render('push_notification', {
        title:'Push Notification',
        description: 'Here notifications are pushed from the server'
    })
}

exports.pushNotificationToServer = (req, res) => {
    
    const webpush = require('web-push');
    const data = req.body;

    const publicKey = 'BH0qq3x0keUa2ptC64C1_WvBZMv60YJYXUjM0r9PumZcILFRlLoUGVcagF_9xI-RoanOF0b9wOKWehqOk8QFXNQ';
    const privateKey = 'B9jLF-o1OAUEE-MnVRiMl3zzifXooG0gePpS7g42Mzo';

    webpush.setVapidDetails('mailto:test@test.com', publicKey, privateKey);

    const subscription = data.subscription;
    const notificationPayload = data.payload;

    const payload = JSON.stringify(notificationPayload);

    webpush.sendNotification(subscription, payload)
    .catch(console.error)
    res.status(200).json({});
}
