// js/gallery.js - Handles portfolio gallery, lightbox, and category filtering

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const grid = document.getElementById('portfolio-grid');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!grid || !lightbox) return;

  // Lightbox functionality
  const openLightbox = (src) => {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  };

  const closeLightbox = () => {
    lightbox.style.display = 'none';
  };

  grid.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (img) {
      openLightbox(img.dataset.full || img.src);
    }
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Category filtering
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Update active button style
      filterButtons.forEach(btn => btn.classList.remove('bg-brand-green', 'text-white'));
      button.classList.add('bg-brand-green', 'text-white');

      // Filter items
      document.querySelectorAll('.portfolio-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Trigger "All" filter on load
  document.querySelector('[data-filter="all"]')?.click();
});