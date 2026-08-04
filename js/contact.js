document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');
  const feedbackSuccess = document.getElementById('form-feedback-success');
  const feedbackError = document.getElementById('form-feedback-error');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      btnText.classList.add('d-none');
      btnSpinner.classList.remove('d-none');
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        btnText.classList.remove('d-none');
        btnSpinner.classList.add('d-none');
        submitBtn.disabled = false;

        if (response.ok) {
          feedbackSuccess.classList.remove('d-none');
          feedbackError.classList.add('d-none');
          contactForm.reset();
          contactForm.classList.remove('was-validated');
        } else {
          feedbackError.classList.remove('d-none');
        }
      })
      .catch(() => {
        btnText.classList.remove('d-none');
        btnSpinner.classList.add('d-none');
        submitBtn.disabled = false;
        feedbackError.classList.remove('d-none');
      });
    });
  }
});
