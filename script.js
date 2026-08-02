/*======================================================
DEEPAK DHATTERWAL
Official Actor Website
======================================================*/

"use strict";

/*==========================================
SELECTORS
==========================================*/

const loader = document.getElementById("loader");

const header = document.getElementById("header");

const progressBar = document.getElementById("scroll-progress");

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

const backToTop = document.getElementById("backToTop");

/*==========================================
LOADER
==========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

    }, 2500);

});

/*==========================================
HEADER
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==========================================
SCROLL PROGRESS
==========================================*/

window.addEventListener("scroll", () => {

    const scrollTop =

        document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==========================================
MOBILE MENU
==========================================*/

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/*==========================================
MENU AUTO CLOSE
==========================================*/

document

.querySelectorAll(".nav-menu a")

.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

});

});

/*==========================================
SMOOTH SCROLL
==========================================*/

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==========================================
BACK TO TOP
==========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}

else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*======================================================
ACTIVE NAVIGATION
======================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*======================================================
SCROLL REVEAL
======================================================*/

const revealItems = document.querySelectorAll(

".section-title,.about-wrapper,.journey-card,.portfolio-item,.showreel-wrapper,.contact-wrapper,.footer"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*======================================================
GALLERY LIGHTBOX
======================================================*/

const galleryImages = document.querySelectorAll(".portfolio-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.querySelector(".lightbox-close");

const prevButton = document.querySelector(".lightbox-prev");

const nextButton = document.querySelector(".lightbox-next");

let currentImage = 0;

function openLightbox(index){

currentImage = index;

lightboxImage.src = galleryImages[index].src;

lightbox.classList.add("active");

document.body.style.overflow = "hidden";

}

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

openLightbox(index);

});

});

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow = "";

}

closeButton.addEventListener("click",closeLightbox);

function nextImage(){

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

lightboxImage.src=galleryImages[currentImage].src;

}

function previousImage(){

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

lightboxImage.src=galleryImages[currentImage].src;

}

nextButton.addEventListener("click",nextImage);

prevButton.addEventListener("click",previousImage);

/*======================================================
KEYBOARD SUPPORT
======================================================*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

closeLightbox();

}

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

previousImage();

}

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

/*======================================================
SHOWREEL VIDEO POPUP
======================================================*/

const playButton = document.getElementById("playVideo");
const videoPopup = document.getElementById("videoPopup");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

/*
Replace YOUR_YOUTUBE_VIDEO_ID
with your official showreel ID
*/

const showreelURL =
"https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";

if(playButton){

playButton.addEventListener("click",()=>{

videoPopup.classList.add("active");

videoFrame.src = showreelURL;

document.body.style.overflow="hidden";

});

}

function closeVideoPopup(){

videoPopup.classList.remove("active");

videoFrame.src="";

document.body.style.overflow="";

}

closeVideo.addEventListener("click",closeVideoPopup);

videoPopup.addEventListener("click",(e)=>{

if(e.target===videoPopup){

closeVideoPopup();

}

});

/*======================================================
EMAILJS
======================================================*/

emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        this

    ).then(function(){

        formStatus.textContent = "✅ Your inquiry has been sent successfully.";

        formStatus.style.color = "#4CAF50";

        btnText.textContent = "Message Sent";

        form.reset();

        setTimeout(()=>{

            btnText.textContent = "Send Inquiry";
            submitBtn.disabled = false;
            formStatus.textContent = "";

        },3000);

    }).catch(function(error){

        console.error(error);

        formStatus.textContent = "❌ Failed to send message. Please try again.";

        formStatus.style.color = "#ff4d4d";

        btnText.textContent = "Send Inquiry";

        submitBtn.disabled = false;

    });

});

/*======================================================
IMAGE LAZY ANIMATION
======================================================*/

const images=document.querySelectorAll("img");

const imageObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

/*======================================================
PERFORMANCE
======================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("page-loaded");

});

/*======================================================
COPYRIGHT YEAR
======================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=

new Date().getFullYear();

}

/*======================================================
CONSOLE BRANDING
======================================================*/

console.clear();

console.log(

"%cDeepak Dhatterwal",

"font-size:22px;color:#c8a45d;font-weight:bold"

);

console.log(

"%cOfficial Actor Website",

"font-size:14px;color:white"

);
/*==================================
ACTING QUOTES
==================================*/

