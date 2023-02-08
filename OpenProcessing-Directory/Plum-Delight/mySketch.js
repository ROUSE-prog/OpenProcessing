let x = 0;
let y = 0;
let z = 0;
hu = 0;
function setup() {
  createCanvas(1900, 900, WEBGL);
	background(180,150,160,100);
	colorMode(HSB, 255);
	hu = random(255);
	frameRate(10);
}

function draw() {
	noFill();
	stroke((hu + 60+sin(frameCount/10)*120)%255, 255, 255, 255);
	strokeWeight(0.3);
  translate(random(x),random(y),random(z));
  rotateX(random(x));
  rotateY(random(y));
  rotateZ(random(z));
  box(random(1000));
  x += 0.01;
  y += 0.01;
  z += 0.01;
}
