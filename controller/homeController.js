exports.getHome = (req, res) => {
    console.log('One')
    res.render('home', {
        title: 'Home',
        description: "This site is precached by Service worker",
    })
}