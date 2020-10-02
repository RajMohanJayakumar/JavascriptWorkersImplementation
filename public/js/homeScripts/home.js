// const serviceWorker = require('./sw_cache_pages');
if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/js/homeScripts/sw_cache_pages.js')
      .then(reg => {
        console.log('Service worker : Registered')
      })
      .catch(err => {
        console.error(`Error in registering service worker : ${err}`)
      })
  }