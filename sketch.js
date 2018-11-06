function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  textFont('Bangers');
  fill(255, 88, 43);
  textSize(70);
  textAlign(CENTER);
  text('Make noise and see what happens!', width / 2, 100);


  var volume = mic.getLevel();

  background(255, 208, 43, 70);

  volume = map(volume, 0, 1, 50, width / 2)

  noStroke();
  fill(405, 70, volume + 20, 70);
  rectMode(CENTER);

  rect(width / 2, height / 2, 50 + volume, volume)
  rect(width / 4, height / 2, 50 + volume, volume)
  rect(width / 4 + width / 2, height / 2, 50 + volume, volume)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
