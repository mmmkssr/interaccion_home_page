function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(1);
  noFill();
  describe(
    "Users can click and drag to rotate the view, and move the mouse to dynamically change the size and color of floating 3D pyramids."
  );
}

function draw() {
  background(255, 228, 225);

  // Adjust camera based on mouse/touch
  orbitControl();

  // Set dynamic color based on mouse X position
  let dynamicColor = map(mouseX, 0, width, 100, 255);
  stroke(dynamicColor, 50, 150);

  // Dynamically adjust pyramid size based on mouse Y position
  let pyramidSize = map(mouseY, 0, height, 10, 80);

  // Create floating pyramids in a 3D grid
  for (let z = -200; z <= 200; z += 100) {
    for (let x = -200; x <= 200; x += 100) {
      push();
      translate(x, 0, z);
      rotateY(frameCount * 0.5); // Continuous rotation
      cone(pyramidSize, pyramidSize * 1.5);
      pop();
    }
  }
}
