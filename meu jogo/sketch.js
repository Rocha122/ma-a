// Variaveis 
var apple
var appleIMG
var edges





function preload(){
 appleIMG = loadImage("apple.png");
}

function setup() {
createCanvas(400,400);
apple=createSprite(200,100);
apple.addImage(appleIMG);
edges = createEdgeSprites();
}
function draw(){
apple.scale = 0.11
apple.velocityY = 4
background("black");
drawSprites();
if (mousePressedOver(apple)) {
apple.velocityY = -30
apple.velocityX = -5
}
apple.bounceOff(edges[0])
apple.bounceOff(edges[1])
apple.bounceOff(edges[2])
apple.bounceOff(edges[3])
}
