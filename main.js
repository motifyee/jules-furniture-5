// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Cart Observer for Product Page
  const addToCartBtn = document.querySelector('.pdp-info .btn');
  const stickyCart = document.querySelector('.sticky-cart-bar');

  if (addToCartBtn && stickyCart) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          stickyCart.classList.add('is-visible');
        } else {
          stickyCart.classList.remove('is-visible');
        }
      });
    }, { threshold: 0 });

    observer.observe(addToCartBtn);
  }

  // Gallery Thumbnails Lightbox/Switching
  const thumbs = document.querySelectorAll('.pdp-gallery__thumb');
  const mainImage = document.getElementById('main-image');

  if (thumbs.length > 0 && mainImage) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', (e) => {
        // Update main image src based on high-res version of thumbnail
        // In a real app, we'd use a data attribute for the high-res URL
        const newSrc = e.target.src.replace('&w=200', '&w=1000');
        mainImage.src = newSrc;

        // Update ARIA states
        thumbs.forEach(t => t.setAttribute('aria-current', 'false'));
        e.target.setAttribute('aria-current', 'true');
      });

      // Keyboard support
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          thumb.click();
        }
      });
    });
  }

  // Material Swatch Selection
  const swatches = document.querySelectorAll('.swatch-item');
  if (swatches.length > 0) {
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const group = e.currentTarget.closest('.swatch-grid');
        const itemsInGroup = group.querySelectorAll('.swatch-item');

        itemsInGroup.forEach(item => item.setAttribute('aria-checked', 'false'));
        e.currentTarget.setAttribute('aria-checked', 'true');
      });

      // Keyboard support
      swatch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          swatch.click();
        }
      });
    });
  }

  // Size Button Selection
  const sizeButtons = document.querySelectorAll('.pdp-info .btn--outline[aria-pressed]');
  if (sizeButtons.length > 0) {
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const parent = e.currentTarget.parentElement;
        const allBtns = parent.querySelectorAll('.btn, .btn--outline');

        allBtns.forEach(b => {
          b.setAttribute('aria-pressed', 'false');
          b.classList.remove('btn');
          b.classList.add('btn--outline');
        });

        e.currentTarget.setAttribute('aria-pressed', 'true');
        e.currentTarget.classList.remove('btn--outline');
        e.currentTarget.classList.add('btn');
      });
    });
  }
});
