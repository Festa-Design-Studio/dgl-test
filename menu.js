document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");
  
    // Show the menu when the hamburger button is clicked
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  
    // Hide the menu when the close button is clicked
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });