/*=========================================================
DEEPAK DHATTERWAL
OFFICIAL ACTOR PORTFOLIO
Version 4.0
=========================================================*/

/*=========================
PRELOADER
=========================*/

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 2500);

});

/*=========================
STICKY HEADER
=========================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 80) {

header.classList.add("scrolled");

} else {

header.classList.remove("scrolled");

}

});

/*=========================
SCROLL PROGRESS BAR
=========================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress =
(scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});

/*=========================
MOBILE MENU
=========================*/

const menuToggle =
document.getElementById("menuToggle");

const navLinks =
document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

menuToggle.classList.toggle("open");

});

/*=========================
CLOSE MENU AFTER CLICK
=========================*/

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

menuToggle.classList.remove("open");

});

});


/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================================
TYPING EFFECT
=========================================================*/

const typingText=document.getElementById("typingText");

const words=[

"Actor",

"Artist",

"Storyteller",

"Performer",

"Dreamer",

"Creative Soul",

"Screen Performer",

"Passionate Actor"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typingText.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1800);

return;

}

}else{

typingText.textContent=currentWord.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/*=========================================================
HERO IMAGE PARALLAX
=========================================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

if(heroImage){

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

}

});



/*=========================================================
PREMIUM GALLERY LIGHTBOX
=========================================================*/

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeBtn =
document.querySelector(".lightbox-close");

const prevBtn =
document.querySelector(".lightbox-prev");

const nextBtn =
document.querySelector(".lightbox-next");

const currentImage =
document.getElementById("currentImage");

const totalImages =
document.getElementById("totalImages");

let currentIndex = 0;

totalImages.textContent = galleryImages.length;

/*=========================
OPEN LIGHTBOX
=========================*/

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage();

lightbox.classList.add("active");

document.body.style.overflow="hidden";

});

});

/*=========================
SHOW IMAGE
=========================*/

function showImage(){

lightboxImage.src=

galleryImages[currentIndex].src;

lightboxImage.alt=

galleryImages[currentIndex].alt;

currentImage.textContent=currentIndex+1;

}

/*=========================
NEXT IMAGE
=========================*/

nextBtn.addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=galleryImages.length){

currentIndex=0;

}

showImage();

});

/*=========================
PREVIOUS IMAGE
=========================*/

prevBtn.addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=

galleryImages.length-1;

}

showImage();

});

/*=========================
CLOSE
=========================*/

closeBtn.addEventListener("click",closeLightbox);

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow="auto";

}

/*=========================
KEYBOARD SUPPORT
=========================*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active"))

return;

if(e.key==="ArrowRight"){

nextBtn.click();

}

if(e.key==="ArrowLeft"){

prevBtn.click();

}

if(e.key==="Escape"){

closeLightbox();

}

});


/*=========================================================
PREMIUM QUOTES
=========================================================*/

const quotes=[

{
icon:"🕉️",
title:"Bhagavad Gita",
text:"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
author:"Bhagavad Gita"
},

{
icon:"🕉️",
title:"Bhagavad Gita",
text:"योगः कर्मसु कौशलम्।",
author:"Bhagavad Gita"
},

{
icon:"🕉️",
title:"Bhagavad Gita",
text:"समत्वं योग उच्यते।",
author:"Bhagavad Gita"
},

{
icon:"🎭",
title:"Acting",
text:"Acting is living truthfully under imaginary circumstances.",
author:"Sanford Meisner"
},

{
icon:"🎬",
title:"Cinema",
text:"Every role is an opportunity to change someone's perspective.",
author:"Actor's Journey"
},

{
icon:"🎥",
title:"Performance",
text:"The camera records honesty, not perfection.",
author:"Cinema"

},

{
icon:"🌟",
title:"Dream",

text:"Dream big. Stay humble. Keep working.",

author:"Mindset"

},

{
icon:"🔥",
title:"Success",

text:"Discipline will take you where motivation cannot.",

author:"Success"

},

{
icon:"💪",
title:"Motivation",

text:"Success belongs to those who refuse to quit.",

author:"Motivation"

},

{
icon:"❤️",
title:"Life",

text:"Your story is your greatest strength.",

author:"Life"

},

{
icon:"⭐",
title:"Believe",

text:"Believe in yourself before the world does.",

author:"Self Belief"

},

{
icon:"🎬",
title:"Audition",

text:"Every audition is a lesson, every rejection is preparation.",

author:"Actor"

},

{
icon:"🎭",
title:"Emotion",

text:"Great actors don't pretend, they believe.",

author:"Performance"

},

{
icon:"🏆",
title:"Excellence",

text:"Excellence is created one day at a time.",

author:"Growth"

}

];

