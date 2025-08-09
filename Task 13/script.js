const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    // Close all items
    faqItems.forEach(i => {
      i.classList.remove('active');
      const iIcon = i.querySelector('.icon');
      if (iIcon) iIcon.textContent = '+';
    });

    // Reopen clicked one if it wasn't already open
    if (!isOpen) {
      item.classList.add('active');
      if (icon) icon.textContent = '-';
    }
  });
});
