
var cat, catImage1, catImage2,catImage3, catImage4, cat_running
var mouse, mouseImage1, mouseImage2, mouseImage3, mouseImage4, mouse_running 

function preload() {
    backImage = loadImage ("images/garden.png");
   
    catImage1 = loadImage ("images/cat1.png");
    catImage4 = loadImage ("images/cat4.png");
   
    mouseImage1 = loadImage("images/mouse1.png");
    mouseImage4 = loadImage("images/mouse4.png");

    cat_running = loadAnimation ("images/cat2.png","images/cat3.png");
    mouse_running = loadAnimation ( "images/mouse2.png", "images/mouse3.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    
    cat=createSprite (900,750,20,20);
    cat.addImage ("moving", catImage1);
    cat.scale=0.1;

    mouse=createSprite(30,750,10,10);
    mouse.addImage ("moving", mouseImage1);
    mouse.scale=0.05; 



    //create tom and jerry sprites here

}

function draw() {

    background(backImage);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation ("catImage", catImage4);
        cat.changeAnimation ("catImage");
        mouse.addAnimation("mouseImage", mouseImage4);
        mouse.changeAnimation("mouseImage");    
    }
    drawSprites();
}


function keyPressed(){

 if (keyCode === LEFT_ARROW){
    cat.velocityX=-5;
   cat.addAnimation ("catrunning", cat_running);
   cat.changeAnimation ("catrunning");
   mouse.addAnimation("mouseRunning", mouse_running);
   mouse.changeAnimation("mouseRunning");
  }
  //For moving and changing animation write code here


}
