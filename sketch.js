var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3;
var log1body,log2body,log3body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	log1=createSprite(300,580,20,150);
	log1.shapeColor=color(23,78,56);
	log1body=Bodies.rectangle(300,580,20,150,{isStatic:true});
	World.add(world,log1body);

   log2=createSprite(378,649,180,20);
   log2.shapeColor=color(23,78,56);
   log2body=Bodies.rectangle(378,649,180,20,{isStatic:true}); 	
   World.add(world,log2body);

   log3=createSprite(467,585,20,150);
   log3.shapeColor=color(23,78,56);
   log3body=Bodies.rectangle(378,649,180,20,{isStatic:true}); 	
   World.add(world,log3body)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //text(mouseX+":"+mouseY,mouseX,mouseY);
  packageSprite.collide(log2)
  console.log(log2body);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



