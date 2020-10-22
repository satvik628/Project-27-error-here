
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.constraint;

var bob1,bob2,bob3,bob4,bob5,floor;
var rope1,rope2,rope3,rop4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    floor=new Floor(570,50,730,20)
	bob1=new Bob(400,450,80) 
	bob2=new Bob(480,450,80) 
	bob3=new Bob(560,450,80) 
	bob4=new Bob(640,450,80) 
	bob5=new Bob(720,450,80) 
	rope1=new Rope(bob1.body,floor.body,-bob1diameter*2,0)
	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  
  drawSprites();
  floor.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
}



