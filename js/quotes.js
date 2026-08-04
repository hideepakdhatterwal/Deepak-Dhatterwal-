/*=========================================
Deepak Dhatterwal Official Website
Quotes.js Part 1
=========================================*/

// =============================
// Acting Quotes
// =============================

const actingQuotes = [

"Every character has a soul. My job is to bring it alive.",

"Acting is not pretending. It is living truthfully.",

"Cinema is the mirror of emotions.",

"The best performance is the one that feels real.",

"Discipline creates great actors.",

"A role begins where comfort ends.",

"Expression is more powerful than dialogue.",

"Every audition is another opportunity.",

"Success belongs to those who never stop learning.",

"Performance comes from observation.",

"The camera sees honesty.",

"Confidence is silent. Performance speaks.",

"Every frame tells a story.",

"Great actors never stop improving.",

"Believe in your craft."

];

// =============================
// Motivation Quotes
// =============================

const motivationQuotes = [

"Dream big. Work harder.",

"Small progress every day creates big success.",

"Stay humble. Stay hungry.",

"Discipline beats motivation.",

"Hard work never disappoints.",

"Success loves consistency.",

"Keep moving forward.",

"Your future is created today.",

"Nothing changes until you change.",

"Every failure teaches success.",

"Believe in yourself.",

"Focus creates results.",

"Consistency is your superpower.",

"Never quit your dream.",

"Your journey inspires others."

];

// =============================
// Quote Element
// =============================

const quoteText = document.getElementById("quoteText");

let quoteIndex = 0;

let quoteMode = true;

// =============================
// Auto Change Quotes
// =============================

function changeQuote(){

quoteText.style.opacity="0";

setTimeout(()=>{

if(quoteMode){

quoteText.innerHTML=actingQuotes[quoteIndex];

}

else{

quoteText.innerHTML=motivationQuotes[quoteIndex];

}

quoteText.style.opacity="1";

quoteIndex++;

if(quoteIndex>=15){

quoteIndex=0;

quoteMode=!quoteMode;

}

},500);

}

changeQuote();

setInterval(changeQuote,5000);

/*=========================================
Quotes.js Part 2
Bhagavad Gita Quotes
=========================================*/

// =============================
// Bhagavad Gita Quotes (Hindi)
// =============================

const geetaQuotes=[

"🕉️ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",

"🕉️ योगः कर्मसु कौशलम्।",

"🕉️ श्रद्धावान् लभते ज्ञानम्।",

"🕉️ न हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति।",

"🕉️ आत्मैव ह्यात्मनो बन्धुः।",

"🕉️ समत्वं योग उच्यते।",

"🕉️ न जायते म्रियते वा कदाचित्।",

"🕉️ उद्धरेदात्मनात्मानम्।",

"🕉️ ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते।",

"🕉️ सुखदुःखे समे कृत्वा।",

"🕉️ भय रहित होकर अपना कर्तव्य करो।",

"🕉️ जो हुआ अच्छा हुआ, जो होगा अच्छा होगा।",

"🕉️ मनुष्य अपने कर्मों से महान बनता है।",

"🕉️ स्वयं पर विश्वास ही सबसे बड़ा बल है।",

"🕉️ धैर्य ही सच्चे योद्धा की पहचान है।"

];

// =============================
// Random Geeta Quote
// =============================

function randomGeetaQuote(){

const random=Math.floor(Math.random()*geetaQuotes.length);

console.log(

"Today's Geeta Quote :",

geetaQuotes[random]

);

}

randomGeetaQuote();



// =============================
// Fade Effect
// =============================

function fadeQuote(){

quoteText.style.transition=".5s";

quoteText.style.opacity="0";

setTimeout(()=>{

quoteText.style.opacity="1";

},500);

}

setInterval(fadeQuote,5000);



// =============================
// Random Quote Generator
// =============================

function randomQuote(){

let allQuotes=[

...actingQuotes,

...motivationQuotes

];

let random=Math.floor(Math.random()*allQuotes.length);

return allQuotes[random];

}

console.log(

"Random Quote :",

randomQuote()

);



// =============================
// Daily Quote
// =============================

const today=new Date().getDate();

const dailyQuote=

actingQuotes[today%actingQuotes.length];

console.log(

"Today's Acting Quote :",

dailyQuote

);