// 15 ACTING PHILOSOPHIES ARRAY BY DEEPAK DHATTERWAL
const philosophies = [
  "An actor does not merely recite lines; he inhabits the unsaid, giving breath to silence and truth to fiction.",
  "To act is to lend your soul to a stranger’s story and make it undeniably real.",
  "True performance lies not in dramatic gestures, but in the subtle truth hidden behind the eyes.",
  "Screen acting is the art of intimacy—letting the camera eavesdrop on your honest emotions.",
  "Characters are not played; they are discovered within the deep spaces of human experience.",
  "Silence on stage is as powerful as speech when filled with genuine emotional resonance.",
  "A script is only a map; the actor must embark on the journey and bring the landscape to life.",
  "Discipline transforms raw passion into refined art that moves minds and touches hearts.",
  "Great actors do not fear vulnerability; they wear it as their armor on camera.",
  "Every scene is a spiritual exchange between the performer, the story, and the audience.",
  "The craft demands that you listen with your entire body, not just your ears.",
  "Authenticity in drama begins when you stop performing and start simply existing in the moment.",
  "An actor’s body and voice are sacred instruments—keep them attuned to every nuance of human truth.",
  "Method is not a rigid cage, but a set of wings to help you fly into uncharted emotional depths.",
  "When the director calls action, step out of your ego and surrender fully to the character's journey."
];

let philosophyIndex = 0;

function rotatePhilosophy() {
  const philoBox = document.getElementById('philosophyBox');
  const philoText = document.getElementById('philosophyText');
  const philoCounter = document.getElementById('philosophyCounter');

  if (!philoBox || !philoText) return;

  // Smooth Fade-out effect
  philoBox.style.opacity = '0';

  setTimeout(() => {
    philosophyIndex = (philosophyIndex + 1) % philosophies.length;
    philoText.textContent = `"${philosophies[philosophyIndex]}"`;
    
    if (philoCounter) {
      philoCounter.textContent = `Philosophy ${philosophyIndex + 1} / ${philosophies.length}`;
    }

    // Smooth Fade-in effect
    philoBox.style.opacity = '1';
  }, 500);
}

// Har 6 second mein philosophy automatically change hogi
setInterval(rotatePhilosophy, 6000);
