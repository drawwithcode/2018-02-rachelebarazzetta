function preload(){
  // put preload code here
}

  var r= 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(109, 175, 166);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  // put drawing code here





push();
  stroke(lerpColor(color('#FE6525'), color('#FDAA27'), frameCount/360));
  strokeWeight(1);
  translate(windowWidth/2, windowHeight/2);
  rotate(frameCount);
  rotate(270);


  line( sin(frameCount)*300, cos(frameCount)*300 ,sin(0)*300, cos(0)*300);


  pop();

  if(frameCount==360){
    noLoop();
  }



}
