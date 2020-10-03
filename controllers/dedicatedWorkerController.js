exports.renderDedicatedWorker = (req, res) => {
    res.render('dedicated_worker', {
        title: 'Dedicated Worker',
        description: 'Simple Multiplication using dedicated worker'
    });
}
