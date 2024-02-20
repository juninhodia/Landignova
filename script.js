document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // Ajuste este valor conforme necessário
          document.getElementById('header').classList.add('scrolled');
      } else {
          document.getElementById('header').classList.remove('scrolled');
      }
  });
});


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);