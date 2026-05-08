// =============================================
// TJ Sokol Choteč — Main JS
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Kontaktní formulář (popup) ---
  const contact = document.querySelector('.contact');
  const contactTriggers = document.querySelectorAll('.js-contact');
  const contactClose = document.querySelector('.contact__close');

  if (contact) {
    contactTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        contact.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    if (contactClose) {
      contactClose.addEventListener('click', function () {
        contact.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }

    contact.addEventListener('click', function (e) {
      if (e.target === contact) {
        contact.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        contact.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Mobilní navigace ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
  }

});
