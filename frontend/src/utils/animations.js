/* ========================================
   SCROLL REVEAL ANIMATIONS
   ======================================== */

// Intersection Observer for scroll reveal animations
export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Observe all elements with .reveal class
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Header scroll behavior
export const initHeaderScroll = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('solid');
      header.classList.remove('transparent');
    } else {
      header.classList.add('transparent');
      header.classList.remove('solid');
    }

    lastScrollY = currentScrollY;
  };

  // Throttle scroll events for better performance
  let ticking = false;
  const throttledScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', throttledScroll, { passive: true });
  
  // Initial state
  handleScroll();

  return () => {
    window.removeEventListener('scroll', throttledScroll);
  };
};

// Smooth scroll for anchor links
export const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (!target) return;
      
      e.preventDefault();
      
      const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
      const targetPosition = target.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
};

// Initialize all animations
export const initAnimations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollReveal();
      initHeaderScroll();
      initSmoothScroll();
    });
  } else {
    initScrollReveal();
    initHeaderScroll();
    initSmoothScroll();
  }
};
