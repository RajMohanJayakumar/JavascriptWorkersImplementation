exports.getHome = (req, res) => {
    res.render('home', {
        title: 'Home',
        description: "This site is precached by Service worker",
    })
}