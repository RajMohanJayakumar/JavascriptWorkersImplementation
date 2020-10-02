const express = require('express');
const backgroundSyncController = require('../controller/backgroundSyncController')
const route = express.Router();

route.get('/', backgroundSyncController.renderBackgroundSyncPage);
route.post('/postdata', backgroundSyncController.getDataFromBody);

module.exports = route;
