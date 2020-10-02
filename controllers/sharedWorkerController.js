exports.renderSharedWorker1 = (req, res) => {
    res.render('shared_worker1', {
        title: 'Shared Worker 1',
        description: 'Simple Multiplication using Shared worker'
    })
}

exports.renderSharedWorker2 = (req, res) => {
    res.render('shared_worker2', {
        title: 'Shared Worker 2',
        description: 'Simple Multiplication using Shared worker'
    })
}
