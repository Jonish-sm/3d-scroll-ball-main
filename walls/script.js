// FIRST WALL
$(document).ready(function () {
  function updateBoxRotation() {
    var rotateX = $("#rotateX").val();
    var rotateY = $("#rotateY").val();
    var rotateZ = $("#rotateZ").val();

    $(".box").css(
      "transform",
      "rotateX(" +
        rotateX +
        "deg) rotateY(" +
        rotateY +
        "deg) rotateZ(" +
        rotateZ +
        "deg)"
    );
  }

  $("#rotateX, #rotateY, #rotateZ").on("input", updateBoxRotation);

  updateBoxRotation(); // Initialize with default values
});

// SECOND WALL
$(document).ready(function () {
  function updateBoxRotation() {
    var rotateXs = $("#rotateXs").val();
    var rotateYs = $("#rotateYs").val();
    var rotateZs = $("#rotateZs").val();

    $(".boxs").css(
      "transform",
      "rotateX(" +
        rotateXs +
        "deg) rotateY(" +
        rotateYs +
        "deg) rotateZ(" +
        rotateZs +
        "deg)"
    );
  }

  $("#rotateXs, #rotateYs, #rotateZs").on("input", updateBoxRotation);

  updateBoxRotation(); // Initialize with default values
});

// MAIN ROOM CONTROL

// MAIN ROOM CONTROL
$(document).ready(function () {
  function updateContainerRotation() {
    var rotateXs1 = $("#rotateXs1").val();
    var rotateYs1 = $("#rotateYs1").val();
    var rotateZs1 = $("#rotateZs1").val();

    $(".inner_container").css(
      "transform",
      "rotateX(" +
        rotateXs1 +
        "deg) rotateY(" +
        rotateYs1 +
        "deg) rotateZ(" +
        rotateZs1 +
        "deg)"
    );
  }

  $("#rotateXs1, #rotateYs1, #rotateZs1").on("input", updateContainerRotation);

  updateContainerRotation(); // Initialize with default values
});
