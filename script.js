const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}));
const filterButtons = document.querySelectorAll('.filter');
const foodCards = document.querySelectorAll('.food-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  foodCards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
