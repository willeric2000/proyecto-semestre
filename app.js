const cards = document.querySelectorAll(".card");

const mostrarCards = () => {
  cards.forEach((card) => {
    const posicion = card.getBoundingClientRect().top;
    const pantalla = window.innerHeight * 0.85;

    if (posicion < pantalla) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", mostrarCards);
mostrarCards();

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.transition = "0.3s";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.03)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const hero = document.querySelector("section");

hero.style.opacity = "0";
hero.style.transform = "translateY(-30px)";

window.addEventListener("load", () => {
  setTimeout(() => {
    hero.style.transition = "1s";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
});
const imagenes = document.querySelectorAll(".img-fluid");

imagenes.forEach((img) => {
  img.style.transition = "0.4s";

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

const card = document.querySelector(".card");

card.style.opacity = "0";
card.style.transform = "translateY(40px)";

window.addEventListener("load", () => {
  setTimeout(() => {
    card.style.transition = "0.8s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 200);
});

const titulo = document.querySelector(".card-title");

titulo.style.opacity = "0";

window.addEventListener("load", () => {
  setTimeout(() => {
    titulo.style.transition = "1s";
    titulo.style.opacity = "1";
  }, 600);
});
