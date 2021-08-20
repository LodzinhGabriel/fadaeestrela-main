var starImg,bgImg;
var star, starBody;
var fairy;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //joymusic = loadSound("sounds/JoyMusic.mp3");
    //carregar animação de fada 
    fairyAnim = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png",)
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    //joymusic.loop();
    //criar sprite de fada e adicionar animação para fada

    fairy = createSprite(120,500);
	fairy.addAnimation("fada", fairyAnim);
	fairy.scale = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {

    background(bgImg);

    if (keyDown(LEFT_ARROW)) {
        fairy.x = fairy.x -3;
    }
    if (keyDown(RIGHT_ARROW)) {
        fairy.x = fairy.x +3;
    }
    if (keyDown("q")) {
        Matter.Body.setStatic(starBody, false);
    }

    if (star.y > 470 && starBody.position.y > 470) {
        Matter.Body.setStatic(starBody, true);
    }

    star.x = starBody.position.x;
    star.y = starBody.position.y;
    drawSprites();
}

