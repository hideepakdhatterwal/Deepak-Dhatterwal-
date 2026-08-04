/*=========================================
Deepak Dhatterwal Official Website
Gallery.js Part 1
=========================================*/

// =====================================
// Gallery Lightbox
// =====================================

const gallery = document.querySelectorAll(".galleryGrid img");

const lightBox = document.createElement("div");
lightBox.id = "imageViewer";

const preview = document.createElement("img");

const closeBtn = document.createElement("span");
closeBtn.innerHTML = "&times;";

const nextBtn = document.createElement("button");
nextBtn.innerHTML = "&#10095;";

const prevBtn = document.createElement("button");
prevBtn.innerHTML = "&#10094;";

nextBtn.id = "nextImage";
prevBtn.id = "prevImage";
closeBtn.id = "closeImage";

lightBox.appendChild(closeBtn);
lightBox.appendChild(prevBtn);
lightBox.appendChild(preview);
lightBox.appendChild(nextBtn);

document.body.appendChild(lightBox);

let currentImage = 0;

// =====================================
// Open Image
// =====================================

function showImage(index){

currentImage = index;

preview.src = gallery[currentImage].src;

lightBox.style.display = "flex";

}

// =====================================
// Click Images
// =====================================

gallery.forEach((image,index)=>{

image.addEventListener("click",()=>{

showImage(index);

});

});

// =====================================
// Close
// =====================================

closeBtn.onclick=()=>{

lightBox.style.display="none";

};

// =====================================
// Next
// =====================================

nextBtn.onclick=()=>{

currentImage++;

if(currentImage>=gallery.length){

currentImage=0;

}

showImage(currentImage);

};

// =====================================
// Previous
// =====================================

prevBtn.onclick=()=>{

currentImage--;

if(currentImage<0){

currentImage=gallery.length-1;

}

showImage(currentImage);

};

// =====================================
// ESC Key
// =====================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightBox.style.display="none";

}

});

// =====================================
// Arrow Keys
// =====================================

document.addEventListener("keydown",(e)=>{

if(lightBox.style.display==="flex"){

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

}

});

/*=========================================
Gallery.js Part 2
Mobile Swipe + Zoom + Slideshow
=========================================*/

// =====================================
// Image Counter
// =====================================

const counter = document.createElement("div");

counter.id = "imageCounter";

lightBox.appendChild(counter);

function updateCounter(){

counter.innerHTML=(currentImage+1)+" / "+gallery.length;

}

const oldShowImage=showImage;

showImage=function(index){

oldShowImage(index);

updateCounter();

};



// =====================================
// Double Click Zoom
// =====================================

let zoom=false;

preview.addEventListener("dblclick",()=>{

if(!zoom){

preview.style.transform="scale(2)";

preview.style.cursor="zoom-out";

zoom=true;

}else{

preview.style.transform="scale(1)";

preview.style.cursor="zoom-in";

zoom=false;

}

});



// =====================================
// Auto Slideshow
// =====================================

let slideShow;

function startSlideShow(){

slideShow=setInterval(()=>{

nextBtn.click();

},4000);

}

function stopSlideShow(){

clearInterval(slideShow);

}

lightBox.addEventListener("mouseenter",stopSlideShow);

lightBox.addEventListener("mouseleave",startSlideShow);



// =====================================
// Mobile Swipe
// =====================================

let startX=0;

preview.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

preview.addEventListener("touchend",(e)=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>60){

nextBtn.click();

}

if(endX-startX>60){

prevBtn.click();

}

});



// =====================================
// Image Preload
// =====================================

gallery.forEach(img=>{

const image=new Image();

image.src=img.src;

});



// =====================================
// Open Animation
// =====================================

lightBox.addEventListener("transitionend",()=>{

preview.style.opacity="1";

});

preview.style.transition=".4s";



// =====================================
// Start Counter
// =====================================

updateCounter();



// =====================================
// Start Slideshow
// =====================================

startSlideShow();



