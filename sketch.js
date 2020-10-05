var bananaImage;
var obstacleImage;
var obstaclegroup;
var background, backImage;
var score;

function preload(){
backImage=loadImage("jungle.jpg");
player_running =
loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");

bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    background = createSprite(1200,400,5,5);
    background = addImage("background", backImage);

    
}

function draw(){
    background(backImage);

    drawSprites();
}