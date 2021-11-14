
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
function preload()
{
	
}

function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.3
	}
  bin=createSprite(500,450,20,90)
  bin2=createSprite(580,450,20,90)
	//Create the Bodies Here.
    ball=Bodies.circle(60,80,20,ball_options)
	World.add(world,ball)
	ground1=new ground(450,500,900,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20)
  ground1.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0})}
}


