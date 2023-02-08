let angle;

function setup() {
  createCanvas(windowHeight, windowWidth);
  angle = PI /10;
  strokeWeight(0.4);
	background(255);
}

function draw() {
  stroke(random(150),random(200),random(150));
  translate(random(1900), height);
  branch(random(350));
	translate(random(1900), height,);
	branch(60);
	translate(random(1900), height);
	branch(80);
	translate(random(1900), height);
	branch(90);
	translate(random(1900), height);
	branch(110);
	translate(random(1900), height);
	branch(350);
	translate(random(1900), height);
	branch(1000);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
