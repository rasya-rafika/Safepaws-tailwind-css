// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};
// Navbar Fixed saat pertama kali load
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  header.classList.add('navbar-fixed'); // Buat navbar langsung muncul

  window.onscroll = function () {
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  const loginDropdown = document.getElementById('loginDropdown');

  if (loginButton && loginDropdown) {
    loginButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Tombol Login Diklik!'); // 🔥 Debug
      loginDropdown.classList.toggle('hidden');
    });

    // Menutup dropdown saat klik di luar area dropdown
    window.addEventListener('click', (event) => {
      if (!loginDropdown.contains(event.target) && !loginButton.contains(event.target)) {
        loginDropdown.classList.add('hidden');
      }
    });
  }
});