/*=========================================================
QUOTE ELEMENTS
=========================================================*/

const quoteIcon=document.querySelector(".quote-icon");

const quoteTitle=document.getElementById("quoteTitle");

const quoteText=document.getElementById("quoteText");

const quoteAuthor=document.getElementById("quoteAuthor");

let quoteIndex=0;

/*=========================================================
CHANGE QUOTE
=========================================================*/

function changeQuote(){

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

const q=quotes[quoteIndex];

quoteIcon.innerHTML=q.icon;

quoteTitle.innerHTML=q.title;

quoteText.innerHTML=q.text;

quoteAuthor.innerHTML="— "+q.author;

}

/*=========================================================
AUTO CHANGE
=========================================================*/

setInterval(changeQuote,5000);

/*=========================================================
FIRST RANDOM QUOTE
=========================================================*/

quoteIndex=Math.floor(Math.random()*quotes.length);

changeQuote();


/*=========================================================
SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements =
document.querySelectorAll(

".section-heading,.about-wrapper,.timeline-item,.gallery-item,.showreel-wrapper,.quote-card,.contact-wrapper,.footer-top"

);

const revealOnScroll = () => {

const trigger =
window.innerHeight * 0.85;

revealElements.forEach((item)=>{

const top =
item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}else{

item.classList.remove("active");

}

});

};

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*=========================================================
BACK TO TOP
=========================================================*/

const backTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

backTop.style.opacity="1";

backTop.style.visibility="visible";

}else{

backTop.style.opacity="0";

backTop.style.visibility="hidden";

}

});

backTop.addEventListener("click",(e)=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================================
HEADER ACTIVE
=========================================================*/

const sectionsAll =
document.querySelectorAll("section");

const navAll =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let currentSection="";

sectionsAll.forEach(sec=>{

const sectionTop =
sec.offsetTop-150;

const sectionHeight =
sec.offsetHeight;

if(window.scrollY>=sectionTop){

currentSection=sec.getAttribute("id");

}

});

navAll.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+currentSection

){

link.classList.add("active");

}

});

});

/*=========================================================
IMAGE HOVER TILT
=========================================================*/

document.querySelectorAll(

".gallery-item"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x/rect.width-.5)*12;

const rotateX=(y/rect.height-.5)*-12;

card.style.transform=

`perspective(900px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

/*=========================================================
FLOATING GOLD PARTICLES
=========================================================*/

const hero =
document.querySelector(".hero");

for(let i=0;i<20;i++){

const dot=
document.createElement("span");

dot.className="gold-particle";

dot.style.left=Math.random()*100+"%";

dot.style.animationDelay=Math.random()*8+"s";

dot.style.animationDuration=
6+Math.random()*8+"s";

hero.appendChild(dot);

}
/*=========================================================
CURSOR GLOW
=========================================================*/

const cursor=document.createElement("div");

cursor.className="cursor-glow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/*=========================================================
DAY / NIGHT GREETING
=========================================================*/

const hour=new Date().getHours();

const welcome=document.querySelector(".welcome-text");

if(welcome){

if(hour<12){

welcome.innerHTML="GOOD MORNING • WELCOME";

}

else if(hour<17){

welcome.innerHTML="GOOD AFTERNOON • WELCOME";

}

else{

welcome.innerHTML="GOOD EVENING • WELCOME";

}

}

/*=========================================================
SECTION PARALLAX
=========================================================*/

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

document.querySelectorAll("section").forEach(section=>{

section.style.backgroundPositionY=

scroll*0.15+"px";

});

});

/*=========================================================
BUTTON RIPPLE
=========================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";

circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/*=========================================================
COPYRIGHT YEAR
=========================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================================================
PERFORMANCE
=========================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});

/*=========================================================
CONSOLE MESSAGE
=========================================================*/

console.log(

"%cDeepak Dhatterwal | Official Actor",

"color:#D4AF37;font-size:18px;font-weight:bold;"

);

console.log(

"%cWebsite Developed with Premium Cinematic UI",

"color:white;font-size:14px;"

);

