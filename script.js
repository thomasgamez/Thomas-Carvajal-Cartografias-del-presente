// Menú lateral tipo hamburguesa — compartido por todas las páginas
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-btn');
  var backdrop = document.querySelector('.backdrop');

  function closeMenu(){ document.body.classList.remove('menu-open'); }
  function toggleMenu(){ document.body.classList.toggle('menu-open'); }

  if (btn) btn.addEventListener('click', toggleMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // cerrar el menú al elegir una página (mejor experiencia en celular)
  document.querySelectorAll('.sidebar nav a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
});
