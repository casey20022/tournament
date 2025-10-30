document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.classList.remove('active');
    }
  });

  // Collapse menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
    });
  });
});
