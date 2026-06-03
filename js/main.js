document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Menu Logic ---
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('open');
        mainNav.classList.remove('open');
      }
    });

    // Close menu when resizing window beyond mobile threshold
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mobileToggle.classList.remove('open');
        mainNav.classList.remove('open');
      }
    });
  }

  // --- Contact Form Submission Simulation ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple visual submit loading feedback
      const submitBtn = contactForm.querySelector('.form-submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Enviando...';
      submitBtn.disabled = true;

      // Simulate a small delay (1.2 seconds) to look realistic
      setTimeout(() => {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = 'form-feedback';
        feedback.innerHTML = `
          <strong>Sucesso!</strong> Sua mensagem foi enviada. Entraremos em contato em até 24 horas.
        `;

        // Clear previous feedback if any
        const existingFeedback = contactForm.querySelector('.form-feedback');
        if (existingFeedback) {
          existingFeedback.remove();
        }

        // Insert feedback at the top of the form
        contactForm.insertBefore(feedback, contactForm.firstChild);

        // Reset button and form fields
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
        contactForm.reset();

        // Scroll back to the top of the form cards to see the success message
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto remove feedback after 8 seconds
        setTimeout(() => {
          feedback.style.opacity = '0';
          feedback.style.transform = 'translateY(-10px)';
          feedback.style.transition = 'all 0.4s ease';
          setTimeout(() => feedback.remove(), 400);
        }, 8000);

      }, 1200);
    });
  }
});
