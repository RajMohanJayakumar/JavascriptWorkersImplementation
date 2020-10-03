const express = require('express');
const clearDataController = require('../controllers/clearDataController');
const route = express.Router();

route.get('/', clearDataController.setClearSiteDataHeader);

module.exports = route;
