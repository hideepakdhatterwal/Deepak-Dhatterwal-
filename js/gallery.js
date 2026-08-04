/* Gallery Image Interactions */
document.addEventListener('DOMContentLoaded', () => {
  const galleryImages = document.querySelectorAll('.gallery-card img');
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      console.log('Image clicked:', img.src);
    });
  });
});
