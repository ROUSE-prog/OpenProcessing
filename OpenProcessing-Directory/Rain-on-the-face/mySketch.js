// Declare variables for raindrop position, size, and number of raindrops
let xpos = [];
let ypos = [];
let zpos = [];
let size = [];
let numDrops;

function setup() {
  // Set canvas size
  createCanvas(1900, 900, WEBGL);
	
  // Initialize raindrop position, size, and number of raindrops
  numDrops = int(random(50, 15));
  for (let i = 0; i < numDrops; i++) {
    xpos[i] = random(-width/2, width/2);
    ypos[i] = -100;
    zpos[i] = random(-height/1, height/3);
    size[i] = random(5, 15);
  }
  // Set frame rate
  frameRate(30);
}

function draw() {
  // Set background color to white
 background(225,245,255);
  // Set raindrop color to blue
  fill(0, 255, 255, random(255));
  // Set up lighting
  ambientLight(255);
  directionalLight(255, 255, 255, 0, 1, 0);
  // Draw and update raindrops
  for (let i = 0; i < numDrops; i++) {
    push();
    // Position and scale raindrop
    translate(xpos[i], ypos[i], zpos[i]);
    scale(random([i]));
    // Draw raindrop as sphere
    sphere(0.7);
    pop();
    // Update raindrop position at random intervals
    if (random(0, 1) < 0.1) {
      ypos[i] += 50;
    }
    // If raindrop goes off screen, reset its position
    if (ypos[i] > height/2) {
      ypos[i] = 0;
      xpos[i] = random(-width/2, width/2);
      zpos[i] = random(-height/2, height/2);
      
    }
  }
}
