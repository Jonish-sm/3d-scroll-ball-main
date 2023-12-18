document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".cuboid");
  const containers = document.querySelector(".cuboids");
  const containers1 = document.querySelector(".cuboids1");
  const containers2 = document.querySelector(".cuboids2");
  const containers3 = document.querySelector(".cuboids3");

  document.addEventListener("mousemove", function (event) {
    const mouseX = (event.clientX / window.innerWidth - 0.5) * 2; // Normalize to range [-1, 1]
    const mouseY = (event.clientY / window.innerHeight - 0.5) * 2; // Normalize to range [-1, 1]

    const rotationY = mouseX * 30;
    const rotationYs = mouseX * 60;

    container.style.transform = `translateZ(-150px) rotateY(${rotationY}deg)`;
    containers.style.transform = `translateZ(-150px) rotateY(${rotationYs}deg)`;
    containers1.style.transform = `translateZ(-150px) rotateY(${rotationYs}deg)`;
    containers2.style.transform = `translateZ(-150px) rotateY(${rotationYs}deg)`;
    containers3.style.transform = `translateZ(-150px) rotateY(${rotationYs}deg)`;
    console.log(rotationYs);
  });
});

/*
20deg is defult

*/
