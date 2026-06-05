document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("section");

  hero.style.opacity = "0";
  hero.style.transform = "translateY(-30px)";

  setTimeout(() => {
    hero.style.transition = "all 1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 200);

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";
  });

  function mostrarCards() {
    cards.forEach((card) => {
      const posicion = card.getBoundingClientRect().top;

      if (posicion < window.innerHeight - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", mostrarCards);
  mostrarCards();

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(0) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });

  const botones = document.querySelectorAll(".btn");

  botones.forEach((boton) => {
    boton.addEventListener("mouseenter", () => {
      boton.style.transform = "scale(1.1)";
    });

    boton.addEventListener("mouseleave", () => {
      boton.style.transform = "scale(1)";
    });
  });
});
