document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (name === '') {
    document.getElementById('nameError').textContent = 'Full Name is required.';
    isValid = false;
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    alert('Thank you for reaching out. We will contact you soon!');
    this.reset();
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
