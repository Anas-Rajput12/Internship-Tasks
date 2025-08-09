const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const sliderContainer = document.querySelector('.slider-container');

const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

const scrollBtn = document.getElementById("scrollToTopBtn");

let current = 0;
let autoSlideInterval;
let touchPause = false;

document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    modalText.innerText = btn.getAttribute('data-full');
    modal.style.display = 'block';
  });
});

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

function showSlide(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  current = index;
}

function nextSlide() {
  showSlide((current + 1) % cards.length);
}

function prevSlide() {
  showSlide((current - 1 + cards.length) % cards.length);
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

sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

sliderContainer.addEventListener('touchstart', () => {
  stopAutoSlide();
  touchPause = true;
});

sliderContainer.addEventListener('touchend', () => {
  if (touchPause) {
    setTimeout(() => {
      startAutoSlide();
      touchPause = false;
    }, 5000); 
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

showSlide(current);
startAutoSlide();
