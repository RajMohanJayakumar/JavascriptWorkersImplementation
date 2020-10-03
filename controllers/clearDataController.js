exports.setClearSiteDataHeader = (req, res) => {
    res.set('Clear-Site-Data', '\"storage\"')
    .status(204)
    .send();
}