// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

// Event listener for all view buttons
document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', () => {
    const imgSrc = button.getAttribute('data-image');
    modalImg.src = imgSrc;
    modal.style.display = 'flex';
  });
});

// Close button click
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
