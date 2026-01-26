// js/main.js

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobilePanel = document.getElementById('mobile-panel');

  if (!menuBtn || !mobileMenu || !mobilePanel) return;

  // Open menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
    mobilePanel.classList.remove('translate-x-full');
    mobilePanel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  });

  // Close menu
  const closeMenu = () => {
    mobilePanel.classList.remove('translate-x-0');
    mobilePanel.classList.add('translate-x-full');
    setTimeout(() => {
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    }, 700); // match slide duration
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeMenu);

  // Click outside panel to close
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) closeMenu();
  });

  // Escape key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});