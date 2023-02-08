let t = 0; // time variable
let hu = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 255);
	hu = random(255);
	
}

function draw() {
	background(10,10); // translucent background (creates trails)
	stroke((hu + 120 + sin(frameCount / 30) * 120) % 255, 200, 255, 100);
	strokeWeight(2.5)

	// make a x and y grid of ellipses
	for (let x = 0; x <= width; x = x + 30) {
		for (let y = 0; y <= height; y = y + 30) {
			// starting point of each circle depends on mouse position
			const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
			const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
			// and also varies based on the particle's location
			const angle = xAngle * (x / width) + yAngle * (y / height);

			// each particle moves in a circle
			const myX = x + 10 * cos(2 * PI * t + angle);
			const myY = y + 10 * sin(2 * PI * t + angle);

			ellipse(myX, myY, 1); // draw particle
		}
	}

	t = t + 0.01; // update time
}