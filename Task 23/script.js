const scrollBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!name || !email || !message) {
      formResponse.textContent = "Please fill in all fields.";
      formResponse.style.color = "red";
    } else if (!emailPattern.test(email)) {
      formResponse.textContent = "Please enter a valid email.";
      formResponse.style.color = "red";
    } else {
      formResponse.textContent = "Message sent successfully!";
      formResponse.style.color = "green";
      contactForm.reset();
    }
  });
}

const toggleBtn = document.getElementById('toggleTheme');

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '🌙';
    } else {
      toggleBtn.textContent = '☀️';
    }
  });
}
