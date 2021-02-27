const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var pig1;
var log1;
var bird1;
var sling;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(800,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    ground = new Ground(600,height,1200,20);
   
    bird1 = new Ball(200,200);

    sling = new SlingShot(bird1.body,{x:700, y:10});
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box5.display();
    sling.display();
    box4.display();
    box3.display();
    box1.display();
    box2.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
   
    bird1.display();
   
}