var drop = [];
var hasClicked = false;
var xpos = 0;
var ypos = 0;
var mySound;
var sound;
var noise;

function preload() {
  soundFormats('mp3')
  for (var m = 0; m < 15; m++) {
   music = loadSound('mwtofty.mp3')
 music.rate(0.9 * pow(1, m /12));
   
  }
}

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  for (var i = 0; i < 25; i++) {
    drop[i] = new Drop();
 //  music.play();
// music.setVolume(0.2);
   



  }
}


var sleighx= -320; 
var sleighy=0;
var changeInX= 2; 
var changeInY=0;  

function draw() {
  background(212, 64, 33);
  
  fill(100); 
 ellipse(20,30,190,190); 
  

   if (hasClicked) {
    fill(0);
    rect(xpos, ypos, 40, 40);
    ypos += 6;
  }
  

  for (var i = 0; i < 25; i++) {
    drop[i].show();
    drop[i].update();
  }
    
  //chimneys
  fill(0); 
  rect(20,430,110,250); 
  rect(10,410,130,25,90);
  rect(190,530,120,250);
  rect(180,520,140,40,90); 
  rect(425,400,110,350); 
  rect(410,400,140,30,90); 
  
 sleighx= sleighx + changeInX; 
  
    if (sleighx < 0) {
    changeInX = 3;
     }
  
  if (sleighx >width) { 
    sleighx=-620
  }
  
   sleighy= sleighy+changeInY;
  translate(sleighx, sleighy);
  
   
  // sleigh
  fill(0);
  strokeWeight(2);
  rect(20, 130, 120, 40);
  line(160, 190, 10, 190);
  line(120, 140, 20, 190);
  line(100, 170, 130, 190);
  rect(10, 100, 20, 70, 90);
  rect(130, 130, 40, 40);
  rect(140, 120, 30, 20, 30);
  rect(100, 110, 390, 2);
  rect(15,200,150,5,90);
  rect(30,170,5,30);
  rect(140,170,5,30);


  //santa 
  rect(120, 100, 20, 20);
  ellipse(110, 120, 50, 50);
  ellipse(110, 90, 30, 30);
  ellipse(105, 80, 30, 20);
  rect(130, 105, 15, 10, 90);
  rect(85, 80, 10, 7);
  ellipse(81, 83, 10, 10);

  //presents inside sleigh
  rect(40, 120, 40, 40);
  rect(45, 110, 30, 30);
  ellipse(55, 110, 10, 15);
  ellipse(65, 110, 10, 15);
  
  //front reindeer
  rect(420, 120, 80, 40, 90);
  ellipse(430, 120, 15, 15);
  rect(470, 80, 30, 70, 90);
  rect(470, 70, 40, 30, 90);
  rect(470, 40, 5, 70, 90);
  rect(490, 40, 5, 70, 90);
  
  //front legs
  rect(490, 140, 30, 10);
  rect(420, 143, 10, 40, 90);
  rect(410, 140, 15, 10, 90);
  rect(490, 150, 10, 40, 90);

    
  //back legs 
  rect(400, 140, 30, 10, 90);
  rect(400, 130, 10, 20, 90);
  rect(515, 140, 10, 50, 90);
  
  //back reindeer nose
  ellipse(310, 85, 15, 15);

  
  //back reindeer
  rect(220, 120, 80, 40, 90);
  ellipse(230, 120, 15, 15);
  rect(270, 80, 30, 70, 90);
  rect(270, 70, 40, 30, 90);
  rect(270, 40, 5, 70, 90);
  rect(290, 40, 5, 70, 90);

  //front legs
  rect(290, 140, 30, 10);
  rect(315, 143, 10, 40, 90);
  rect(310, 140, 15, 10, 90);
  rect(290, 150, 10, 40, 90);
  
  //back legs 
  rect(200, 140, 30, 10, 90);
  rect(200, 130, 10, 20, 90);
  rect(225, 140, 10, 50, 90);
  // rect(210,160,20,10,90); 

  // front reindeer nose
  fill(3, 87, 100);
  ellipse(510, 85, 15, 15);

}

function mousePressed() {
  hasClicked = true;
  xpos = mouseX;
  ypos = mouseY;

}

function Drop() {
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {

    noStroke();

    fill(100);
    strokeWeight(1);
    ellipse(this.x, this.y, 5, 5);
  }
  this.update = function() {
    this.speed = random(1, 1);
    this.gravity = 1.05;
    this.y = this.y + this.speed * this.gravity

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
}