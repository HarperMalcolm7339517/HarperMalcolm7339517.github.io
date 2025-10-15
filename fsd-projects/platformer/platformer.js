$(function () {  // initialize canvas and context when able to
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
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(680, 650, 124, 17);
createPlatform(350, 520, 220, 12);  
createPlatform(900, 300, 290, 20);
createPlatform(650, 400, 150, 12);
createPlatform(650, 210, 147, 13);
createPlatform(250, 200, 234, 15);
    



    // TODO 3 - Create Collectables
createCollectable("steve", 400, 490);
createCollectable("diamond", 1000, 270);
createCollectable("grace", 400, 70);

   
    // TODO 4 - Create Cannons


   
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
createCannon("left", 200, 20);
createCannon("top", 500, 5);
createCannon("bottom", 1200, 17);