self.addEventListener('message', (e) => {
    let data = e.data;

    if(data.action === 'multiply'){
        postMessage(data.values[0]*data.values[1])
    }
})