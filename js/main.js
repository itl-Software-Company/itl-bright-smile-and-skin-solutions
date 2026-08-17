/* ===================================================================
   Bright Smile & Skin Solutions — Main JavaScript
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initContactForm();
  initServiceFilter();
});

/* --- Scroll-based fade-in animations --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  // Set stagger delay on children
  document.querySelectorAll('.stagger').forEach((parent) => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.setProperty('--i', i);
    });
  });
}

/* --- Header scroll effect --- */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Mobile hamburger toggle --- */
function initMobileNav() {
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('.header__link').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* --- Smooth scrolling for anchor links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (_) {}
    });
  });
}

/* --- Contact form validation --- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.form__group').forEach((group) => {
      group.classList.remove('form__group--error');
    });

    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.closest('.form__group').classList.add('form__group--error');
      }
    });

    // Validate email
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value.trim())) {
        isValid = false;
        emailField.closest('.form__group').classList.add('form__group--error');
      }
    }

    if (isValid) {
      // Show success state
      const btn = form.querySelector('.btn');
      const originalText = btn.textContent;
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#13ecc8';
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
    }
  });
}

/* --- Service category filter --- */
function initServiceFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const categories = document.querySelectorAll('[data-category]');
  if (!filterBtns.length || !categories.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach((b) => b.classList.remove('btn--primary'));
      btn.classList.add('btn--primary');

      // Show/hide categories
      categories.forEach((cat) => {
        if (filter === 'all' || cat.dataset.category === filter) {
          cat.style.display = '';
          cat.classList.add('fade-up', 'visible');
        } else {
          cat.style.display = 'none';
        }
      });
    });
  });
}
