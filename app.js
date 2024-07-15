function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon i');

  menuLinks.classList.toggle('open');

  if (menuLinks.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
}