const actingQuotes=[

"Acting is not pretending. It is living truthfully.",

"The camera captures truth, not performance.",

"Every audition is one step closer to success.",

"An actor first learns to observe, then to perform.",

"The strongest dialogue is spoken through the eyes.",

"Discipline creates confidence. Confidence creates great performances.",

"Every rejection prepares you for the perfect role.",

"Real acting begins where imitation ends.",

"Every character changes the actor forever.",

"The audience remembers emotions, not dialogues.",

"Performance comes from preparation, not luck.",

"Success belongs to actors who never stop learning.",

"Cinema respects honesty more than perfection.",

"A great actor lives every moment truthfully.",

"Dream big. Perform bigger."

];

const acting=document.getElementById("actingQuote");

let i=Math.floor(Math.random()*actingQuotes.length);

function changeQuote(){

acting.style.opacity=0;

acting.style.transform="translateY(15px)";

acting.style.filter="blur(5px)";

setTimeout(()=>{

acting.innerHTML="❝ "+actingQuotes[i]+" ❞";

acting.style.opacity=1;

acting.style.transform="translateY(0)";

acting.style.filter="blur(0px)";

i++;

if(i>=actingQuotes.length){

i=0;

}

},500);

}

changeQuote();

setInterval(changeQuote,3500);

/*==================================
GEETA QUOTES
==================================*/

const geetaQuotes=[

"🕉️ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। 🕉️",

"🕉️ जो हुआ अच्छा हुआ, जो हो रहा है अच्छा हो रहा है, जो होगा वह भी अच्छा होगा। 🕉️",

"🕉️ परिवर्तन ही संसार का शाश्वत नियम है। 🕉️",

"🕉️ आत्मा न जन्म लेती है और न कभी मरती है। 🕉️",

"🕉️ अपने कर्तव्य को पूरी निष्ठा से निभाओ। 🕉️",

"🕉️ मनुष्य स्वयं अपना मित्र भी है और स्वयं अपना शत्रु भी। 🕉️",

"🕉️ धैर्य सबसे बड़ी शक्ति है। 🕉️",

"🕉️ फल की चिंता मत करो, कर्म करते रहो। 🕉️",

"🕉️ क्रोध से बुद्धि का नाश होता है। 🕉️",

"🕉️ भय वहीं समाप्त होता है जहाँ ज्ञान प्रारम्भ होता है। 🕉️",

"🕉️ संयम ही सच्ची विजय है। 🕉️",

"🕉️ सच्चा सुख भीतर की शांति में है। 🕉️",

"🕉️ जो स्वयं पर विजय पा लेता है वही सबसे बड़ा विजेता है। 🕉️",

"🕉️ ईश्वर सदैव कर्मयोगी का साथ देता है। 🕉️",

"🕉️ जीवन का उद्देश्य केवल सफलता नहीं, धर्मपूर्वक कर्म करना है। 🕉️"

];

document.getElementById("geetaTicker").innerHTML=

geetaQuotes.join(" &nbsp;&nbsp;&nbsp; ✦ &nbsp;&nbsp;&nbsp; ");


/*==================================
ACTING QUOTES
==================================*/

const actingQuotes=[

"Every great actor first becomes a great observer.",

"The camera captures truth, not performance.",

"Every audition is one step closer to success.",

"The strongest dialogue is spoken through the eyes.",

"Discipline creates unforgettable performances.",

"Real acting begins where imitation ends.",

"Confidence comes from preparation.",

"The audience remembers emotions, not dialogues.",

"Every rejection prepares you for the perfect role.",

"Cinema rewards honesty more than perfection.",

"Dream. Prepare. Perform.",

"Never stop learning. Never stop performing."

];

const acting=document.getElementById("actingQuote");

let current=0;

function changeQuote(){

acting.style.opacity="0";

acting.style.transform="translateY(15px)";

setTimeout(()=>{

acting.innerHTML="❝ "+actingQuotes[current]+" ❞";

acting.style.opacity="1";

acting.style.transform="translateY(0)";

current++;

if(current>=actingQuotes.length){

current=0;

}

},500);

}

changeQuote();

setInterval(changeQuote,3500);

/*==================================
GEETA QUOTES
==================================*/

const geetaQuotes=[

"ॐ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। ॐ",

"ॐ फल की चिंता मत करो, कर्म करते रहो। ॐ",

"ॐ परिवर्तन ही संसार का शाश्वत नियम है। ॐ",

"ॐ धैर्य ही सबसे बड़ी शक्ति है। ॐ",

"ॐ अपने कर्तव्य को पूरी निष्ठा से निभाओ। ॐ",

"ॐ मनुष्य स्वयं अपना मित्र भी है और स्वयं अपना शत्रु भी। ॐ",

"ॐ क्रोध से बुद्धि का नाश होता है। ॐ",

"ॐ आत्मा न जन्म लेती है और न कभी मरती है। ॐ",

"ॐ संयम ही सच्ची विजय है। ॐ",

"ॐ ज्ञान से बड़ा कोई धन नहीं। ॐ",

"ॐ स्वयं पर विजय ही सबसे बड़ी विजय है। ॐ",

"ॐ सच्चा सुख भीतर की शांति में है। ॐ"

];

