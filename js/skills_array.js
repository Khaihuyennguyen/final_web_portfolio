let cities = ["Paderborn", "Münster", "Amsterdam", "Lisbon", "Paris"];
function preload() {
  font = "arial";
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  let index = int(
    constrain(map(mouseX, 0, width, 0, cities.length), 0, cities.length - 1)
  );

  let w = width / cities.length;

  noStroke();
  fill("#444444");
  rect(w * index, 0, w, height);

  fill("#f1f1f1");
  push();
  translate(width / 2, height / 2);
  textFont(font);
  textSize(100);
  textAlign(CENTER, CENTER);
  text(cities[index], 0, 0);
  pop();
  fill("#ff0000");
  ellipse(mouseX, mouseY, 40, 40);
}