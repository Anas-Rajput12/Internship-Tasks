// Toggle Button Logic
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
  alert("Monthly pricing selected (logic to be added)");
});

yearlyBtn.addEventListener("click", () => {
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  alert("Yearly pricing selected (logic to be added)");
});

// Animate Table on Scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});

// Sort Feature Rows Alphabetically
document.getElementById("sortBtn").addEventListener("click", () => {
  const tbody = document.querySelector("table tbody");
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const featureA = a.cells[0].textContent.toLowerCase();
    const featureB = b.cells[0].textContent.toLowerCase();
    return featureA.localeCompare(featureB);
  });

  rows.forEach(row => tbody.appendChild(row));
});
