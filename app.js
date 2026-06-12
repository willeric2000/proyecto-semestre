document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const destino = document.querySelector(link.getAttribute("href"));

      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  const cardsColaboradores = document.querySelectorAll("#colaboradores .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cardsColaboradores.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("visible");
            }, index * 250);
          });
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  const seccion = document.querySelector("#colaboradores");

  if (seccion) {
    observer.observe(seccion);
  }
  let clicksVolver = 0;

window.volverInicio = function () {
  clicksVolver++;

  if (clicksVolver === 1) {
    alert("Probá de nuevo 😄");
  } else {
    window.location.href = "index.html";
  }
  

  



document.querySelectorAll(".img-fluid").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom");
  });
});


};
});
