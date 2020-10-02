const express = require('express');
const webPush = require('web-push');
const homeRoute = require('./routes/homeRoute');
const serviceworkerRoute = require('./routes/serviceWorkerRoute');

const app = express();
app.use(express.static(__dirname+'/public'))

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());

app.use('/', homeRoute);
app.use('/service_worker', serviceworkerRoute);

app.get('/clean', (req, res) => {
    res.set('Clear-Site-Data', '\"storage\"');
    res.end();
})

app.listen(4000)