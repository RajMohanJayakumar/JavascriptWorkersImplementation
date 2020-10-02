const express = require('express');
const route = express.Router();

const serviceWorkerController = require('../controllers/serviceWorkerController');

route.get('/', serviceWorkerController.getSW);

module.exports = route;

