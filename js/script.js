document.addEventListener("DOMContentLoaded", () => {

  // 1. Navigation Sticky
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        navbar.style.color = "black";
    } else {
        navbar.classList.remove("scrolled");
        navbar.style.color = "white";
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

});
