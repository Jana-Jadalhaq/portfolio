// ------------------------------
// Mobile Menu
// ------------------------------
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}

// ------------------------------
// Fade-in Animation
// ------------------------------
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .hero').forEach(sec => {
  sec.classList.add('fade-in');
  observer.observe(sec);
});

// ------------------------------
// Skill Bar Animation
// ------------------------------
const skills = document.querySelectorAll('.skill-fill');
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.getAttribute('data-width');
    }
  });
}, { threshold: 0.5 });

skills.forEach(bar => skillObs.observe(bar));

// ------------------------------
// Theme Toggle
// ------------------------------
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// ------------------------------
// Smooth Scroll (Internal Sections Only)
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (navLinks) navLinks.classList.remove('show');
  });
});

// ------------------------------
// External Links — Open Normally
// ------------------------------
document.querySelectorAll('a[href^="http"], a[href^="mailto"]').forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});
function toggleImages(id) {
  const gallery = document.getElementById(id);
  gallery.classList.toggle("hidden");

  // Change button text when toggled
  const button = document.querySelector(`button[onclick="toggleImages('${id}')"]`);
  button.textContent =
    gallery.classList.contains("hidden")
      ? "Show Project Screenshots"
      : "Hide Project Screenshots";
}
