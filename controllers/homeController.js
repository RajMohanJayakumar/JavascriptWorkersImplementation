exports.getHome = (req, res) => {
    res.render('home', {
        title: 'Home',
        description: "Javascript Workers",
    })
}
