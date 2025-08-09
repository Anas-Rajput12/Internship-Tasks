const faqs = document.querySelectorAll('.faq');
const toggleAllBtn = document.getElementById('toggleAll');
const scrollBtn = document.getElementById('scrollToTop');
const themeToggle = document.getElementById('themeToggle');

let allExpanded = false;

faqs.forEach(faq => {
  const question = faq.querySelector('.question');
  const icon = faq.querySelector('.icon');

  question.addEventListener('click', () => {
    const isActive = faq.classList.contains('active');

    faqs.forEach(otherFaq => {
      otherFaq.classList.remove('active');
      otherFaq.querySelector('.icon').textContent = '+';
    });

    if (!isActive) {
      faq.classList.add('active');
      icon.textContent = '−';
    } else {
      icon.textContent = '+';
    }
  });
});

toggleAllBtn.addEventListener('click', () => {
  faqs.forEach(faq => {
    const icon = faq.querySelector('.icon');
    if (allExpanded) {
      faq.classList.remove('active');
      icon.textContent = '+';
    } else {
      faq.classList.add('active');
      icon.textContent = '−';
    }
  });
  toggleAllBtn.textContent = allExpanded ? 'Expand All' : 'Collapse All';
  allExpanded = !allExpanded;
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});
