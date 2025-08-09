document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('show');
});

const scrollBtn = document.getElementById('scrollTop');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById('logoutBtn').addEventListener('click', () => {
  const toast = document.getElementById('toast');
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 3000);
});

document.querySelectorAll('.card').forEach(card => {
  const counter = card.querySelector('.counter');
  const target = parseInt(card.getAttribute('data-target'));
  let count = 0;
  const update = () => {
    count += Math.ceil(target / 50);
    if (count > target) count = target;
    counter.textContent = card.textContent.includes('%') ? count + '%' : count;
    if (count < target) requestAnimationFrame(update);
  };
  update();
});

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
