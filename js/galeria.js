const carousel = document.querySelector(".gallery");

const boxes = document.querySelectorAll(".box");
let currentIndex = 0;

function updateCarousel() {
  const angle = (360 / boxes.length) * currentIndex;
  carousel.style.transform = `rotateY(${angle}deg)`;
}

updateCarousel();

function validarFormulario() {
  return true;
}
