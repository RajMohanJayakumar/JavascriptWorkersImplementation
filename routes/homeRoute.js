const express = require('express');
const homeController = require('../controller/homeController');
const route = express.Router();

route.get('/', homeController.getHome);

module.exports = route;