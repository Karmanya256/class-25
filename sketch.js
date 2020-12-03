const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, gameState,engine, world,dustbin,paper,dustbinImg,paperImg;
function preload(){
  
 

}
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  
  dustbinImg.scale = 0.45;

  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
  
    if (keyCode === UP_ARROW) 
      
    rectMode(CENTER);
    background(0);
    dustbin.addImage=(dustbinImg)
    paper.addImage=(paperImg)


    paper.display(); 
    ground.display();
    dustbin.display();

  
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 10,
      y: -10
    });
  }
}
