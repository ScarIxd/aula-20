
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane 
var plane_options={
	isStatic:true
}
var block1 , block1_options={
	restitution: 0.5,
	frictionAir: 0.1
}
var block2 , block2_options={
	restution: 0.3,
	frictionAir: 0.1
}
var block3 , block3_options={
	restitution: 1,
	frictionAir: 0.1
}


function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	
	plane = Bodies.rectangle(400,680,800,40,plane_options);
	World.add(world,plane);

	block1 = Bodies.rectangle(600,10,20,20,block1_options);
	World.add(world,block1);

	block2 = Bodies.circle(680,10,20,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(750,10,20,10,block3_options);
	World.add(world,block3);


	rectMode(CENTER);
	ellipseMode(RADIUS)

	Engine.run(engine);
  
}

	function draw() {
	
	background("green");
	

	Engine.update(engine);
  rect(plane.position.x,plane.position.y,800,40)
  rect(block1.position.x,block1.position.y,20,20)
  ellipse(block2.position.x,block2.position.y,15)
  rect(block3.position.x,block3.position.y,20,10)		


  drawSprites();
 
}



