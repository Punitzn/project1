document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(reveal => {
    observer.observe(reveal);
  });

  // Bubble scroll effect
  const bubble = document.getElementById('scroll-bubble');
  function handleBubble() {
    const scrollY = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / docHeight, 1);

    // Bubble grows from 60px to 200px
    const size = 60 + progress * 140;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';

    // Break effect when at the bottom
    if (progress >= 0.98) {
      bubble.classList.add('break');
    } else {
      bubble.classList.remove('break');
    }
  }

  window.addEventListener('scroll', handleBubble);
  handleBubble();
});