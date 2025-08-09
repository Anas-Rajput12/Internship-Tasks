document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('successMessage').textContent = '';

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
    document.getElementById('successMessage').textContent = 'Thank you for contacting us!';
    document.getElementById('contactForm').reset();
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
