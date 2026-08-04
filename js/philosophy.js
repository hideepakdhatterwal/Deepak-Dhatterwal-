<!-- ================= 8. ACTING PHILOSOPHY (DYNAMIC ROTATOR - 40 QUOTES) ================= -->
<section id="acting-quotes" class="philosophy-section py-5 bg-darker">
  <div class="container py-lg-5">
    <div class="row justify-content-center text-center">
      <div class="col-lg-9" data-aos="fade-up">
        <span class="om-badge fs-5 mb-3">ॐ Bholde</span>
        
        <!-- Rotating Philosophy Content Box -->
        <div id="philosophyBox" style="transition: opacity 0.5s ease-in-out; min-height: 150px;" class="d-flex flex-column justify-content-center align-items-center">
          <i class="fa-solid fa-quote-left text-gold display-4 mb-3 d-block"></i>
          <h2 class="font-cinzel text-white display-6 mb-4 px-3" id="philosophyText">
            "अभिनय केवल संवाद बोलना नहीं, बल्कि खामोशी में छिपे सत्य को जीवन देना है।"
          </h2>
        </div>

        <div class="gold-divider mx-auto mb-3"></div>
        <p class="text-gold font-cinzel tracking-widest text-uppercase fw-bold mb-2">— Deepak Dhatterwal</p>
        
        <!-- Counter Badge -->
        <span class="badge bg-gold-subtle text-gold font-cinzel border border-gold px-3 py-1" id="philosophyCounter">
          Philosophy 1 / 40
        </span>
      </div>
    </div>
  </div>
</section>

<!-- Auto-rotation Script with 40 Quotes (Hindi + English) -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const philosophies = [
      // --- HINDI ACTING QUOTES (25) ---
      "अभिनय केवल संवाद बोलना नहीं, बल्कि खामोशी में छिपे सत्य को जीवन देना है।",
      "एक सच्चा अभिनेता किरदार को निभाता नहीं, बल्कि उसके भीतर खुद को खोकर नया जन्म लेता है।",
      "कैमरा केवल आपके चेहरे को नहीं देखता, वो आपकी आत्मा के भावों को पकड़ता है।",
      "मंच पर बोली गई पंक्तियों से कहीं ज्यादा गहरा असर आपकी आंखों के सन्नाटे का होता है।",
      "अभिनय का पहला नियम है—दिखावा बंद करो और उस क्षण में पूरी ईमानदारी से जियो।",
      "किरदार कागज़ पर लिखे शब्द हैं, अभिनेता उन्हें अपनी सांसों से हकीकत बनाता है।",
      "एक कलाकार अपनी भावनाओं से डरता नहीं, उन्हें अपनी ढाल बनाकर कैमरे का सामना करता है।",
      "अच्छा अभिनेता वह है जो बोलना कम और सुनना पूरे शरीर से सीख लेता है।",
      "रंगमंच कोई पेशा नहीं, यह मानव जीवन के विभिन्न रंगों को महसूस करने की साधना है।",
      "डायरेक्टर जब 'Action' बोलता है, तब आपका अपना वजूद मिटकर किरदार का जन्म होता है।",
      "अभिनय वह पुल है जो एक अनजान इंसान की कहानी को दर्शकों के दिल से जोड़ता है।",
      "जब तक आप किरदार के दर्द को महसूस नहीं करेंगे, दर्शक आपके आंसुओं पर भरोसा नहीं करेंगे।",
      "आवाज़ और शरीर एक अभिनेता के औज़ार हैं, इन्हें इंसानियत के हर भाव के लिए तैयार रखो।",
      "कलाकार का अहंकार उसकी सबसे बड़ी बाधा है, सादगी ही अभिनय की असली खूबसूरती है।",
      "हर एक सीन एक आध्यात्मिक आदान-प्रदान है—कहानी, कलाकार और दर्शक के बीच।",
      "अभिनय में पूर्णता कोई मंज़िल नहीं, यह हर नए किरदार के साथ शुरू होने वाली एक अनंत यात्रा है।",
      "संवाद रटना आसान है, पर संवादों के पीछे छिपी भावना को जीना ही असली हुनर है।",
      "जब आप कैमरा भूलकर पूरी तरह से सिर्फ और सिर्फ किरदार में होते हैं, वही पल जादुई होता है।",
      "अनुशासन ही आपकी कच्ची प्रतिभा को एक महान कला में बदलता है।",
      "जो दर्द आपने कभी नहीं सहा, उसे भी अपनी आंखों में ले आना ही एक अभिनेता की ताकत है।",
      "मंच की लाइटें केवल आपके शरीर को चमकाती हैं, पर आपका अभिनय दर्शक की आत्मा को छूता है।",
      "किरदार को जज मत करो, उसे बिना किसी शर्त के अपनाओ और समझो।",
      "सच्चा कलाकार असफलताओं से नहीं डरता, वो हर गिरावट से एक नया भाव सीखता है।",
      "रीटेक से मत घबराओ, हर नया टेक आपकी कला को और अधिक निखारने का मौका देता है।",
      "अभिनय सिर्फ एक कला नहीं, यह अपनी आत्मा को किसी और के वजूद के नाम कर देने का नाम है।",

      // --- ENGLISH ACTING QUOTES (15) ---
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

      philoBox.style.opacity = '0';

      setTimeout(() => {
        philosophyIndex = (philosophyIndex + 1) % philosophies.length;
        philoText.textContent = `"${philosophies[philosophyIndex]}"`;
        
        if (philoCounter) {
          philoCounter.textContent = `Philosophy ${philosophyIndex + 1} / ${philosophies.length}`;
        }

        philoBox.style.opacity = '1';
      }, 500);
    }

    // Har 4 second mein quote automatic change hoga
    setInterval(rotatePhilosophy, 4000);
  });
</script>
