/* FormSubmit Form Submission Handler */
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', () => {
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Sending Message...';
      submitBtn.disabled = true;
    });
  }
});
