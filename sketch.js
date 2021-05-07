

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5;
var ball, sling1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)

    //level 1
    base1 = new Ground(730,325, 200, 10);
    block1 = new Block(700,320,20,30);
    block2 = new Block(720,320,20,30);
    block3 = new Block(740,320,20,30);
    block4 = new Block(760,320,20,30); 
    block5 = new Block(780,320,20,30);

    block6 = new Block(710,300,20,30);
    block7 = new Block(730,300,20,30);
    block8 = new Block(750,300,20,30);
    block9 = new Block(770,300,20,30); 

    block10 = new Block(720,280,20,30);
    block11 = new Block(740,280,20,30);
    block12 = new Block(760,280,20,30);
    
    block13 = new Block(730,260,20,30);
    block14 = new Block(750,260,20,30);

    block15 = new Block(740,240,20,30);

    //base2
    base2 = new Ground(330,325, 200, 10);
    block16 = new Block(300,320,20,30);
    block17 = new Block(320,320,20,30);
    block18 = new Block(340,320,20,30);
    block19 = new Block(360,320,20,30); 
    
    block20 = new Block(310,300,20,30);
    block21 = new Block(330,300,20,30);
    block22 = new Block(350,300,20,30); 

    block23= new Block(320,280,20,30);
    block24 = new Block(340,280,20,30); 
    
    block25 = new Block(330,260,20,30); 

    ball = new Ball(50,100);
    sling1 = new Slingshot(ball.body , {x: 100, y: 100});
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    base1.display();
    fill("pink");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    
    fill("grey");
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    fill("lightblue");
    block10.display();
    block11.display();
    block12.display();

    fill("lightgreen");
    block13.display();
    block14.display();

    fill("white");
    block15.display();
// base2

    base2.display();
    fill("pink");
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    
    fill("lightblue");
    block20.display();
    block21.display();
    block22.display();

    fill("lightgreen");
    block23.display();
    block24.display();

    fill("white");
    block25.display();
    
    sling1.display();
    
    ball.display();
    
    textSize(30);
    stroke("black");
    text("Drag the Hexagonal stone and Release it, to launch it towards the pyramid", 100,50);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}