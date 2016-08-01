var x
var y
var count
var totalR
var totalB
var img
var start1x
var start1y
var start2x
var start2y
var start3x
var start3y
var context
var levelOne
var levelTwo
var levelThree
function sum(anArray,num){
	var count = 0;
	for (var i = 0; i < anArray.length; i++) {
		if (anArray[i]===num){
			count +=1
		}
	}
	return count
}	
 function setup(){
    createCanvas(600,600);
    x = 25;
   	y = 25;
    start1x = 25
    start1y = 25
    rectMode(CENTER);
    background(0);   
    fill(245,0,0)
    rect(x,y,25,25);
    fill(255,255,255);
    stroke(255,255,255);
    rect(0,50,600,10);
   	rect(450,200,10,450);
   	rect(450,500, 300, 10);
   	rect(300, 400, 10, 300);
   	rect(0, 450, 350, 10);
    levelOne = false
    levelTwo = false
    levelThree = true
    loadPixels();
    totalR = sum(pixels,245)
}

function draw(){
    if (levelOne === true){
    	x = 25
    	y = 25
    	rectMode(CENTER);
    	background(0);   
    	fill(245,0,0)
    	rect(x,y,25,25);
    	fill(255,255,255);
	    stroke(255,255,255);
    	rect(0,50,600,10);
   		rect(450,200,10,450);
	   	rect(450,500, 300, 10);
   		rect(300, 400, 10, 300);
   		rect(0, 450, 350, 10);
    	keyPressed();
    	endlevelOne();
    	loadPixels();
    	if (sum(pixels,245) < totalR){
    	youLose();
    	}
    }	
    if (levelTwo === true){
    	createCanvas(600,600)
    	start2x = 550
    	start2y = 550
    	rectMode(CENTER);
    	background(0);
    	fill(245,0,0);
    	rect(x,y,25,25);
    	fill(255,255,255);
    	stroke(255,255,255);
    	rect(350,500,10,200);
    	rect(435,450,175,10);
    	rect(515,400,220,10);
    	loadPixels();
    	keyPressed();
    	if (sum(pixels,245) < totalR){
    		youLose();
    	}
    }
    if (levelThree === true){
    	createCanvas(600,600)
    	start3x = 300
    	start3y = 300
    	rectMode(CENTER);
    	background(0);
    	fill(245,0,0);
    	rect(x,y,25,25);
    	fill(255,255,255);
    	stroke(255,255,255);
    	rect(200,270,500,10)
    	rect(300,335,500,10)
    	rect(400,450,500,10)
    	rect(450,290,10,65)    	
    	rect(50,450,10,59)
       	rect(350,580,10,59) 
    	rect(300,390,500,10)
    	rect(300,490,500,10)
    	rect(300,550,500,10)
    	rect(550,260,10,300)
    	rect(500,100,10,300)
    	rect(100,100,60,10)
    	rect(175,125,60,10)
    	rect(250,150,60,10)
    	rect(325,175,60,10)
    	rect(400,200,60,10)
    	rect(75,150,60,10)
    	rect(150,175,60,10)
    	rect(225,200,60,10)
    	rect(300,225,60,10)
    	rect(375,250,60,10)
    	rect(50,50,60,10)
    	rect(125,50,60,10)
    	rect(200,75,60,10)
    	rect(275,100,60,10)
    	rect(350,125,60,10)
    	rect(450,190,10,65)
    	rect(450,115,10,65)
    	rect(450,40,10,65)
    	endlevelThree()
    	keyPressed()
    	loadPixels()
    	if (sum(pixels,245) < totalR){
    		youLose();
    	}
    	
    }
}
function youLose(){
    if (levelOne === true){
    	x = start1x;
    	y = start1y;
    }
    if (levelTwo === true){
    	x = start2x;
     	y = start2y;
    } 	
    if (levelThree === true){
    	x = start3x;
     	y = start3y;
    }
}

 function keyPressed() {
  if (keyCode === LEFT_ARROW && keyIsPressed) {
    if (x>=10){
        x -= 2;
    }    
  } 
  else if (keyCode === RIGHT_ARROW && keyIsPressed) {
    if (x<590){
        x += 2;
    }    
  }
  if (keyCode === UP_ARROW && keyIsPressed) {
    if (y>=10){
        y -= 2;
    } 
  } 
  else if (keyCode === DOWN_ARROW && keyIsPressed) {
    if (y<590){
        y += 2;
    }
  }
 }
function endlevelOne(){
	//Center zone
    fill(255,255,0);
	rect(450,545, 100,55);
	//text "Zone"
	fill(0);
	stroke(0)
	rectMode(CORNERS);
	textAlign(CENTER);
	text("ZONE",350,540,200,50);
	if (x>380 && x < 560 && y>505 && y <600) {
		levelOne = false
		levelTwo = true
	}
}
function endlevelTwo(){
	//Center zone
    fill(255,255,0);
	rect(450,545, 100,55);
	//text "Zone"
	fill(0);
	stroke(0)
	rectMode(CORNERS);
	textAlign(CENTER);
	text("ZONE",350,540,200,50);
	if (x>380 && x < 560 && y>505 && y <600) {
		levelTwo = false
		levelThree = true
	}
}	
function endlevelThree(){
	//Center zone
    fill(255,255,0);
	rect(25,25, 100,50);
	//text "Zone"
	fill(0);
	stroke(0)
	rectMode(CORNERS);
	textAlign(CENTER);
	text("ZONE",0,0,100,150);
	if (x>300 && x < 400 && y>50 && y <105) {
		levelThree = false
		endgame()
	}
}
function endgame(){
	levelOne = true
}
