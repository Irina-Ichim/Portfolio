const hexagons = document.querySelectorAll(".hexagon");

function moveHexagon(hexagon) {
  const newX = Math.random() * (window.innerWidth / 2.5 - 50);
  const newY = Math.random() * (window.innerHeight / 2 - 50);

  hexagon.style.transform = `translate(${newX}px, ${newY}px)`;

  setTimeout(() => {
    requestAnimationFrame(() => {
      moveHexagon(hexagon);
    });
  }, 2000);
}

hexagons.forEach((hexagon) => {
  hexagon.style.position = "absolute";
  hexagon.style.transition = "transform 2s ease-in-out";

  const startX = -50;
  const startY = -50;

  hexagon.style.transform = `translate(${startX}px, ${startY}px)`;

  moveHexagon(hexagon);
});



function mostrarSiguiente() {
  var parrafos = document.querySelectorAll('.about-content p:not(.mostrar)');
  var siguienteParrafo = parrafos[0];

  if (siguienteParrafo) {
    siguienteParrafo.classList.add('mostrar');
    actualizarBotones();
  }
}

function mostrarMenos() {
  var parrafoVisible = document.querySelector('.about-content p.mostrar');

  if (parrafoVisible) {
    parrafoVisible.classList.remove('mostrar');
    actualizarBotones();
  }
}

function actualizarBotones() {
  var parrafos = document.querySelectorAll('.about-content p');
  var mostrarMas = document.querySelector('.mostrar-mas');
  var mostrarMenos = document.querySelector('.mostrar-menos');

  var parrafosMostrados = Array.from(parrafos).filter(function (parrafo) {
    return parrafo.classList.contains('mostrar');
  });

  if (parrafosMostrados.length === parrafos.length) {
    mostrarMas.style.display = 'none';
    mostrarMenos.style.display = 'inline-block';
  } else {
    mostrarMas.style.display = 'inline-block';
    mostrarMenos.style.display = 'none';
  }
}
