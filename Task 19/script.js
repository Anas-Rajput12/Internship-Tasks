const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".modal-trigger").forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = (category === "all" || card.getAttribute("data-category") === category) ? "block" : "none";
    });
  });
});

const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
