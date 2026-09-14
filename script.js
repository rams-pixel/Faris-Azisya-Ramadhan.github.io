// =========================
// TOGGLE MENU MOBILE
// =========================
const btnNav = document.getElementById('btnNav');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

btnNav.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// =========================
// TYPING EFFECT
// =========================
const typingEl = document.getElementById('typing');
const roles = ['Frontend Developer', 'Pelajar RPL', 'Pecinta Komik', 'Calon Web Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1400;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}
typeLoop();

// =========================
// SCROLLSPY (highlight menu aktif)
// =========================
const sections = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// =========================
// FORM KONTAK (simulasi kirim)
// =========================
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  toast.textContent = '✅ Terima kasih! Pesan kamu sudah terkirim.';
  toast.classList.add('show');

  contactForm.reset();

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
});
