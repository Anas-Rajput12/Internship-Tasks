document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    const nav = document.getElementById('nav');
    if (window.innerWidth <= 991) {
      nav.classList.remove('active');
    }
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
    } else if (!emailRegex.test(email)) {
      formMessage.textContent = 'Please enter a valid email.';
      formMessage.style.color = 'red';
    } else {
      formMessage.textContent = 'Thanks for reaching out!';
      formMessage.style.color = 'green';
      this.reset();
    }
  });
}

const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
