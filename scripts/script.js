const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.nav-regular');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.add('visible');
  navBar.classList.add('hidden');
  closeBtn.classList.add('visable');
});

closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('visible');
  navBar.classList.remove('hidden');
  closeBtn.classList.remove('visable');
});
