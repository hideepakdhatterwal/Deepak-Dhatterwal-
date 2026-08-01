/*=========================================================
DEEPAK DHATTERWAL
Official Actor Portfolio v5.0
=========================================================*/

"use strict";

/*=========================================================
SELECTORS
=========================================================*/

const loader = document.getElementById("loader");
const progressBar = document.getElementById("progressBar");
const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backToTop = document.getElementById("backToTop");

/*=========================================================
PRELOADER
=========================================================*/

window.addEventListener("load", () => {

if(loader){

loader.style.opacity="0";

loader.style.visibility="hidden";

setTimeout(()=>{

loader.remove();

},800);

}

});

/*=========================================================
STICKY HEADER
=========================================================*/

window.addEventListener("scroll",()=>{

if(!header) return;

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/*=========================================================
SCROLL PROGRESS
=========================================================*/

window.addEventListener("scroll",()=>{

if(!progressBar) return;

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(winScroll/height)*100;

progressBar.style.width=progress+"%";

});

/*=========================================================
MOBILE MENU
=========================================================*/

if(menuToggle && navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuToggle.classList.toggle("active");

});

}

/*=========================================================
CLOSE MENU
=========================================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

if(navLinks){

navLinks.classList.remove("active");

}

if(menuToggle){

menuToggle.classList.remove("active");

}

});

});

/*=========================================================
BACK TO TOP
=========================================================*/

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>500){

backToTop.style.opacity="1";

backToTop.style.visibility="visible";

}else{

backToTop.style.opacity="0";

backToTop.style.visibility="hidden";

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*=========================================================
SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

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

/*=========================================================
ACTIVE NAVIGATION
=========================================================*/

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

function activeMenu(){

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

}

window.addEventListener("scroll",activeMenu);

/*=========================================================
TYPING EFFECT
=========================================================*/

const typing=document.getElementById("typingText");

if(typing){

const words=[

"Professional Actor",

"Artist",

"Storyteller",

"Performer",

"Dreamer",

"Available For Casting"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

const word=words[wordIndex];

typing.textContent=word.substring(0,charIndex);

if(!deleting){

charIndex++;

if(charIndex>word.length){

deleting=true;

setTimeout(typeEffect,1800);

return;

}

}else{

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(typeEffect,deleting?60:110);

}

typeEffect();

}

/*=========================================================
SCROLL REVEAL
=========================================================*/

const revealItems=document.querySelectorAll(

".section-heading,.about-wrapper,.profile-card,.skill-box,.timeline-item,.gallery-item,.video-card,.imdb-card,.featured-quote,.quote-category,.line-card,.contact-card,.footer"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealItems.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*=========================================================
HERO IMAGE PARALLAX
=========================================================*/

const heroImage=document.querySelector(".hero-image");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

heroImage.style.transform=

`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}


/*=========================================================
GALLERY FILTER
=========================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if(filterButtons.length && galleryItems.length){

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

const filter=button.dataset.filter;

galleryItems.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="scale(1)";

},100);

}else{

item.style.opacity="0";

item.style.transform="scale(.9)";

setTimeout(()=>{

item.style.display="none";

},250);

}

});

});

});

}

/*=========================================================
LIGHTBOX
=========================================================*/

const lightbox=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox img");
const closeBtn=document.querySelector(".lightbox-close");
const prevBtn=document.querySelector(".lightbox-prev");
const nextBtn=document.querySelector(".lightbox-next");

let currentIndex=0;

if(lightbox && lightboxImage){

const images=[...document.querySelectorAll(".gallery-item img")];

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

showImage();

lightbox.classList.add("active");

document.body.style.overflow="hidden";

});

});

function showImage(){

lightboxImage.src=images[currentIndex].src;

lightboxImage.alt=images[currentIndex].alt;

}

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow="";

}

if(closeBtn){

closeBtn.addEventListener("click",closeLightbox);

}

if(nextBtn){

nextBtn.addEventListener("click",()=>{

currentIndex=(currentIndex+1)%images.length;

showImage();

});

}

if(prevBtn){

prevBtn.addEventListener("click",()=>{

currentIndex=(currentIndex-1+images.length)%images.length;

showImage();

});

}

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape") closeLightbox();

if(e.key==="ArrowRight" && nextBtn) nextBtn.click();

if(e.key==="ArrowLeft" && prevBtn) prevBtn.click();

});

}


/*=========================================================
PREMIUM QUOTES SYSTEM
=========================================================*/

const quoteData=[

{
category:"🕉️ Bhagavad Gita",
text:"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
author:"Bhagavad Gita"
},

{
category:"🕉️ Bhagavad Gita",
text:"योगः कर्मसु कौशलम्।",
author:"Bhagavad Gita"
},

{
category:"🎭 Acting",
text:"Acting is living truthfully under imaginary circumstances.",
author:"Sanford Meisner"
},

{
category:"🎭 Acting",
text:"A great performance begins with honesty.",
author:"Deepak Dhatterwal"
},

{
category:"🎬 Cinema",
text:"Every frame tells a story. Every story changes someone.",
author:"Cinema"

},

{
category:"💪 Motivation",

text:"Discipline beats talent when talent doesn't work hard.",

author:"Motivation"

},

{
category:"⭐ Success",

text:"Success is earned one day at a time.",

author:"Mindset"

},

{
category:"❤️ Life",

text:"Respect the journey more than the destination.",

author:"Life"

},

{
category:"🌟 Dream",

text:"Dream big. Stay humble. Keep working.",

author:"Deepak Dhatterwal"

}

];

const quoteCategory=document.getElementById("quoteCategory");

const quoteText=document.getElementById("quoteText");

const quoteAuthor=document.getElementById("quoteAuthor");

let quoteNumber=0;

function updateQuote(){

if(!quoteCategory || !quoteText || !quoteAuthor) return;

const q=quoteData[quoteNumber];

quoteCategory.style.opacity=0;

quoteText.style.opacity=0;

quoteAuthor.style.opacity=0;

setTimeout(()=>{

quoteCategory.textContent=q.category;

quoteText.textContent=q.text;

quoteAuthor.textContent="— "+q.author;

quoteCategory.style.opacity=1;

quoteText.style.opacity=1;

quoteAuthor.style.opacity=1;

},300);

quoteNumber++;

if(quoteNumber>=quoteData.length){

quoteNumber=0;

}

}

/* Random First Quote */

quoteNumber=Math.floor(Math.random()*quoteData.length);

updateQuote();

/* Auto Change */

setInterval(updateQuote,5000);


/*=========================================================
FLOATING GOLD PARTICLES
=========================================================*/

const particlesContainer=document.querySelector(".hero-particles");

if(particlesContainer){

for(let i=0;i<25;i++){

const particle=document.createElement("span");

particle.className="gold-particle";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.animationDelay=Math.random()*8+"s";

particle.style.animationDuration=(5+Math.random()*6)+"s";

particlesContainer.appendChild(particle);

}

}

/*=========================================================
CURSOR GLOW
=========================================================*/

const cursor=document.getElementById("cursorGlow");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}

/*=========================================================
BUTTON RIPPLE
=========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================================
CURRENT YEAR
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

"%cPortfolio Website Loaded Successfully",

"color:#ffffff;font-size:13px;"

);


/*====================================================
CURSOR GLOW
====================================================*/

#cursorGlow{

position:fixed;

width:22px;

height:22px;

border-radius:50%;

background:rgba(212,175,55,.35);

pointer-events:none;

transform:translate(-50%,-50%);

z-index:99999;

filter:blur(2px);

transition:transform .05s linear;

}

/*====================================================
GOLD PARTICLES
====================================================*/

.gold-particle{

position:absolute;

width:6px;

height:6px;

border-radius:50%;

background:var(--primary);

opacity:.5;

animation:particleFloat linear infinite;

}

@keyframes particleFloat{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:.8;

}

100%{

transform:translateY(-180px);

opacity:0;

}

}

/*====================================================
BUTTON RIPPLE
====================================================*/

.btn{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.35);

transform:scale(0);

animation:rippleEffect .6s linear;

pointer-events:none;

}

@keyframes rippleEffect{

to{

transform:scale(4);

opacity:0;

}

}


