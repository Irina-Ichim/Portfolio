const carousel = document.querySelector(".gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const boxes = document.querySelectorAll(".box");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % boxes.length;
  updateCarousel();
});

function updateCarousel() {
  const angle = (360 / boxes.length) * currentIndex;
  carousel.style.transform = `rotateY(${angle}deg)`;
}

updateCarousel();

function validarFormulario() {
  return true;
}
