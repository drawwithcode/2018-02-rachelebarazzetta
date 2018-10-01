function preload(){
  // put preload code here
}



function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(115, 180, 171);
  angleMode(DEGREES);
  frameRate(60);
}

function draw() {
  // put drawing code here



//CENTRO

push();
  stroke(lerpColor(color('#FDAA27'), color('#E23051'), frameCount/130));
  strokeWeight(1);

  translate(width/2, height/2-91);
  rotate(frameCount*sin(frameCount));
  translate(frameCount,0);
  rotate(frameCount*cos(frameCount));
  translate(-10,frameCount);

  line( sin(frameCount)*50, cos(frameCount)*50 ,sin(0)*100, cos(0)*100);
pop();

push();
  stroke(lerpColor(color('#FDAA27'), color('#E23051'), frameCount/130));
  strokeWeight(1);

  translate(width/2, height/2+91);
  rotate(180);
  rotate(frameCount*sin(frameCount));
  translate(frameCount,0);
  rotate(frameCount*cos(frameCount));
  translate(-10,frameCount);

  line( sin(frameCount)*50, cos(frameCount)*50 ,sin(0)*100, cos(0)*100);
pop();

push();
  stroke(lerpColor(color('#FDAA27'), color('#E23051'), frameCount/130));
  strokeWeight(1);

  translate(width/2-91, height/2);
  rotate(270);
  rotate(frameCount*sin(frameCount));
  translate(frameCount,0);
  rotate(frameCount*cos(frameCount));
  translate(-10,frameCount);

  line( sin(frameCount)*50, cos(frameCount)*50 ,sin(0)*100, cos(0)*100);
pop();

push();
  stroke(lerpColor(color('#FDAA27'), color('#E23051'), frameCount/130));
  strokeWeight(1);

  translate(width/2+91, height/2);
  rotate(90);
  rotate(frameCount*sin(frameCount));
  translate(frameCount,0);
  rotate(frameCount*cos(frameCount));
  translate(-10,frameCount);

  line( sin(frameCount)*50, cos(frameCount)*50 ,sin(0)*100, cos(0)*100);
pop();



//ALTO A SINISTRA
push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2-400, height/2-150-91);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2-400, height/2+91-150);
  rotate(180);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2-91-400, height/2-150);
  rotate(270);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2+91-400, height/2-150);
  rotate(90);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

//Basso A sinistra
push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2-400, height/2+150-91);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2-400, height/2+91+150);
  rotate(180);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2-91-400, height/2+150);
  rotate(270);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2+91-400, height/2+150);
  rotate(90);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();


//basso A sinistra
push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2+400, height/2+150-91);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2+400, height/2+91+150);
  rotate(180);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2-91+400, height/2+150);
  rotate(270);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2+91+400, height/2+150);
  rotate(90);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();


//alto A sinistra
push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2+400, height/2-150-91);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FE6525'), frameCount/100));
  strokeWeight(1);

  translate(width/2+400, height/2+91-150);
  rotate(180);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2-91+400, height/2-150);
  rotate(270);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

push();
  stroke(lerpColor(color('#FFFFFF'), color('#FDAA27'), frameCount/100));
  strokeWeight(1);

  translate(width/2+91+400, height/2-150);
  rotate(90);
  rotate(frameCount);
  translate(frameCount,0);
  rotate(frameCount);
  translate(-10,frameCount);

  line( sin(frameCount)*10, cos(frameCount)*10 ,sin(0)*10, cos(0)*10);
pop();

if(frameCount==142){
  noLoop();

}


}
