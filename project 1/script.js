// ==========================
// Contact Form Submission
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const message = document.getElementById("message")?.value.trim();
      const msg = document.getElementById("form-message");

      if (name && email && message) {
        msg.textContent = "Message sent successfully!";
        msg.style.color = "green";
        contactForm.reset();
      } else {
        msg.textContent = "Please fill in all fields.";
        msg.style.color = "red";
      }
    });
  }

  // ==========================
  // Scroll to Top Button
  // ==========================
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================
  // Dark/Light Mode Toggle
  // ==========================
  const toggleBtn = document.getElementById("toggleMode");
  const modeIcon = document.getElementById("modeIcon");
  const modeText = document.getElementById("modeText");

  const applyMode = (isDark) => {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("mode", isDark ? "dark" : "light");
    if (modeIcon) modeIcon.textContent = isDark ? "☀️" : "🌙";
    if (modeText) modeText.textContent = isDark ? "Light Mode" : "Dark Mode";
  };

  // Load saved mode on page load
  const isDarkStored = localStorage.getItem("mode") === "dark";
  applyMode(isDarkStored);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDarkNow = !document.body.classList.contains("dark-mode");
      applyMode(isDarkNow);
    });
  }
});
