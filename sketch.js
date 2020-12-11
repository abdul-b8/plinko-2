var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle
//var turn=0

var PLAY = 0;
var END = 1;
var gameState = 0;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     particles = null;
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particles.x > 0 && particles.x < 80 && particles.y === 600){
        score = score+125
   }

   if (particles.x > 80 && particles.x < 160 && particles.y === 600){
     score = score+250
   }

   if (particles.x > 160 && particles.x < 240 && particles.y === 600){
     score = score+500
   }

   if (particles.x > 240 && particles.x < 320 && particles.y === 600){
     score = score+500
   }

   if (particles.x > 320 && particles.x < 400 && particles.y === 600){
     score = score+250
   }

   if (particles.x > 400 && particles.x < 480 && particles.y === 600){
     score = score+125
   }
}

function mousePressed(){
   if (gameState == "end"){
      count++;
      particle = new Particle (mouseX,10,10,10);
   }
}