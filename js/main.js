document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("mousemove", (e) => {
    const x = e.pageX - box.offsetLeft;
    const y = e.pageY - box.offsetTop;

    box.style.transformOrigin = `${x}px ${y}px`;
  });

  box.addEventListener("mouseout", () => {
    box.style.transformOrigin = "center";
  });

  let typed = new Typed(".multiple-text", {
    strings: [
      "Desarolladora Full-Stack",
      "Administradora de sitios WordPress",
      " Conocedora de SEO y SEM",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});
