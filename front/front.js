document.addEventListener("DOMContentLoaded", function () {
  // Use querySelectorAll to select all elements with the class "parallax"
  const parallaxEls = document.querySelectorAll(".parallax");
  const wallDegs = [-40, 0, -80, 0, 0, -20, -50, 40];
  const perspect = [1500, 1500, 1000, 1500, 1500, 1500, 1500, 1500];
  let xValue = 0;
  let yValue = 0;

  function update(clientX) {
    if (parallaxEls.length > 0) {
      // Iterate through each element and apply the rotation transformation
      parallaxEls.forEach((el, index) => {
        let rotationSpeed = el.dataset.rotation;
        let speedX = el.dataset.speedx;
        let speedZ = el.dataset.speedz;
        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;

        let zValue =
          (clientX - parseFloat(getComputedStyle(el).left)) * isInLeft;

        el.style.transform = ` rotateY(${
          wallDegs[index] + xValue * rotationSpeed
        }deg)`;
        console.log(wallDegs);
      });
    } else {
      console.error('No element with the class "parallax" found.');
    }
  }
  update();
  window.addEventListener("mousemove", (e) => {
    xValue = (e.clientX - window.innerWidth / 2) / 25;
    update(e.clientX);
  });

  // Check if there are elements with the class "parallax"
});
