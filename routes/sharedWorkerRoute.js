const express = require('express');
const route = express.Router();
const sharedWorkerController = require('../controllers/sharedWorkerController');

route.get('/1', sharedWorkerController.renderSharedWorker1);
route.get('/2', sharedWorkerController.renderSharedWorker2);

module.exports = route;
