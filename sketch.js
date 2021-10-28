//Nickname - Name aliaising
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEngine,myWorld;

var ground,ball;

function setup() {
  createCanvas(400,400);

  //creating our own engine and adding it to our own world;
  myEngine=Engine.create();
  myWorld=myEngine.world;

  //options for ground
   var groundOptions={
     //not fall down
    isStatic: true,
    density:1
   }

  //creating Physics Engine Body
  ground=Bodies.rectangle(200,370,400,20,groundOptions);
  World.add(myWorld,ground);

  console.log(ground);
  

  
  
}


function draw() 
{
  background(51);
  //updating the engine
  Engine.update(myEngine);
 
  //Drawing ground
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);
  
}

