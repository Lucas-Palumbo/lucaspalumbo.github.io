const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 0.8s ease';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
