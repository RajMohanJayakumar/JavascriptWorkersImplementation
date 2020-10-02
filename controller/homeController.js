exports.getHome = (req, res) => {
    console.log('One')
    res.render('home', {
        title: 'Home'
    })
}