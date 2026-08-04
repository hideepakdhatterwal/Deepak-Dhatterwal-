/* Marquee Control */
document.addEventListener('DOMContentLoaded', () => {
  const marquee = document.querySelector('marquee');
  if (marquee) {
    marquee.addEventListener('mouseover', () => marquee.stop());
    marquee.addEventListener('mouseout', () => marquee.start());
  }
});
