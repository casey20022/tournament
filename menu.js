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

// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Fetch and load menu items
  fetch('https://casey20022.github.io/tournament/menu-items.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load menu');
      }
      return response.text();
    })
    .then(data => {
      mobileMenu.innerHTML = data;  // Insert the menu HTML
    })
    .catch(error => {
      console.error('Error loading menu:', error);
      mobileMenu.innerHTML = '<p>Error loading menu. Please try again later.</p>';  // Fallback
    });

  // Toggle menu visibility on click
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
});
