const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,Base;
var hexagon, slingshot; 

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

   
    block1 = new block1(810,350,30,40);
    block7 = new block7(810,300,30,40);
    block3 = new block3(810,290,30,40);
    block4 = new block4(710,280,30,40);
    block5 = new block5(710,270,30,40);
    block6 = new block6(610,260,30,40);
    hexagon = new Hexagon(200,50,30,30);

    slingshot = new SlingShot(hexagon.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
        Engine.update(engine);
        ground.display();

        block1.display();
        block1.score();
        this.image = loadImage("sprites/block1 pro26.png");
        
        block2.display();
        block2.score();
        this.image = loadImage("sprites/block2 pro26.png");
        
        block3.display();
        block3.score();
        this.image = loadImage("sprites/block3 pro26.png");
        
        block4.display();
        block4.score();
        this.image = loadImage("sprites/block4 pro26.png");
        
        block5.display();
        block5.score();
        this.image = loadImage("sprites/block5 pro26.png");

        block6.display();
        block6.score();
        this.image = loadImage("sprites/block6 pro26.png");

        Hexagon.display();
        platform.display();
        
        slingshot.display();

    }

function mouseDragged(){
    
        Matter.Body.setPosition(Hexagon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(Hexagon.body);
    }
}

