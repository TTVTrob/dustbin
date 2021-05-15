
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;


function setup() {
	createCanvas(1000, 550);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,550,width,20);
	dustbinObj=new dustbin(800,530);
	paper = new Paper(200,500,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  groundObject.display();
  dustbinObj.display();
  paper.display();



}
 function keyPressed(){
 	if(keyCode === UP_ARROW){
 		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y: -145})
 	}
 }

