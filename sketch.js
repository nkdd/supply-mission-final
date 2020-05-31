var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,invisibleGround;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box,boxLeft,boxRight;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	box = new Box(width/2,600,200,20);

	box = createSprite(400,650,200,20);
	boxLeft = createSprite(290,610,20,100);
	boxRight = createSprite(510,610,20,100);
	box.shapeColor = "red";
	boxLeft.shapeColor = "red";
	boxRight.shapeColor = "red";


	keyPressed();	
	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
	//if(packageBody.collide(box)){
	//	packageBody.x = 400;
	//	packageBody.y = 615;
	
//	}
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  box.display();
  boxLeft.display();
  boxRight.display();
  
  drawSprites(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
     if(packageBody.isTouching(box || boxLeft || boxRight)){
	//restitution = 1.1,
	friction = 0;
	//density = 0.1,
	//packageBody.collide(ground);
	//packageBody.bounce = false;
	packageBody.bounceOff = false;
   }
  }
}