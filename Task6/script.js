// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

  // Get field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    isValid = false;
  }

  // Validate Email
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate Message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  // If all valid
  if (isValid) {
    document.getElementById('successMessage').textContent = 'Thank you for contacting us!';
    this.reset();
  }
});

// Email regex validator
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Scroll to top button logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
