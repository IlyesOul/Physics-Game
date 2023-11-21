class Round2{
constructor(){
}
start(){
var wall0 = createSprite(0,10,2000000,5);
wall0.visible = false;
var wall1 = createSprite(350, 5, 5, 100);
wall1.shapeColor = "yellow";
var wall2 = createSprite(330, 5, 5, 70);
wall2.shapeColor = "yellow";
var wall3 = createSprite(400, 80, 900, 5);
wall3.shapeColor = "yellow";
var wall4 = createSprite(240, 130, 5, 210);
wall4.shapeColor = "yellow";
var wall5 = createSprite(280, 150, 100, 5);
wall5.shapeColor = "yellow";
var wall6 = createSprite(270, 250, 5, 100);
wall6.shapeColor = "yellow";
var wall7 = createSprite(350, 230, 100, 5);
wall7.shapeColor = "yellow";
var wall8 = createSprite(250, 250, 470, 5);
wall8.shapeColor = "yellow";
var wall9 = createSprite(310, 400, 5, 260);
wall9.shapeColor = "yellow";
var ball = createSprite(380, 150, 10, 10);
ball.shapeColor = "green";
var dong1 = createSprite(50, 150, 10, 10);
dong1.shapeColor = "blue";
var dong2 = createSprite(100, 150, 10, 10);
dong2.shapeColor = "blue";
var dong3 = createSprite(150, 150, 10, 10);
dong3.shapeColor = "blue";
var dong4 = createSprite(200, 150, 10, 10);
dong4.shapeColor = "blue";
var portal = createSprite(380, 380, 10, 10);
portal.shapeColor = "black";
var obs = createSprite(70, 300, 10, 10);
obs.shapeColor = "orange";
var obs2 = createSprite(120, 300, 10, 10);
obs2.shapeColor = "orange";
var obs3 = createSprite(170, 300, 10, 10);
obs3.shapeColor = "orange";
var obs4 = createSprite(220, 300, 10, 10);
obs4.shapeColor = "orange";
var laser1 = createSprite(185, 30, 50, 5);
laser1.shapeColor = "purple";
var laser2 = createSprite(130, 25, 50, 5);
laser2.shapeColor = "purple";
var laser3 = createSprite(75, 30, 50, 5);
laser3.shapeColor = "purple";
var goal = createSprite(10, 10, 10, 10);
goal.shapeColor = "maroon";


var attempts = 0;

stroke("yellow");
textSize(16);
text(attempts, 300, 20);

background("red");


obs.velocityX = 5;
obs.veloctyY = -4;
obs2.velocityX = -4;
obs2.velocityY = 5;
obs3.velocityX = -3;
obs3.velocityY = 6;
obs4.velocityX = 4;
obs4.velocityY = -5;

laser1.velocityY = 3;
laser2.velocityY = -3;
laser3.velocityY = 4;







dong1.velocityY = 9;
dong2.velocityY = -9;
dong3.velocityY = 9;
dong4.velocityY = -9;

    textSize(16);
    text("Portal", 340, 320);

    textSize(19);
    text("Get to the portal!", 150, 340);

    textSize(17);
    text("Goal is to the left", 260, 70);

    laser1.bounceOff(wall3);
    laser2.bounceOff(wall3);
    laser3.bounceOff(wall3);


    dong1.bounceOff(wall3);
    dong2.bounceOff(wall3);
    dong3.bounceOff(wall3);
    dong4.bounceOff(wall3);
    dong1.bounceOff(wall8);
    dong2.bounceOff(wall8);
    dong3.bounceOff(wall8);
    dong4.bounceOff(wall8);

    obs.bounceOff(wall0);
    obs.bounceOff(wall3);
    obs2.bounceOff(wall0);
    obs2.bounceOff(wall3);
    obs3.bounceOff(wall3);
    obs3.bounceOff(wall0);
    obs4.bounceOff(wall3);
    obs3.bounceOff(wall0);
    obs.bounceOff(wall9);
    obs2.bounceOff(wall9);
    obs3.bounceOff(wall9);
    obs4.bounceOff(wall9);
    obs.bounceOff(wall8);
    obs2.bounceOff(wall8);
    obs3.bounceOff(wall8);
    obs4.bounceOff(wall8);
    obs.bounceOff(wall4);
    obs2.bounceOff(wall4);
    obs3.bounceOff(wall4);
    obs4.bounceOff(wall4);
    obs.bounceOff(wall6);
    obs2.bounceOff(wall6);
    obs3.bounceOff(wall6);
    obs4.bounceOff(wall6);




    if (keyIsDown(UP_ARROW)) {
        ball.y = ball.y - 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ball.y = ball.y + 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ball.x = ball.x + 3;
    }
    if (keyIsDown(LEFT_ARROW)) {
        ball.x = ball.x - 3;
    }
    if ((ball.isTouching(wall1)) || (ball.isTouching(wall2)) || (ball.isTouching(wall3)) || (ball.isTouching(wall4)) || (ball.isTouching(wall5)) || (ball.isTouching(wall6)) || (ball.isTouching(wall7)) || (ball.isTouching(wall8)) || (ball.isTouching(wall9))) {
        ball.x = 380;
        ball.y = 130;
    }
    if ((ball.isTouching(dong1)) || (ball.isTouching(dong2)) || (ball.isTouching(dong3)) || (ball.isTouching(dong4)) || (ball.isTouching(obs)) || (ball.isTouching(obs2)) || (ball.isTouching(obs3) || ball.isTouching(obs4)) || (ball.isTouching(laser1))) {
        ball.x = 220;
        ball.y = 200;
    }
    if (ball.isTouching(portal)) {
        textSize(23);
        text("Portal", 330, 300);
    }
    if (ball.isTouching(portal)) {
        ball.x = 280;
        ball.y = 25;

    }


    if ((ball.isTouching(laser1)) || (ball.isTouching(laser2)) || (ball.isTouching(laser3))) {
        ball.x = 280;
        ball.y = 25;
    }


    if (ball.isTouching(goal)) {
        dong1.destroy();
        dong2.destroy();
        dong3.destroy();
        dong4.destroy();
        obs.destroy();
        obs2.destroy();
        obs3.destroy();
        obs4.destroy();
        laser1.destroy();
        laser2.destroy();
        laser3.destroy();
        wall1.destroy();
        wall2.destroy();
        wall3.destroy();
        wall4.destroy();
        wall5.destroy();
        wall6.destroy();
        wall7.destroy();
        wall8.destroy();
        wall9.destroy();

    }
    drawSprites();
}
}


