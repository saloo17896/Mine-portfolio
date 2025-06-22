// Smooth scroll to section
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Contact form animation (placeholder)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      form.querySelector('button').textContent = 'Message Sent!';
      setTimeout(() => {
        form.querySelector('button').textContent = 'Let's build something awesome together!';
      }, 2000);
    });
  }
}); 