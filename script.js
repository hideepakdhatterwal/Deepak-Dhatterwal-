/*====================================
LOADER
====================================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.transition = "0.6s";

},700);

});

/*====================================
SELECTORS
====================================*/

const menuBtn = document.querySelector(".menu-toggle");

const sidebar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close-btn");

const sidebarLinks = document.querySelectorAll(".sidebar a");

const header = document.querySelector(".header");

/*====================================
OPEN SIDEBAR
====================================*/

menuBtn.addEventListener("click",()=>{

sidebar.classList.add("active");

document.body.style.overflow="hidden";

});

/*====================================
CLOSE SIDEBAR
====================================*/

closeBtn.addEventListener("click",closeSidebar);

function closeSidebar(){

sidebar.classList.remove("active");

document.body.style.overflow="";

}

/*====================================
CLOSE AFTER CLICK
====================================*/

sidebarLinks.forEach(link=>{

link.addEventListener("click",()=>{

closeSidebar();

});

});

/*====================================
CLICK OUTSIDE
====================================*/

document.addEventListener("click",(e)=>{

if(

sidebar.classList.contains("active")

&&

!sidebar.contains(e.target)

&&

!menuBtn.contains(e.target)

){

closeSidebar();

}

});

/*====================================
SMOOTH SCROLL
====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*====================================
HEADER EFFECT
====================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.background="rgba(0,0,0,.92)";

header.style.boxShadow="0 5px 25px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.70)";

header.style.boxShadow="none";

}

});



/*====================================
BACK TO TOP
====================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 400) {

backToTop.classList.add("show");

} else {

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

/*====================================
SCROLL REVEAL
====================================*/

const revealElements = document.querySelectorAll(
".section-heading,.about-wrapper,.profile-grid,.featured-grid,.gallery-grid,.showreel-wrapper,.timeline,.quote-card,.contact-grid,.footer"
);

const revealOnScroll = () => {

const trigger = window.innerHeight * 0.85;

revealElements.forEach((element) => {

const top = element.getBoundingClientRect().top;

if (top < trigger) {

element.classList.add("show");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*====================================
ACTIVE NAVIGATION
====================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(
".desktop-nav a, .mobile-nav a, .sidebar a"
);

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

if (window.scrollY >= sectionTop &&
    window.scrollY < sectionTop + sectionHeight) {

current = section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

if (link.getAttribute("href") === `#${current}`) {

link.classList.add("active");

}

});

});

/*====================================
HERO ENTRANCE
====================================*/

const heroContent = document.querySelector(".hero-content");

window.addEventListener("load", () => {

heroContent.style.opacity = "0";

heroContent.style.transform = "translateY(40px)";

setTimeout(() => {

heroContent.style.transition =
"all .9s ease";

heroContent.style.opacity = "1";

heroContent.style.transform =
"translateY(0)";

}, 400);

});

/*====================================
PARALLAX HERO
====================================*/

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero");

const offset = window.pageYOffset;

hero.style.backgroundPositionY = `${offset * 0.35}px`;

});


/*====================================
GALLERY LIGHTBOX
====================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const lightboxClose = document.querySelector(".lightbox-close");

let currentImage = 0;

/*====================================
OPEN LIGHTBOX
====================================*/

galleryItems.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;

showImage();

});

});

function showImage(){

lightbox.classList.add("active");

lightboxImg.src=galleryItems[currentImage].src;

lightboxImg.alt=galleryItems[currentImage].alt;

document.body.style.overflow="hidden";

}

/*====================================
CLOSE LIGHTBOX
====================================*/

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow="";

}

lightboxClose.addEventListener("click",closeLightbox);

/*====================================
CLICK OUTSIDE
====================================*/

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

/*====================================
ESC KEY
====================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeLightbox();

}

});

/*====================================
KEYBOARD NAVIGATION
====================================*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="ArrowRight"){

currentImage++;

if(currentImage>=galleryItems.length){

currentImage=0;

}

showImage();

}

if(e.key==="ArrowLeft"){

currentImage--;

if(currentImage<0){

currentImage=galleryItems.length-1;

}

showImage();

}

});

/*====================================
TOUCH SWIPE SUPPORT
====================================*/

let touchStartX=0;

let touchEndX=0;

lightbox.addEventListener("touchstart",(e)=>{

touchStartX=e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend",(e)=>{

touchEndX=e.changedTouches[0].screenX;

handleSwipe();

});

function handleSwipe(){

if(touchEndX-touchStartX>60){

currentImage--;

if(currentImage<0){

currentImage=galleryItems.length-1;

}

showImage();

}

if(touchStartX-touchEndX>60){

currentImage++;

if(currentImage>=galleryItems.length){

currentImage=0;

}

showImage();

}

}

/*====================================
IMAGE PRELOAD
====================================*/

galleryItems.forEach((img)=>{

const preload=new Image();

preload.src=img.src;

});


/*====================================
BHAGAVAD GITA QUOTES
====================================*/

const gitaQuote = document.getElementById("gitaQuote");

const quoteMeaning = document.querySelector(".quote-meaning");

const gitaQuotes = [

{
quote:"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
meaning:"You have the right to perform your duty, but never to the fruits of your actions."
},

{
quote:"योगः कर्मसु कौशलम्।",
meaning:"Excellence in action is Yoga."
},

{
quote:"न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
meaning:"There is nothing as purifying as true knowledge."
},

{
quote:"उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
meaning:"Lift yourself by your own efforts. Never degrade yourself."
},

{
quote:"श्रद्धावान् लभते ज्ञानम्।",
meaning:"A person with faith gains true knowledge."
}

];

let quoteIndex = 0;

function rotateQuote(){

if(!gitaQuote || !quoteMeaning) return;

quoteIndex++;

if(quoteIndex >= gitaQuotes.length){

quoteIndex = 0;

}

gitaQuote.style.opacity = "0";

quoteMeaning.style.opacity = "0";

setTimeout(()=>{

gitaQuote.textContent =
gitaQuotes[quoteIndex].quote;

quoteMeaning.textContent =
gitaQuotes[quoteIndex].meaning;

gitaQuote.style.opacity = "1";

quoteMeaning.style.opacity = "1";

},400);

}

setInterval(rotateQuote,8000);

/*====================================
IMAGE LAZY LOADING
====================================*/

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

observer.unobserve(entry.target);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});

/*====================================
SCROLL PROGRESS
====================================*/

const progressBar=document.createElement("div");

progressBar.style.position="fixed";

progressBar.style.top="0";

progressBar.style.left="0";

progressBar.style.height="3px";

progressBar.style.background="#d4af37";

progressBar.style.width="0%";

progressBar.style.zIndex="99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

},{passive:true});

/*====================================
CURRENT YEAR
====================================*/

const copyright=document.querySelector(".copyright");

if(copyright){

copyright.innerHTML=

`© ${new Date().getFullYear()} Deepak Dhatterwal. All Rights Reserved.`;

}

/*====================================
PREVENT DOUBLE CLICK
====================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.pointerEvents="none";

setTimeout(()=>{

btn.style.pointerEvents="auto";

},800);

});

});

/*====================================
CONSOLE MESSAGE
====================================*/

console.log("%cDeepak Dhatterwal Official Portfolio",
"color:#d4af37;font-size:18px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:13px;");

/*====================================
INITIALIZE
====================================*/

document.addEventListener("DOMContentLoaded",()=>{

revealOnScroll();

});

/*====================================
END OF SCRIPT
====================================*/