var canvas;
var music;
var rect1;
var rect2;
var rect3;
var rect4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
        rect1 = createSprite(95,550,180,20);
        rect1.shapeColor = "blue";
        
        rect2 = createSprite(298,550,180,20);
        rect2.shapeColor = "rgb(255, 128, 0)";

        rect3 = createSprite(500,550,180,20);
        rect3.shapeColor = "rgb(194, 30, 86)";
        
        rect4 = createSprite(700,550,180,20 );
        rect4.shapeColor = "green"; 

     //create box sprite and give velocity

     ball = createSprite(700,530,20,20);
     ball.velocityY=-8;
     ball.velocityx=8 ;
}

function draw() {
    background(rgb(192, 192, 192));
    background(rgb(World.mouseX, World.mouseY, 0));
    //create edgeSprite 
     edges=createEdgeSprites();
     ball.bounceOff(edges);

     music.play();

     if(rect1.isTouching(ball)){
       ball.shapeColor="blue";
       ball.bounceOff(rect1);
       ball.velocityX=10;
       ball.velocityY=-10
       music.stop();
     }

     if(rect2.isTouching(ball)){
        ball.shapeColor="rgb(255, 128, 0)";
        ball.bounceOff(rect2);
        ball.velocityX=10;
        ball.velocityY=-10;
        music.stop();
      }

      if(rect3.isTouching(ball)){
        ball.shapeColor="rgb(194, 30, 86)";
        ball.bounceOff(rect3);
        ball.velocityX=10;
        ball.velocityY=-10;
        music.stop();
      }

      if(rect4.isTouching(ball)){
        ball.shapeColor="green";
        ball.bounceOff(rect4);
        ball.velocityX=-10;
        ball.velocityY=-10
        music.stop();
      }
 



     drawSprites();
    //add condition to check if box touching surface and make it box
}


        
    
