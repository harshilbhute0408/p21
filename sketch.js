
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic : false,
	restitution :0.3,
	friction :0,
	density : 1.2
}
ball = Bodies.circle(300,400,30)
World.add(world,ball)
ground1 = new Ground (600,660,1200,20)
rg = new Ground (900,610,20,100)
rg2 = new Ground (1100,610,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x , ball.position.y ,30,30)
  ground1.show ();
  rg.show ();
  rg2.show();
  drawSprites();

 
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce (ball,ball.position,{x:10,y:-10		} )
	}
}



