var Paper1;
var ground;
var r1 , r2, r3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	// Paper = Bodies.circle(10,10,10 );
	Paper1 = new Paper(150,300);
 	World.add(world, Paper);


	 r1  = createSprite(560,600,20,100);
     r2  = createSprite(650,650,200,20);
     r3  = createSprite(740,600,20,100);


	Engine.run(engine);
	world = engine.world;

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill  ("yellow")

  ellipse(Paper1.body.position.x,Paper1.body.position.y,20)
  Paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:20,y:-20});
	}
  
  }
