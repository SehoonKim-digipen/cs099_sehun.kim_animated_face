/* Sehun Kim 
   Animate a Face
   cs099s20 
   Spring 2020 */

let an = 0
let y3 = 0
let y4
let ex
let ey
let angle = 50
let CC
let CCC

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  rectMode(CENTER)
  noCursor()
}

function draw() {
  colorMode(HSB)
  background(map(y3, 210, 260, 0, 255), 55, 255);
  colorMode(RGB)

  fill('#0095d2')
  beginShape();
  vertex(55, 186)
  vertex(96, 159)
  vertex(157, 150)
  vertex(253, 150)
  vertex(298, 159)
  vertex(324, 181)
  vertex(343, 209)
  vertex(341, 281)
  vertex(314, 309)
  vertex(271, 321)
  vertex(222, 328)
  vertex(175, 327)
  vertex(110, 313)
  vertex(69, 281)
  vertex(54, 239)
  endShape();

  fill(255)
  circle(157, 152, 80)
  circle(243, 152, 80)

  fill(0)
  let x = 157;
  let y = 152;
  let angle = atan2(mouseY - y, mouseX - x)
  let ex = x + cos(angle) * 15
  let ey = y + sin(angle) * 15
  circle(ex, ey, 40)

  let x2 = 243;
  let angle2 = atan2(mouseY - y, mouseX - x2)
  let ex2 = x2 + sin(angle) * 15
  let ey2 = y + cos(angle) * 15
  circle(ex2, ey2, 40)

  rect(200, 233, 196, 38)
  arc(200, 223, 220, 130, 17, 163)

  noStroke()
  fill('#0095d2')
  rect(200, 195, 200, 20)


  if (mouseY < 200) {
    CC = map(mouseY, 0, 200, 5, 1.5)
  } else {
    CC = map(mouseY, 200, 400, 1.5, 5)
  }
  if (mouseX < 200) {
    CCC = map(mouseX, 0, 200, 5, 1.5)
  } else {
    CCC = map(mouseX, 200, 400, 1.5, 5)
  }

  y3 = 233 + sin(an) * 20;
  y4 = 237 + cos(an) * 20;
  y5 = 183 + cos(an) * 5;
  y6 = 212 + cos(an) * 5;
  y7 = 266 + cos(an) * 5;
  an += PI / CCC * deltaTime / CC;

  arc(200, y3, 250, 150, 17, 163, OPEN)
  push()
  rectMode(CORNER);
  rect(100, 200, 200, y4 - 200)
  pop()

  triangle(55, y5, 82, 176, 78, 183)
  triangle(335, y5, 312, 176, 318, 183)
  triangle(48, y6, 62, 216, 58, 223)
  triangle(348, y6, 332, 216, 338, 223)
  triangle(56, y7, 72, 269, 68, 263)
  triangle(348, y7, 332, 269, 338, 263)

  fill('#eb924a')
  circle(mouseX, mouseY, 80)
  fill('#492d1b')
  circle(mouseX - 25, mouseY, 10)
  circle(mouseX + 20, mouseY + 20, 10)
  circle(mouseX, mouseY - 20, 10)

  /*strokeWeight(1);
  text(mouseX, 5, 390);
  text(mouseY, 32, 390);*/
}