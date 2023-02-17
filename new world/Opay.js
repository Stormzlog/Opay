var images = [ ];
var currentImage = 0;
var previousImage = 0;

function prevImage(){
    previousImage = currentImage;
    currentImage--;
    currentImage = (currentImage < 0)? images.length - 1 : currentImage;
    viewImage();
}
function nextImage(){
    previousImage = currentImage;
    currentImage++;
    currentImage = (currentImage >= images.length)? 0 : currentImage;
    viewImage();
}
function viewImage(){
    var imageSrc = images[currentImage];
    document.getElementById('mainImage').setAttribute('src', 'images/'+imageSrc);

    // get the image that is currently viewed from the otherimages element
    var imgs = document.getElementsByClassName('galleryImages');
    var currImage  = imgs[currentImage];
    var prevImage  = imgs[previousImage];
    prevImage.style.border = 'none';
    currImage.style.border = '3px solid white';
}
// <img class='galleryImages' src='images/1.jpg'/>

window.addEventListener('load', ()=>{                
    var objs = document.querySelector('#otherImages');
    var htmlContent = "";
    for(var i = 0; i < images.length; i++){
        var currImage = "images/"+images[i];
        htmlContent += `<img class='galleryImages' src='${currImage}'/>`;
    }
    objs.innerHTML = htmlContent;
    viewImage();
});