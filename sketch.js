const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var box,log




function setup() {
 var canvas =  createCanvas(800,400);
  engine = Engine.create();
world = engine.world;
box = new Box(200,300,70,70);
log = new Log(400,50,80,10);
var options = {
  bodyA:box.body,
  bodyB:log.body,
  stiffness:0.04,
  length:80
}
var chain = Constraint.create(options)
World.add(world,chain);
}

function draw() {
  background(0); 
   Engine.update(engine);
log.display();
box.display();
strokeWeight (3);
    line (box.body.position.x,box.body.position.y,log.body.position.x,log.body.position.y);
}