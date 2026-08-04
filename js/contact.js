/*=========================================
Deepak Dhatterwal Official Website
Contact.js Part 1
=========================================*/

const form = document.getElementById("contactForm");

const nameInput = form.querySelector("input[type='text']");
const emailInput = form.querySelector("input[type='email']");
const phoneInput = form.querySelectorAll("input")[2];
const subjectInput = form.querySelectorAll("input")[3];
const messageInput = form.querySelector("textarea");

form.addEventListener("submit", function (e) {

e.preventDefault();

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();
const subject = subjectInput.value.trim();
const message = messageInput.value.trim();

if(name===""){

alert("Please enter your name.");

nameInput.focus();

return;

}

if(email===""){

alert("Please enter your email.");

emailInput.focus();

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email.");

emailInput.focus();

return;

}

if(message===""){

alert("Please enter your message.");

messageInput.focus();

return;

}

const button=form.querySelector("button");

button.innerHTML="Sending...";

button.disabled=true;

setTimeout(()=>{

button.innerHTML="Message Sent ✓";

button.style.background="#28a745";

alert("Thank you! Your message has been recorded.");

form.reset();

setTimeout(()=>{

button.innerHTML="Send Message";

button.disabled=false;

button.style.background="#D4AF37";

},2500);

},1500);

});


/*=========================================
Contact.js Part 2
EmailJS + WhatsApp + Popup
=========================================*/

// =====================================
// EmailJS Configuration
// =====================================

// https://www.emailjs.com/
// Signup karo aur niche wale IDs replace karna

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// =====================================
// EmailJS Initialize
// =====================================

emailjs.init(PUBLIC_KEY);

// =====================================
// Contact Form Submit
// =====================================

form.addEventListener("submit", function (e) {

e.preventDefault();

const button = form.querySelector("button");

button.disabled = true;

button.innerHTML = "Sending...";

const data = {

from_name: nameInput.value,

from_email: emailInput.value,

phone: phoneInput.value,

subject: subjectInput.value,

message: messageInput.value

};

emailjs.send(

SERVICE_ID,

TEMPLATE_ID,

data

)

.then(function () {

showPopup(

"✅ Message Sent Successfully"

);

form.reset();

button.innerHTML = "Send Message";

button.disabled = false;

})

.catch(function () {

showPopup(

"❌ Failed To Send Message"

);

button.innerHTML = "Send Message";

button.disabled = false;

});

});



// =====================================
// Success Popup
// =====================================

const popup=document.createElement("div");

popup.id="popupMessage";

document.body.appendChild(popup);

function showPopup(text){

popup.innerHTML=text;

popup.classList.add("showPopup");

setTimeout(()=>{

popup.classList.remove("showPopup");

},3000);

}



// =====================================
// WhatsApp Quick Message
// =====================================

const whatsappBtn=document.createElement("button");

whatsappBtn.id="quickWhatsapp";

whatsappBtn.innerHTML="WhatsApp Me";

document.body.appendChild(whatsappBtn);

whatsappBtn.onclick=function(){

const name=nameInput.value;

const text=

`Hello Deepak,

My Name is ${name}

I want to contact you regarding acting work.`;

window.open(

"https://wa.me/918607326295?text="+

encodeURIComponent(text)

);

};

