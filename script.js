/*====================================================
DEEPAK DHATTERWAL
Official Actor Portfolio
Version 6.0
====================================================*/

"use strict";

/*========================================
SELECTORS
========================================*/

const loader = document.getElementById("loader");
const header = document.getElementById("header");
const progressBar = document.getElementById("progressBar");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const backToTop = document.getElementById("backToTop");

/*========================================
PRELOADER
========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1800);

});

/*========================================
SCROLL PROGRESS
========================================*/

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scroll / height) * 100;

    progressBar.style.width = percent + "%";

});

/*========================================
HEADER
========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});

/*========================================
MOBILE MENU
========================================*/

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/*========================================
SMOOTH MENU CLOSE
========================================*/

document.querySelectorAll(".nav-menu a")

.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

});

});

/*========================================
BACK TO TOP
========================================*/

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.opacity = "1";

backToTop.style.visibility = "visible";

}

else {

backToTop.style.opacity = "0";

backToTop.style.visibility = "hidden";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*====================================================
SMOOTH SCROLL
====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*====================================================
ACTIVE MENU
====================================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*====================================================
SCROLL REVEAL
====================================================*/

const revealElements=document.querySelectorAll(

".section-heading,.featured-card,.about-image,.about-content,.profile-card,.journey-card,.gallery-item,.showreel-wrapper,.skill-card,.imdb-card,.contact-wrapper,.footer"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


/*====================================================
HERO IMAGE PARALLAX
====================================================*/

const heroImage=document.querySelector(".hero-right img");

if(heroImage){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}


/*====================================================
TYPING EFFECT
====================================================*/

const typingText=document.querySelector(".hero-left h2");

if(typingText){

const words=[

"Official Actor",

"Storyteller",

"Artist",

"Available For Casting",

"Living Stories Through Cinema"

];

let word=0;

let letter=0;

let deleting=false;

function type(){

let current=words[word];

typingText.textContent=current.substring(0,letter);

if(!deleting){

letter++;

if(letter>current.length){

deleting=true;

setTimeout(type,1800);

return;

}

}else{

letter--;

if(letter===0){

deleting=false;

word++;

if(word>=words.length){

word=0;

}

}

}

setTimeout(type,deleting?60:100);

}

type();

}

/*======================================================
GALLERY LIGHTBOX
======================================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentImage = 0;

galleryItems.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentImage=index;

showImage();

lightbox.classList.add("active");

document.body.style.overflow="hidden";

});

});

function showImage(){

lightboxImage.src=galleryItems[currentImage].src;

lightboxImage.alt=galleryItems[currentImage].alt;

}

/* Close */

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow="";

}

closeBtn.addEventListener("click",closeLightbox);

/* Next */

nextBtn.addEventListener("click",()=>{

currentImage++;

if(currentImage>=galleryItems.length){

currentImage=0;

}

showImage();

});

/* Previous */

prevBtn.addEventListener("click",()=>{

currentImage--;

if(currentImage<0){

currentImage=galleryItems.length-1;

}

showImage();

});

/* Click Outside */

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

/*======================================================
KEYBOARD
======================================================*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

closeLightbox();

}

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

});

/*======================================================
IMAGE FADE
======================================================*/

galleryItems.forEach(img=>{

img.onload=()=>{

img.style.opacity="1";

img.style.transform="scale(1)";

};

});

/*======================================================
IMAGE HOVER
======================================================*/

galleryItems.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".6s";

});

});

/*======================================================
SHOWREEL VIDEO POPUP
======================================================*/

const playButton=document.querySelector(".play-btn");

const videoPopup=document.querySelector(".video-popup");

const videoFrame=document.querySelector(".video-popup iframe");

const closeVideo=document.querySelector(".video-close");

if(playButton){

playButton.addEventListener("click",()=>{

videoPopup.classList.add("active");

videoFrame.src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1";

document.body.style.overflow="hidden";

});

}

if(closeVideo){

closeVideo.addEventListener("click",()=>{

videoPopup.classList.remove("active");

videoFrame.src="";

document.body.style.overflow="";

});

}

/*======================================================
DYNAMIC QUOTES
======================================================*/

const quoteText=document.getElementById("quoteText");

if(quoteText){

const quotes=[

"Dream big. Stay humble.",

"Discipline creates excellence.",

"Every role deserves honesty.",

"Cinema is the language of emotions.",

"Success belongs to those who never quit.",

"Hard work is the best audition."

];

let quoteIndex=0;

setInterval(()=>{

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quoteText.style.opacity=0;

setTimeout(()=>{

quoteText.textContent=quotes[quoteIndex];

quoteText.style.opacity=1;

},300);

},5000);

}

/*======================================================
CURRENT YEAR
======================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*======================================================
BUTTON RIPPLE
======================================================*/

document.querySelectorAll(".primary-btn,.secondary-btn")

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*======================================================
CUSTOM CURSOR GLOW
======================================================*/

const cursor = document.createElement("div");
cursor.id = "cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/*======================================================
FLOATING GOLD PARTICLES
======================================================*/

const hero=document.querySelector(".hero");

if(hero){

for(let i=0;i<30;i++){

const particle=document.createElement("span");

particle.className="particle";

particle.style.left=Math.random()*100+"%";

particle.style.animationDelay=Math.random()*8+"s";

particle.style.animationDuration=6+Math.random()*6+"s";

hero.appendChild(particle);

}

}

/*======================================================
BUTTON HOVER GLOW
======================================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow="0 0 35px rgba(212,175,55,.45)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="";

});

});

/*======================================================
LAZY IMAGE LOADING
======================================================*/

const lazyImages=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.classList.add("loaded");

observer.unobserve(img);

}

});

});

lazyImages.forEach(img=>observer.observe(img));

/*======================================================
PAGE FADE IN
======================================================*/

window.addEventListener("load",()=>{

document.body.classList.add("page-loaded");

});

/*======================================================
COPYRIGHT YEAR
======================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*======================================================
CONSOLE BRANDING
======================================================*/

console.clear();

console.log(

"%cDeepak Dhatterwal",

"color:#D4AF37;font-size:24px;font-weight:bold;"

);

console.log(

"%cOfficial Actor Portfolio v6.0",

"color:white;font-size:15px;"

);

console.log(

"%cDesigned with ❤️",

"color:#D4AF37;font-size:14px;"

);

