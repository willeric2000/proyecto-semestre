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
});
