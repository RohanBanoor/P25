const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var trashCan, trashCanImg

function preload() {
	trashCanImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	trashCan = createSprite(610,550,10,10);
	trashCan.addImage(trashCanImg);
	trashCan.scale = 0.80

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	ground = new Ground(400, 680, 800, 20);

	paper = new Paper(100,200,40);

	side1 = new Trash(520,580,20,175)

	side2 = new Trash(700,580,20,175)     

	side3 = new Trash(610,660,200,20)

	Engine.run(engine);
  
}


function draw() {
  background(230);

	paper.display();

	ground.display();

	side1.display();

	side2.display();

	side3.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:77,y:-100})  
	}
}



