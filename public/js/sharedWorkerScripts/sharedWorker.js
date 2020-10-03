self.addEventListener('connect', (e) => {
    let port = e.ports[0]

    port.onmessage = (e) => {
        let data = e.data
        if(data.action === 'multiply') {
            port.postMessage(data.values[0]*data.values[1])
        }
    }
})
