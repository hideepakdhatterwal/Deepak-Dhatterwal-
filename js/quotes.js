document.addEventListener('DOMContentLoaded', () => {
  // Bhagavad Gita Continuous Marquee
  const geetaContainer = document.getElementById('geeta-marquee-content');
  if (geetaContainer && typeof geetaQuotes !== 'undefined') {
    geetaContainer.innerHTML = geetaQuotes.map(q => `<span class="me-5 font-hindi">${q}</span>`).join(' • ');
  }

  // Dual Quote Rotator Engines
  let actingIndex = 0;
  let lifeIndex = 0;

  function updateActingQuote() {
    if (typeof actingQuotes === 'undefined' || actingQuotes.length === 0) return;
    const q = actingQuotes[actingIndex];
    document.getElementById('acting-quote-text').innerText = `"${q.text}"`;
    document.getElementById('acting-quote-author').innerText = `- ${q.author}`;
    actingIndex = (actingIndex + 1) % actingQuotes.length;
    animateProgressBar('acting-timer-bar');
  }

  function updateLifeQuote() {
    if (typeof lifeQuotes === 'undefined' || lifeQuotes.length === 0) return;
    const q = lifeQuotes[lifeIndex];
    document.getElementById('life-quote-text').innerText = `"${q.text}"`;
    document.getElementById('life-quote-author').innerText = `- ${q.author}`;
    lifeIndex = (lifeIndex + 1) % lifeQuotes.length;
    animateProgressBar('life-timer-bar');
  }

  function animateProgressBar(elementId) {
    const bar = document.getElementById(elementId);
    if (!bar) return;
    bar.style.transition = 'none';
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 5000ms linear';
      bar.style.width = '100%';
    }, 50);
  }

  updateActingQuote();
  updateLifeQuote();
  setInterval(updateActingQuote, 5000);
  setInterval(updateLifeQuote, 5000);
});
