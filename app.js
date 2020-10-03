const express = require('express');

const homeRoute = require('./routes/homeRoute');
const serviceWorkerRoute = require('./routes/serviceWorkerRoute');
const dedicatedWorkerRoute = require('./routes/dedicatedWorkerRoute');
const sharedWorkerRoute = require('./routes/sharedWorkerRoute');
const backgroundSyncRoute = require('./routes/backgroundSyncRoute');
const notificationRoute = require('./routes/notificationRoute');
const clearDataRoute = require('./routes/clearDataRoute');

const app = express();
app.use(express.json());
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', homeRoute);
app.use('/service_worker', serviceWorkerRoute);
app.use('/dedicated_worker', dedicatedWorkerRoute);
app.use('/shared_worker', sharedWorkerRoute);
app.use('/background_sync', backgroundSyncRoute);
app.use('/notification', notificationRoute);
app.use('/clean', clearDataRoute);

//To accept cross origin requests
/* app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Add other methods here
    res.send();
}); */

app.listen(4000)