document.getElementById("geetaTicker").innerHTML=

geetaQuotes.join("&nbsp;&nbsp;&nbsp; ✦ &nbsp;&nbsp;&nbsp;");

<script>

/* ==========================================
   PREMIUM ACTING QUOTES
========================================== */

const actingQuotes = [

"An actor never pretends; he lives the truth of another soul.",

"The eyes reveal what words cannot express.",

"Every audition is another step toward your destiny.",

"Discipline is the silent partner of every great performance.",

"The camera captures honesty, not exaggeration.",

"A great actor first becomes a great observer.",

"Real acting begins where imitation ends.",

"The audience remembers emotions, not dialogues.",

"Every rejection prepares you for the perfect opportunity.",

"Success belongs to those who continue after failure.",

"The strongest performance comes from genuine emotions.",

"Confidence grows from preparation, not luck.",

"Every character teaches a new way of living.",

"Cinema rewards truth more than perfection.",

"The smallest expression can create the biggest impact.",

"Acting is the art of making imagination believable.",

"Talent opens the door, discipline keeps it open.",

"Every role changes the actor forever.",

"A performer never stops learning.",

"The best actor is the one who never stops observing.",

"Live every scene as if it is your last.",

"Great performances are remembered for honesty.",

"Patience is an actor's greatest strength.",

"Dream. Believe. Perform.",

"Your next role may change your entire life."

];

const acting = document.getElementById("actingQuote");

let current = Math.floor(Math.random()*actingQuotes.length);

function changeQuote(){

acting.style.opacity="0";
acting.style.filter="blur(5px)";

setTimeout(()=>{

acting.innerHTML="❝ "+actingQuotes[current]+" ❞";

acting.style.opacity="1";
acting.style.filter="blur(0px)";

current++;

if(current>=actingQuotes.length){

current=0;

}

},500);

}

changeQuote();

setInterval(changeQuote,3500);


/* ==========================================
   BHAGAVAD GITA QUOTES
========================================== */

const geetaQuotes=[

"ॐ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। ॐ",

"ॐ अपने कर्म पर ध्यान दो, फल स्वयं समय देगा। ॐ",

"ॐ परिवर्तन ही संसार का शाश्वत नियम है। ॐ",

"ॐ धैर्य सबसे बड़ी शक्ति है। ॐ",

"ॐ आत्मा न जन्म लेती है और न कभी मरती है। ॐ",

"ॐ क्रोध बुद्धि का नाश करता है। ॐ",

"ॐ मनुष्य स्वयं अपना मित्र भी है और शत्रु भी। ॐ",

"ॐ संयम ही सच्ची विजय है। ॐ",

"ॐ सच्चा सुख भीतर की शांति में है। ॐ",

"ॐ भय वहीं समाप्त होता है जहाँ ज्ञान प्रारम्भ होता है। ॐ",

"ॐ स्वयं पर विजय सबसे बड़ी विजय है। ॐ",

"ॐ ईश्वर कर्मयोगी का साथ देता है। ॐ",

"ॐ जीवन का उद्देश्य केवल सफलता नहीं, धर्मपूर्वक कर्म करना है। ॐ",

"ॐ जो स्वयं को जीत लेता है वही महान विजेता है। ॐ",

"ॐ लोभ दुःख का कारण है, संतोष सुख का मार्ग है। ॐ",

"ॐ सत्य और धर्म का मार्ग कभी व्यर्थ नहीं जाता। ॐ",

"ॐ मन शांत हो तो संसार भी शांत प्रतीत होता है। ॐ",

"ॐ ज्ञान सबसे बड़ा धन है। ॐ",

"ॐ विश्वास से ही शक्ति उत्पन्न होती है। ॐ",

"ॐ हर कठिनाई एक नई शिक्षा लेकर आती है। ॐ",

"ॐ निस्वार्थ कर्म ही श्रेष्ठ पूजा है। ॐ",

"ॐ जो हुआ अच्छा हुआ, जो हो रहा है अच्छा हो रहा है। ॐ",

"ॐ समय से बड़ा कोई गुरु नहीं। ॐ",

"ॐ ईश्वर पर विश्वास रखो और कर्म करते रहो। ॐ",

"ॐ धर्म का साथ कभी मत छोड़ो। ॐ"

];

document.getElementById("geetaTicker").innerHTML =

geetaQuotes.join("&nbsp;&nbsp;&nbsp;&nbsp; ✦ &nbsp;&nbsp;&nbsp;&nbsp;");

</script>