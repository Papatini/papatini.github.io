$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(375, 700, 50, 10, "blue");
    createPlatform(485, 565, 30, 5, "blue");
    createPlatform(600, 490, 500, 10, "purple");
    createPlatform(1100, 490, 10, 300, "purple");
    createPlatform(1135, 570, 30, 5, "red");
    createPlatform(1335, 620, 30, 5, "red");
    createPlatform(1200, 390, 200, 10, "purple");
    createPlatform(100, 300, 1000, 10, "yellow");
    createPlatform(100, 100, 5, 200, "yellow");
    createPlatform(100, 100, 1300, 10, "yellow");


    // TODO 3 - Create Collectables
    createCollectable("bass", 1030, 650, 0, 0);
    createCollectable("alto", 1130, 600, 1, 1);
    createCollectable("treble_and_staff", 130, 130, 0, 0);


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 0, 500);
    createCannon("top", 1300, 1500);
    createCannon("left", 660, 1500);
    createCannon("right", 210, 1500);
    createCannon("left", 190, 1500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
