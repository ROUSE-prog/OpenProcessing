hu = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB, 255);
	hu = random(255);

	frameRate(12);
}

function draw() {
	background(200,200,0);
	stroke((hu + 60+sin(frameCount/30)*120)%255, 255, 255, 255)
	strokeWeight(0.3);
	noFill(0);
	rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  rotateZ( 0.1);
  for (let j = 0; j < 25; j++) {
    push();
    for (let i = 0; i < 50; i++) {
      translate(
        noise(frameCount * 0.1 + j) * 100,
        noise(frameCount * 0.001 + j) * 100,
        i++
      );
      rotateZ(frameCount * 0.002);
      push();
      sphere(5, 5, 5);
      pop();
    }
    pop();
  }
}
