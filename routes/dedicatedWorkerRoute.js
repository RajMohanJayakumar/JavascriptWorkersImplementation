const express = require('express');
const dedicated_worker = require('../controller/dedicated_worker')

const route = express.Router();

route.get('/', dedicated_worker.renderDedicatedWorker);

module.exports = route;