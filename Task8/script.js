document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const input = icon.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});

const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert("Registered successfully!");
    window.location.href = "login.html";
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user || user.email !== email || user.password !== password) {
      alert("Invalid credentials.");
    } else {
      alert(`Welcome, ${user.name}!`);
      
    }
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
