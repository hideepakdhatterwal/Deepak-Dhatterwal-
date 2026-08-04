// FormSubmit AJAX & Pop-up Notification Script
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('contact-submit-btn');
const successModal = new bootstrap.Modal(document.getElementById('successModal'));

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Page reload hone se rokega

    // Button Loading State
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(contactForm);

    // FormSubmit AJAX Request
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        successModal.show(); // Pop-up Notification Dikhaye
        contactForm.reset();  // Form Fields Clear Kare
      } else {
        alert('Oops! Message bhejne mein samasya aayi. Kripya dobara koshish karein.');
      }
    })
    .catch(error => {
      alert('Network Error! Kripya apna internet check karein.');
    })
    .finally(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane me-2"></i> Send Message';
      submitBtn.disabled = false;
    });
  });
}
