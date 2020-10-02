const express = require('express');
const route = express.Router();

const serviceWorkerController = require('../controller/serviceWorkerController');

route.get('/', serviceWorkerController.getSW);

module.exports = route;

