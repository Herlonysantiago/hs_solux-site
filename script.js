const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  const firstLink = nav.querySelector('a');

  const closeMenu = ({ returnFocus = false } = {}) => {
    const wasOpen = nav.classList.contains('open');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    if (wasOpen && returnFocus) toggle.focus();
  };

  const openMenu = () => {
    nav.classList.add('open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    firstLink?.focus();
  };

  toggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) closeMenu();
    else openMenu();
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu({ returnFocus: true });
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
