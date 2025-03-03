/*
 * @name Continuous Lines
 * @arialabel Thin white line draws on a dark grey background as the user clicks and drags their mouse
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(1470, 690);
  background(10);
}

function draw() {
  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas (windowWidth,windowHeight)
}
