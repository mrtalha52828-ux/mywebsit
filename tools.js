const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.tool-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
        card.classList.add('fade-in');
      } else {
        card.style.display = 'none';
      }
    });
  });
});
