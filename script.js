document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a"); // Get all links inside nav

  // Toggle menu on hamburger button click
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Toggle ARIA attribute for accessibility
    const isExpanded = navLinks.classList.contains("active");
    hamburgerBtn.setAttribute("aria-expanded", isExpanded);
    // Also toggle active class on button for styling (like the 'X')
    hamburgerBtn.classList.toggle("active");
  });

  // Close menu when a navigation link is clicked
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburgerBtn.classList.remove("active"); // Remove 'X' style
        hamburgerBtn.setAttribute("aria-expanded", "false"); // Update ARIA
      }
    });
  });

  // Optional: Close menu if clicked outside (more advanced)
  // document.addEventListener('click', (event) => {
  //     const isClickInsideNav = navLinks.contains(event.target);
  //     const isClickOnHamburger = hamburgerBtn.contains(event.target);
  //
  //     if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
  //         navLinks.classList.remove('active');
  //         hamburgerBtn.classList.remove('active');
  //         hamburgerBtn.setAttribute('aria-expanded', 'false');
  //     }
  // });
}); // End DOMContentLoaded
