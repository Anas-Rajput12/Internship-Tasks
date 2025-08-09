// Scroll animation
const containers = document.querySelectorAll('.container');

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  containers.forEach((box, index) => {
    const top = box.getBoundingClientRect().top;
    if (top < trigger) {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
      highlightCurrentStep(index);
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Highlight current step
function highlightCurrentStep(index) {
  containers.forEach(c => c.classList.remove('active-step'));
  if (containers[index]) {
    containers[index].classList.add('active-step');
  }
}

// Back to Top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
