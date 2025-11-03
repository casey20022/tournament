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

      // Add click listeners to each menu link to close the menu
      const menuLinks = mobileMenu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
        });
      });
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
