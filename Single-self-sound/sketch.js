const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas, backgroundImage;
var name = window.prompt("What is your name: ");
pWon = false


var gameState = 0;
var playerCount;
var allPlayers;
var engine, world
var brd1, brd2
var block1 = [], block2 = [];

var score = 0;
var score2 = 0

var stand1, stand2;

var swing

var cannon;

var defeat, victory

var cannon_fire

function preload() {
  bg = loadImage("images/bg.png")
  cannonImg = loadImage("images/cannon.png");
  defeat = loadSound("sounds/sad_trumpet (1).mp3");
  victory = loadSound("sounds/cartoon_charge.mp3");
  cannon_fire = loadSound("sounds/cannon_fire.mp3");
  swing = loadSound("sounds/axe_swing.mp3");
}
function setup() {
  engine = Engine.create();
  world = engine.world
  canvas = createCanvas(1670, 700);

  round2 = new Round2();

  cannon = createSprite(1400, 500);
  cannon.addImage(cannonImg)

  brd1 = new Brd1(400, 460, 60, 60);
  brd2 = new Brd2(1250, 420, 60, 60);

  sling1 = new Slingshot1({ x: 400, y: 510 }, brd1.body)
  sling2 = new Slingshot2({ x: 1250, y: 443.6 }, brd2.body)

  for (var j = 120; j <= 350; j = j + 40) {
    block1.push(new Block1(j, 650));
  }

  for (var j = 120; j <= 350; j = j + 40) {
    block1.push(new Block1(j, 600));
  }
  for (var j = 120; j <= 350; j = j + 40) {
    block1.push(new Block1(j, 550));
  }

  for (var j = 1360; j <= 1599; j = j + 40) {
    block2.push(new Block2(j, 650));
  }

  for (var j = 1360; j <= 1599; j = j + 40) {
    block2.push(new Block2(j, 600));
  }

  for (var j = 1360; j <= 1599; j = j + 40) {
    block2.push(new Block2(j, 550));
  }

  /*for (var j = 1200; j <=1400; j=j+40) { 
    block1.push(new Block1(j,330));
  }*/

  stand1 = new Stand(230, 700, 250, 10);
  stand2 = new Stand(1470, 700, 250, 10);
  //stand3 = new Stand(880,120,250,10)


  score = 0
  score2 = 0;
}


function draw() {
  background(bg)
  Engine.update(engine);

  if (gameState === 0) {
    brd1.display();
    brd2.display();

    stand1.display();
    stand2.display();
    //stand3.display();


    for (var i = 0; i < block1.length; i++) {
      block1[i].display();
      block1[i].score();
    }

    for (var i = 0; i < block2.length; i++) {
      block2[i].display();
      block2[i].score();
    }

    if (frameCount % 200 === 0) {
      Matter.Body.applyForce(brd2.body, brd2.body.position, { x: -1000, y: -10 });
      sling2.fly();
      cannon_fire.play();
    }
    if (frameCount % 175 === 0) {
      sling2.attach(brd2.body)
    }

    if (score === 54) {
      pWon = true
      gameState = 1
    }

    if (score2 == 54){
      pWon = false;
      gameState = 1
    }

  }
  //Reset
  if (gameState === 1 && pWon) {
    cannon.destroy();
    World.remove(world, brd2.body)
    textSize(26);
    fill("green")
    text("VICTORY", 800, 350);
    text("Press 'R' to reset", 800, 400);
    victory.play();
    keyPressed()
  }

  if (gameState == 1 && pWon == false) {
    World.remove(world, brd1.body);
    textSize(26);
    fill("red")
    text("DEFEAT", 800, 350);
    text("Press 'R' to reset", 800, 400);
    defeat.play();
    gameState = 1;
    keyPressed()
  }

  drawSprites();
  fill("black")
  textSize(17)
  text(name + "'s " + "score " + ": " + score, 800, 50)

  fill("black")
  textSize(17)
  text("Computer score : " + score2, 800, 100)
}


function mouseDragged() {
  Matter.Body.setPosition(brd1.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  sling1.fly();
  //swing.play();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(brd1.body, { x: 400, y: 400 })
    sling1.attach(brd1.body)
  }

  if (keyCode == 82) {
    gameState = 0
    setup()
  }
}