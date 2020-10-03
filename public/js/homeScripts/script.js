// Registering Service worker
if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw_cache_pages.js', {
      scope: '/'
    })
      .then(reg => {
        console.log('Service worker : Registered')
      })
      .catch(err => {
        console.error(`Error in registering service worker : ${err}`)
      })
  }
  