const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1500,20);
    box1 = new Box(700,350,50,50);
    box2 = new Box(900,350,50,50);
    pig1 = new Pig(800,350,50,50);
    log1 = new Log(800,300,20,260,PI/2);

    box3 = new Box(700,250,50,50);
    box4 = new Box(900,250,50,50);
    pig2 = new Pig(800,250,50,50);
    log2 = new Log(800,200,20,260,PI/2);

    box5 = new Box(800,150,50,50);
    log3 = new Log(750,150,20,150,PI/5);
    log4 = new Log(850,150,20,150,-PI/5);

    bird = new Bird(150,150,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}