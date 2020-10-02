exports.renderBackgroundSyncPage = (req, res) => {
    res.render('background_sync', {
        title: 'Background Sync',
        description: 'Posting data to backend with background sync',
    })
}

exports.getDataFromBody = (req, res) => {
    console.log('Hey')
    console.log(req.body);
    res.status(200).send();
}
