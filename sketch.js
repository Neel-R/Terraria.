const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world, dirt1=[], grass=[], gold, titanium, hellstone, stone;
var lastPrism, TheCyborg, Brian, background, enchantedBook, sword, tree1, tree2, Boss, minion, drill;
var player;
var dirtImg = "images/dirt.png", grassImg = "images/Grass Block.png";

function preload (){
  
}

function setup (){
  var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    for (var dirt = 0; dirt < width; dirt = dirt+10) {
      dirt1.push( new Block(dirt, displayHeight-displayHeight/4,dirtImg));
    }

    for(var i = 0; i< width; i = i+10){
      grass.push( new Block(i, displayHeight-displayHeight/4-100,grassImg));
      
    }


}
 function draw () {
  background(0);
  Engine.update(engine);

  for(var i = 0; i< dirt1.length; i = i+10){
    dirt1[i].display();
    
  }

  for(var i = 0; i< grass.length; i = i+10){
    grass[i].display();
    
  }


 }