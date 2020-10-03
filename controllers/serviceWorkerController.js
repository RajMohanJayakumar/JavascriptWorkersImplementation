exports.getSW = (req, res) => {
    res.render('service_worker', {
        title: 'Service Worker - Image Caching',
        description: 'Caching images \n Caching Strategy : Cache First'
    })
}
