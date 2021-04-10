
const Engine = Matter.Engine;       
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles =[];
var plinkos =[];
var divisions =[];


var score = 0;

var divisionHeight = 200;

function preload()
{
	
}

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
  world = engine.world;



  engine = Engine.create();
  world = engine.world;


  //Create the Bodies Here.

  ground = new  Ground(240,590,1200,20);


  for (var k=0; k <=width; k = k+80) {
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j = 75; j <=width; j = j+50) {
  plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j = j+50) {
  plinkos.push(new Plinko(j,175));
  }

  
  for (var j = 75; j <=width; j = j+50) {
    plinkos.push(new Plinko(j,275));
  }
 
  for (var j = 50; j <=width-10; j = j+50) {
    plinkos.push(new Plinko(j,375));
  }
   
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();    

  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  

  for(var i = 0;i<divisions.length;i++){
    divisions[i].display();
  }
 
  if(frameCount%60 === 0){
      var x = random(width/2-100,width/2+100);
      particles.push(new Particles(x,10,10));
      score++;
  }


  for(var i = 0;i<particles.length;i++){
    particles[i].display();
  }
  
  drawSprites();
 
  
}
