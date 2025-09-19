document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  // Al iniciar la animación, oscurecer el fondo
  card.addEventListener("animationstart", () => {
    document.body.classList.add("dimmed");
  });

  // Al terminar la animación, aplicar desvanecimiento
  card.addEventListener("animationend", () => {
    setTimeout(() => {
      card.classList.add("fade-out");
      document.body.classList.add("fade-out");
    }, 3000);
  });
});
