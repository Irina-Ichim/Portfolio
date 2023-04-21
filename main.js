
const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
  const x = e.pageX - box.offsetLeft;
  const y = e.pageY - box.offsetTop;

  box.style.transformOrigin = `${x}px ${y}px`;
});

box.addEventListener('mouseout', () => {
  box.style.transformOrigin = 'center';
});

  


    
      