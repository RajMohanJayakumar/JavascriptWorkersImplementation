
// Registering service worker
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw_image_cache.js',{
            scope:'/service_worker'
        })
        .catch(console.error)
}

const getImageBtn = document.getElementById('get-image');
const imageBaseUrl = 'http://picsum.photos/500?t=';
const imagePreview = document.getElementById('image-preview');
const imageId = document.getElementById('input-url');

getImageBtn.onclick = function(){
    showImagePreview();
}

imageId.onkeypress = function(event){
    if(event.keyCode === 13){
        showImagePreview();
    }
}

function showImagePreview() {
    if(imageId.value){
        imagePreview.src = imageBaseUrl+imageId.value;
    }
}
