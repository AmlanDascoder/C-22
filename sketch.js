const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground;
var ball;
var ball2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
var ground_options = {
  isStatic:true
}

ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
World.add(world, ground);
var ball_options = {
  restitution:1.2
}
  ball = Bodies.circle(200, 200, 20, ball_options)
  World.add(world, ball)
  ball2 = Bodies.circle(250, 250, 30, ball_options)
  World.add(world, ball2);
  
}

function draw() {
  background(0);
  Engine.update(engine)
  fill("brown")  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  fill("blue");
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20);
  ellipseMode(RADIUS)
  ellipse(ball2.position.x, ball2.position.y, 30, 30);
}