
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinar() {
  let numeroUsuario = Number(
    document.getElementById("numero").value
  );

  let resultado = document.getElementById("resultado");

  if (numeroUsuario < 1 || numeroUsuario > 10) {
    resultado.innerHTML =
      "⚠️ Ingresá un número entre 1 y 10.";
    return;
  }

  if (numeroUsuario === numeroSecreto) {
    resultado.innerHTML =
      "🎉 ¡Correcto! Nada que ver con el perro pero tiene js. Adivinaste el número.";

    numeroSecreto = Math.floor(Math.random() * 10) + 1;
  } else if (numeroUsuario < numeroSecreto) {
    resultado.innerHTML =
      "⬆️ El número es más grande.";
  } else {
    resultado.innerHTML =
      "⬇️ El número es más chico.";
  }
}
