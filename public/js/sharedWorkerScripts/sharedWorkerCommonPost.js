const ports = [];
self.addEventListener("connect", function (e) {
    const port = e.ports[0];
    ports.push(port);

    port.addEventListener("message", function (e) {
        for (var i = 0; i < ports.length; i++) {
            ports[i].postMessage(`Hello ${e.data}`);
        }
    }, true);

    port.start();

}, true);