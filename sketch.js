var background, background2,form,code,security,puzzles;
var score=0;

function preload(){
background1=loadImage("background.jpeg");
background2=loadImage("background2.jpeg");
background3=loadImage("background3.jpeg");
}

function setup(){
    createCanvas(1000,500);
    puzzles=new Puzzle()
    security=new Security()
    

}

function draw(){
    background(background1);
    code();
    security.display();
    fill("white");
    text("Score:"+score,450,50);
    
    if (score===0){
        code();
        security.display();
    }
    if(score === 4) {
        clear()
        background(background2);
        fill("black")
        textSize(40);
        security2=new Security2()
        security2.display();
        code2();

        
    }
   
    if(score===7){
        clear()
        background(background3);
        fill("black")
        textSize(40);
        
    }
    drawSprites()

}