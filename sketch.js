var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var select_balloon;
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;   
  
  balloonGroup = new Group();
  arrowGroup = new Group();

}

function draw() {
 background(0);
    scene.velocityX = -3 ;

    if (scene.x < 0){
      scene.x = scene.width/2;
    }

  //arco em movimento
  bow.y = World.mouseY
  
   // soltar flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  }
  if (World.frameCount % 1 == 0) {
   var select_balloon = Math.round(random(1,4));
   
   switch(select_balloon ){
    case 1: 
    redBalloon();
    break;
    case 2: 
    blueBalloon();
    break;
    case 3: 
    greenBalloon();
    break;
    case 4: 
   pinkBalloon();
    break;
    default:break;
  }}
  

   // Verifica se a flecha atingiu algum balão
   for (var i = 0; i < allSprites.length; i++) {
    if (arrow !== undefined && allSprites[i] !== undefined && allSprites[i].isTouching(arrow)) {
      allSprites[i].destroy(); // Remove o balão atingido
      score++; // Incrementa a pontuação
    }}

  drawSprites();

   // Exibe a pontuação na tela
   textSize(20);
   fill(255);
   text("Pontuação: " + score, 10, 30);


   for (var i = 0; i < arrowGroup.length; i++) {
    for (var j = 0; j < balloonGroup.length; j++) {
      if (
        arrowGroup.get(i) !== null &&
        arrowGroup.get(i).isTouching(balloonGroup.get(j))
      ) {
        //arrowGroup.get(i).destroy(); // Remove a flecha
        balloonGroup.get(j).destroy(); // Remove o balão

        // Incrementa a pontuação
        score++;
      }}
    }





}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
} 

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  balloonGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 1;
  blue.lifetime = 150;
  blue.scale = 0.1;
  balloonGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 2;
  green.scale = 0.09;
  balloonGroup.add(green);
}
function pinkBalloon() {
 var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
 pink.addImage(pink_balloonImage);
 pink.velocityX = 4;
 pink.lifetime = 150;
 pink.scale = 1.3;
 balloonGroup.add(pink);
}
