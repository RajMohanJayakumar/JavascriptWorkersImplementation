const express = require('express');
const webPush = require('web-push');
const homeRoute = require('./routes/homeRoute');

const app = express();

app.use(express.static(__dirname+'/public'))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());

app.use('/', homeRoute);

app.listen(4000)