document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigation Sticky
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Effet Parallaxe (Performance optimisée)
  const heroBg = document.getElementById("hero-bg");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    // Ne calcule que si l'élément est dans la vue
    if (scrollPosition <= window.innerHeight) {
      // Déplace le fond à 40% de la vitesse du scroll
      heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
  });

  // 3. Reveal on Scroll (Intersection Observer)
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  const revealOptions = {
    threshold: 0.15, // Déclenche quand 15% de l'élément est visible
    rootMargin: "0px 0px -50px 0px",
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Ne joue l'anim qu'une fois
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => revealOnScroll.observe(el));

  // 4. Mini Admin Panel (Customizer)
  const adminPanel = document.getElementById("admin-panel");
  const adminToggle = document.getElementById("admin-toggle");
  const colorPicker = document.getElementById("color-picker");
  const bgPicker = document.getElementById("bg-picker");
  const root = document.documentElement;

  // Toggle Panel
  adminToggle.addEventListener("click", () => {
    adminPanel.classList.toggle("admin-closed");
  });

  // Change Primary Color
  colorPicker.addEventListener("input", (e) => {
    root.style.setProperty("--primary-color", e.target.value);
  });

  // Change Dark Background Color
  bgPicker.addEventListener("input", (e) => {
    root.style.setProperty("--bg-dark", e.target.value);
  });

  // Reset Theme
  document.getElementById("reset-theme").addEventListener("click", () => {
    root.style.removeProperty("--primary-color");
    root.style.removeProperty("--bg-dark");
    colorPicker.value = "#d4af37";
    bgPicker.value = "#121212";
  });
});
