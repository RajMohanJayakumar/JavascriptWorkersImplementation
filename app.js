const express = require('express');
const webPush = require('web-push');
const homeRoute = require('./routes/homeRoute');
const serviceWorkerRoute = require('./routes/serviceWorkerRoute');
const dedicatedWorkerroute = require('./routes/dedicatedWorkerRoute')

const app = express();
app.use(express.static(__dirname+'/public'))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());

app.use('/', homeRoute);
app.use('/service_worker', serviceWorkerRoute);
app.use('/dedicated_worker', dedicatedWorkerroute);

app.get('/clean', (req, res) => {
    res.set('Clear-Site-Data', '\"storage\"');
    res.end();
})

app.listen(4000)