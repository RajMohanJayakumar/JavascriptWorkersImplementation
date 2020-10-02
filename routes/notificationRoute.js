const express = require('express');
const notificationController = require('../controllers/notificationController');

const route = express.Router();

route.get('/local', notificationController.renderLocalNotification);
route.get('/push', notificationController.renderPushNotification);

route.post('/send', notificationController.pushNotificationToServer);

module.exports = route;
