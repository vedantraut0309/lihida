document.addEventListener('DOMContentLoaded', () => {
  // ================= MOBILE MENU TOGGLE =================
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      // Toggles the 'hidden' class to show/hide the menu
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ================= CAROUSEL LOGIC (For index.html) =================
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (slides.length > 0) {
    let currentSlide = 0;

    const showSlide = (index) => {
      // Handle wrapping around
      if (index >= slides.length) currentSlide = 0;
      else if (index < 0) currentSlide = slides.length - 1;
      else currentSlide = index;

      // Update slides visibility
      slides.forEach((slide) => slide.classList.remove('active-slide'));
      slides[currentSlide].classList.add('active-slide');

      // Update dots status
      dots.forEach((dot) => dot.classList.remove('active-dot'));
      if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active-dot');
      }
    };

    // Event Listeners for Controls
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });

    // Auto-play functionality (Change slide every 5 seconds)
    setInterval(() => showSlide(currentSlide + 1), 5000);
  }
});