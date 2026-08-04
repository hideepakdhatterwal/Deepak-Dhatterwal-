document.addEventListener('DOMContentLoaded', () => {
  const modalImage = document.getElementById('modal-image');
  const galleryModalEl = document.getElementById('galleryModal');
  
  if (galleryModalEl) {
    const galleryModal = new bootstrap.Modal(galleryModalEl);
    document.querySelectorAll('.light-box-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const imgSrc = btn.getAttribute('data-img');
        if (modalImage && imgSrc) {
          modalImage.src = imgSrc;
          galleryModal.show();
        }
      });
    });
  }
});
