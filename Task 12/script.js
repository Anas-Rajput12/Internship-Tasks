const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let current = 0;
let autoSlideInterval;

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}

function nextSlide() {
  let next = (current + 1) % cards.length;
  showSlide(next);
}

function prevSlide() {
  let prev = (current - 1 + cards.length) % cards.length;
  showSlide(prev);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.querySelector('.slider-container').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseleave', startAutoSlide);

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

showSlide(current);
startAutoSlide();
