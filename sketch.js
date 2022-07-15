
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var gro1;
var gro2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  ground =new Ground(400,690,800,60);
  gro1 = new Ground(570, 640, 10, 80);
  gro2 = new Ground(640, 640, 10, 80);

  var ball_options = {
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2

  }

  ball = Bodies.circle(400, 30, 20, ball_options);
  World.add(world, ball);



    
	//Create the Bodies Here.
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);  
  drawSprites();
  ground.show();
  gro1.show()
  gro2.show()
  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);

  function keyPressed(){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(ball, ball.position, {x:85, y:-85});
    }
  }
 
}




