// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const msgBox = document.querySelector(".form-message");

  if (!name.value || !email.value || !message.value) {
    msgBox.textContent = "All fields are required!";
    msgBox.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    msgBox.textContent = "Please enter a valid email!";
    msgBox.style.color = "red";
    return;
  }

  msgBox.textContent = "Message submitted successfully!";
  msgBox.style.color = "green";
  this.reset();
});
