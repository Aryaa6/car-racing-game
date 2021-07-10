
var database,canvas;
var game,player,form;
var gameState = 0;
var playerCount;

function setup() {

  database= firebase.database();
  canvas = createCanvas(600,600);
  
 game = new Game();
  game.getState();
  game.start();
}


function draw() {
 background("white");
 


}

