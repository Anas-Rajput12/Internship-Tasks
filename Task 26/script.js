// Dynamic year update
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-to-top functionality
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle for footer
const themeToggle = document.getElementById("theme-toggle");
const footer = document.querySelector(".footer");

themeToggle.addEventListener("click", () => {
  footer.classList.toggle("light");
});
