exports.getHome = (req, res) => {
    res.render('home', {
        title: 'Home',
        description: "Web Workers",
    })
}