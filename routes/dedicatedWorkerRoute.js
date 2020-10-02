const express = require('express');
const dedicated_worker = require('../controllers/dedicatedWorkerController')

const route = express.Router();

route.get('/', dedicated_worker.renderDedicatedWorker);

module.exports = route;