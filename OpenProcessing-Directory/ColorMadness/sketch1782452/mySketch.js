function setup() {
  createCanvas(1915, 915, WEBGL);  // Use the WEBGL renderer
  frameRate(30);  // Set the frame rate to 30 frames per second
	background(50);
}

function draw() {
	
	ambientLight(100);
  pointLight(250, 250, 250, 0, 0, 0);
	specularMaterial(222, 200, 180);
	camera(800, -100, 800, 100, 0, 0, 0, 1, 0);
	stroke(random(255),random(255),random(255));
	strokeWeight(0.5);
  noFill(random(255),random(255),random(255));
	rotateX(frameCount * 1);  // Rotate the shape along the X-axis
	rotateY(frameCount * 2);  // Rotate the shape along the Y-axis
	rotateZ(frameCount * 1.5);  // Rotate the shape along the Z-axis
	translate(random(width),random(height),0);  // Move the shape to a random position
	box(random(100), random(250), random(250));  // Draw a cube with fixed size
	torus(random(50), random(30)); // Draw a donut with fixed size...yum
}