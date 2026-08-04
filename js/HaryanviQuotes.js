<!-- JavaScript Engine for 50 Haryanvi Quotes (Auto-rotating Spotlight + Marquee) -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 50 AUTHENTIC HARYANVI MOTIVATIONAL QUOTES
    const haryanviQuotes = [
      "मेहनत की गूंज इतनी रोवगी, के जलन आले खुद ताली बजावेंगे।",
      "बाप का नाम अर माँ का आशीर्वाद होवे, तो दुनिया की कोई ताकत रोक नी सकती।",
      "गाम के माटी की महक अर सिर पै बुज़ुर्गों का हाथ, न्यू ए कोन्या मिल्या करे।",
      "जिम्मेदारियां बड्डी होवैं तो नींद अपने आप उड़ जावै सै।",
      "लोग के सोचेंगे, यो सोचणा बंद कर दो... अपणा काम खामोशी तै करे जाओ।",
      "कामयाबी रोब तै नी, अपनी कड़ी मेहनत तै आया करे।",
      "किस्मत का रोणा रोण आले कदे इतिहास नी रचा करते।",
      "सबर राख भाइया, दिन अपणे भी आवेंगे अर दौर भी अपना ए होगा।",
      "किसे के तलवे चाटन तै बड्ढिया सै, अपनी मेहनत के दम पै भूखे सो जाओ।",
      "चरित्र ऐसा बनाओ के दुश्मन भी इज़्ज़त करण पै मजबूर हो जावै।",
      "सपने बड्डे देखो, क्यूंकि छोटे सपने देखणा भी एक गुनाह सै।",
      "राह आसान नी होती, पर हार मानना म्हारै खून में नी सै।",
      "माटी का शरीर सै, एक दिन माटी में मिल जाणा सै... पर नाम ऐसा कर जाओ जो अमर रह जावै।",
      "तूफान में भी दीया जलाणा सीखो, मुसीबत में मुस्कुराणा सीखो।",
      "बातां तै नी, रातां तै लड़णा पड़े सै जब सपने पूरे करणे होवैं।",
      "जिसने अपनी औकात अर औकात से बड्डे सपने देखे, उसने ए इतिहास रचा सै।",
      "पीठ पीछे बोलने आळ्यां नै बोलण दो, कुत्ते भौंकदे रहवैं अर शेर अपणी चाल चलदा रहवै।",
      "जिद होणी चाहिए जीतण की, हारण खातर तो एक डर ए काफी सै।",
      "कलाकार की कोई जात नी होती, उसकी मेहनत अर उसका अभिनय ए उसकी पहचान होवै।",
      "असफलता तै डरो मत, यो तो कामयाबी की पहली सीढ़ी होवै सै।",
      "जो आज थारे पै हंसैं सैं, कल वही थारे खातर ताली बजावेंगे।",
      "जिंदगी में न्यू ए नाम नी बण्या करता, पसीना बहाणा पड़े सै।",
      "बापू की मूछ अर माँ की मुस्कान खातर कुछ भी कर जावेंगे।",
      "किसे का बुरा मत सोचो, अर अपणे खातर कदे बुरा मत होण दो।",
      "म्हारा अंदाज अलग सै, म्हाकी मेहनत कड़क सै।",
      "वक़्त बदला सै, दौर भी बदलेगा... म्हारा टाइम भी आवेगा।",
      "कामयाबी पाना खेल कोन्या, रातां की नींद गवाणी पड़े सै।",
      "शरीर में दम अर इरादों में मजबूती होवै, तो कोई रुकावट नी रोक सकती।",
      "दुनिया झुकैगी, बस झुकाण आला चाहिए।",
      "सोच बदलोगे तो दुनिया बदलेगी, अर नियत साफ़ रखोगे तो किस्मत बदलेगी।",
      "चुप रहना म्हारी कमज़ोरी नी, म्हारा सब्र सै।",
      "खुद पै भरोसा राखो, दुनिया तो रोज अपणी राय बदले सै।",
      "असली बड़प्पन पैसे में नी, संस्कार अर नियत में होवै सै।",
      "तू मेहनत करदा जा, फल देण आला उपर बैठा सै।",
      "जे इरादे पक्के होवैं तो पहाड़ भी रास्ता दे दिया करैं।",
      "गाम का देसी छोरा जब रंगमंच पै आवेगा, तो तहलका ए मचावेगा।",
      "दूसरयां की लकीर छोटी करण की बजाय, अपनी लकीर बड्डी करो।",
      "असली ताक़त शरीर में नी, सोच अर चरित्र में होवै सै।",
      "जंगल में शेर अर मैदान में हरियाणवी जब उतरैं, तो माहौल बदल जावै।",
      "मेहनत का पसीना कदे बेकार नी जाता, देर-सबेर रंग ज़रूर लावै सै।",
      "सपने ओ कोन्या जो सोती आंख्या तै दिखे, सपने ओ सैं जो सोण ना देवैं।",
      "भीड़ का हिस्सा मत बनो, भीड़ जिस खातर खड़ी होवै वो चेहरा बनो।",
      "जो डरेगा वो मरेगा, जो लड़ेगा वही जीतेगा।",
      "इज़्ज़त कमाई जावै सै, मंगी नी जांदी।",
      "दिल साफ़ अर नीयत सुथरी रखो, रब अपने आप रास्ते खोल देगा।",
      "परिस्थितियों से भागना नी, उनका सामना करना सीखो।",
      "अरे थम बस मेहनत पे ध्यान दो, फल देण आला भगवान सै।",
      "अकेले चलणा सीखो, क्यूंकि कामयाबी के रस्ते पै भीड़ नी होती।",
      "म्हारी शांति नै म्हारी कमज़ोरी मत समझे, तूफ़ान तै पहलां सन्नाटा ए होया करै।",
      "माटी तै जुड़के रहो, चाहे आसमान जितनी ऊँचाई छू लो।"
    ];

    window.allHrQuotes = haryanviQuotes; // Global variable for shuffle button

    // 1. Ticker marqee populating
    const track1 = document.getElementById('hrTrack1');
    const track2 = document.getElementById('hrTrack2');

    if (track1 && track2) {
      const halfIndex = Math.ceil(haryanviQuotes.length / 2);
      const set1 = haryanviQuotes.slice(0, halfIndex);
      const set2 = haryanviQuotes.slice(halfIndex);

      function buildPillsHTML(quotesArray, startIndex) {
        return quotesArray.map((quote, idx) => `
          <div class="hr-quote-pill">
            <span class="badge-num">#${startIndex + idx + 1}</span>
            <span>"${quote}"</span>
            <span class="tag">— दीपक 卐</span>
          </div>
        `).join('');
      }

      track1.innerHTML = buildPillsHTML(set1, 0) + buildPillsHTML(set1, 0);
      track2.innerHTML = buildPillsHTML(set2, halfIndex) + buildPillsHTML(set2, halfIndex);
    }

    // 2. AUTOMATIC SPOTLIGHT ROTATOR (Every 3.5 Seconds)
    let spotlightIndex = 0;
    
    function autoRotateSpotlight() {
      const textElem = document.getElementById('hrSpotlightText');
      if (!textElem) return;

      textElem.style.opacity = '0'; // Smooth fade-out

      setTimeout(() => {
        spotlightIndex = (spotlightIndex + 1) % haryanviQuotes.length;
        textElem.textContent = `"${haryanviQuotes[spotlightIndex]}"`;
        textElem.style.opacity = '1'; // Smooth fade-in
      }, 400);
    }

    // Har 3.5 second (3500ms) par automatically quote badlega
    setInterval(autoRotateSpotlight, 3500);
  });

  // Manual Shuffle Button Function
  function getRandomHrQuote() {
    const textElem = document.getElementById('hrSpotlightText');
    if (!textElem || !window.allHrQuotes) return;

    textElem.style.opacity = '0';
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * window.allHrQuotes.length);
      textElem.textContent = `"${window.allHrQuotes[randomIndex]}"`;
      textElem.style.opacity = '1';
    }, 300);
  }
</script>
