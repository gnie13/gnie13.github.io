// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// hero photo placeholder fallback (until assets/gavin.jpg exists)
const heroPhoto = document.getElementById('heroPhoto');
const heroImg = heroPhoto && heroPhoto.querySelector('img');
if (heroImg) {
  heroImg.addEventListener('error', () => heroPhoto.classList.add('is-empty'));
}

// dates
const now = new Date();
document.getElementById('year').textContent = now.getFullYear();
const nowDate = document.getElementById('nowDate');
if (nowDate) {
  nowDate.textContent = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
