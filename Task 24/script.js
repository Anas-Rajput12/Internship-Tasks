const priceToggle = document.getElementById('priceToggle');
const prices = document.querySelectorAll('.price');

priceToggle.addEventListener('change', () => {
  prices.forEach(price => {
    price.textContent = priceToggle.checked
      ? price.getAttribute('data-year')
      : price.getAttribute('data-month');
  });
});

const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
  });
});
