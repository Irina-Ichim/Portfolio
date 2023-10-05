const hexagons = document.querySelectorAll('.hexagon');

hexagons.forEach(hexagon => {
    hexagon.style.position = 'absolute';
    hexagon.style.transition = 'transform 2s ease-in-out';

    const startX = -50; 
    
    const startY = -50; 

    hexagon.style.transform = `translate(${startX}px, ${startY}px)`;

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

    moveHexagon(hexagon);
});


hexagons.forEach(hexagon => {
    moveHexagon(hexagon);
});


document.addEventListener("DOMContentLoaded", () => {
    const cubes = document.querySelectorAll(".cube");

    cubes.forEach((cube, index) => {
        cube.style.animationDelay = `${index * 0.2}s`; // Agregar retraso de animación
    });
});



