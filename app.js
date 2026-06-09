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

  const elementos = document.querySelectorAll(".card, h2, footer");

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  elementos.forEach((item) => {
    item.classList.add("reveal");
    observador.observe(item);
  });

  const tarjetas = document.querySelectorAll(".card");

  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mousemove", (e) => {
      const rect = tarjeta.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const giroX = (y / rect.height - 0.5) * -12;
      const giroY = (x / rect.width - 0.5) * 12;

      tarjeta.style.transform = `
        perspective(1000px)
        rotateX(${giroX}deg)
        rotateY(${giroY}deg)
        translateY(-8px)
      `;
    });

    tarjeta.addEventListener("mouseleave", () => {
      tarjeta.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    });
  });

  const barra = document.querySelector(".navbar");

  if (barra) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        barra.style.background = "rgba(13,110,253,.95)";
        barra.style.backdropFilter = "blur(10px)";
        barra.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
      } else {
        barra.style.background = "";
        barra.style.backdropFilter = "";
        barra.style.boxShadow = "";
      }
    });
  }

  document.querySelectorAll(".btn").forEach((boton) => {
    boton.addEventListener("mousemove", (e) => {
      const rect = boton.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      boton.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    boton.addEventListener("mouseleave", () => {
      boton.style.transform = "translate(0,0)";
    });
  });

  const titulo = document.querySelector("h1");
  const texto = document.querySelector("section p");
  const botonPrincipal = document.querySelector("section .btn");

  if (titulo) {
    titulo.animate(
      [
        {
          opacity: 0,
          transform: "translateY(50px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 1000,
        fill: "forwards",
        easing: "ease-out",
      },
    );
  }

  if (texto) {
    texto.animate(
      [
        {
          opacity: 0,
          transform: "translateY(25px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 1200,
        delay: 250,
        fill: "forwards",
        easing: "ease-out",
      },
    );
  }

  if (botonPrincipal) {
    botonPrincipal.animate(
      [
        {
          opacity: 0,
          transform: "translateY(20px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 1200,
        delay: 500,
        fill: "forwards",
        easing: "ease-out",
      },
    );
  }

  document.querySelectorAll(".card img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.filter = "brightness(1.08) saturate(1.15)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.filter = "";
    });
  });

  const cardsColaboradores = document.querySelectorAll("#colaboradores .card");

  const seccionColaboradores = document.querySelector("#colaboradores");

  if (seccionColaboradores) {
    const observerColaboradores = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardsColaboradores.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 300);
            });
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observerColaboradores.observe(seccionColaboradores);
  }
});
