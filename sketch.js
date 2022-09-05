
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var mango1,boyImage;
function preload()
{
boyImage=loadImage("images/boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var  boy=createSprite(100,580)
boy.addImage(boyImage)
boy.scale=0.10;
	//Create the Bodies Here.

  ground= new Ground(400,650,800,20)
  mango1= new Mango(430,350,20)	
  mango2= new Mango(495,375,20)	
  mango3= new Mango(560,250,20)	
  mango4= new Mango(470,280,20)	
  mango5= new Mango(750,370,20)	
  mango6= new Mango(620,360,20)	
  mango7= new Mango(650,255,20)	
  mango8= new Mango(675,325,20)	
  tree = new Tree(600,410,20,20)
  stone=new Stone(20,540,20)
 launcher=new Slingshot(stone.body,{x:50,y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 drawSprites();
 
 ground.display();
 tree.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 launcher.display();

 detectCollission(stone,mango1);
 detectCollission(stone,mango2);
 detectCollission(stone,mango3);
 detectCollission(stone,mango4);
 detectCollission(stone,mango5);
 detectCollission(stone,mango6);
 detectCollission(stone,mango7);
 detectCollission(stone,mango8);
 
 text(mouseX+","+mouseY,mouseX,mouseY)
 fill("black")
 textSize(15)
 
 text("Press space to get a second chance to play!!😀",40,75)
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(stone.body,{x:50,y:520});
    launcher.attach(stone.body);
  }
  
}

 function detectCollission(Lstone,Lmango){
   mangoBodyPosition=Lmango.body.position
   stoneBodyPosition=Lstone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
     
    if(distance<=Lmango.r+Lstone.r){
      Matter.Body.setStatic(Lmango.body,false)
    }
 }

 function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY}) 
}
function mouseReleased(){
  launcher.fly()
 }

