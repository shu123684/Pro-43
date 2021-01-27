function setup() {
  createCanvas(400,400);
  // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200 ,200);
  rotate(-90)
  
  let hr = hour();
  let min = minute();
  let sec = second()

  strokeWeight(8);
  // Second
  stroke(255, 100, 150);
  noFill();
  let secAngle = map(sec, 0 , 60, 0, 360);
  arc(0 ,0, 300, 300, 0, secAngle);

  push()
  rotate(secAngle);
  line(0,0,100,0);
  pop(); 

  // minute
  stroke(150, 100, 255);
  let minAngle = map(min, 0 , 60, 0, 360);
  arc(0 ,0, 280, 280, 0,minAngle);

  push()
  rotate(minAngle);
  line(0,0,75,0);
  pop();

  // hour 
  stroke(150, 255, 100);
  let hrAngle = map(hr % 12, 0 , 12, 0, 360);
  arc(0 ,0, 260, 260, 0, hrAngle);

  push()
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  drawSprites();
}