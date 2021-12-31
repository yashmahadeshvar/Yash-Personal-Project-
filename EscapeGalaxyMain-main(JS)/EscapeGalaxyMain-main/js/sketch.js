var gameState=0;
var game;
var astroJet,astroJetIMG;
var meteor,meteorIMG,meteorGroup;
var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
var alienGroup,ufoGroup,fireBallGroup2,fireBall2;
var alienIMG,ufoIMG,bossIMG;
var bg,bg2,backgroundIMG,backgroundIMG2,earthIMG;
var out,outIMG,earth;
var missile,missileIMG,missileGroup;
var trident,tridentIMG,tridentGroup;
var startButton,startButtonIMG;
var title,titleIMG,info,infoIMG;
var laser1,laser1IMG,laser1Group;
var laser2,laser2IMG,laser2Group;
var laser3,laser3IMG,laser3Group;
var laser4,laser4IMG,laser4Group;
var laser5,laser5IMG,laser5Group;
var boost, boostIMG, boostGroup;
var lives = 3;
var score = 0;
var bossHealth = 20;
var endIMG,end;
var restart,restartIMG;
var ShootSound,DieSound,WinSound,BoostSound,ThemeSound;
var production,productionIMG;
var settings,settingsIMG,back,backIMG; 
var ship1,ship2,ship3,ship4,ship5,ship6,ship7,ship8;
var ship1IMG,ship2IMG,ship3IMG,ship4IMG,ship5IMG,ship6IMG,ship7IMG,ship8IMG;

function preload(){
  //Elements Skins
  backgroundIMG = loadImage("images/bg.jpg");
  backgroundIMG2 = loadImage("images/bg1.jpg");
  alienIMG = loadImage("images/alien.png");
  astroJetIMG = loadImage("images/jet.png");
  ufoIMG = loadImage("images/UFO.png");
  startButtonIMG = loadImage("images/button.png");
  fireBallIMG = loadImage("images/fireBall.png");
  bossIMG = loadImage("images/boss.png");
  meteorIMG = loadImage("images/meteor2.png");
  boostIMG = loadImage("images/boost.png");
  titleIMG = loadImage("images/title.png");
  infoIMG = loadImage("images/info.png");
  missileIMG = loadImage("images/missile.png");
  laserIMG = loadImage("images/laser.png");
  laser1IMG = loadImage("images/laser1.png");
  tridentIMG = loadImage("images/trident.png");
  earthIMG = loadImage("images/earth.jpg");
  restartIMG = loadImage("images/restart.jpg");
  productionIMG = loadImage("Develepour/op.png");
  settingsIMG = loadImage("images/settings.png");
  backIMG = loadImage("images/back.png");

 //Astoet Skins
  ship1IMG = loadImage("images/ship1.png");
  ship2IMG = loadImage("images/ship2.png");
  ship3IMG = loadImage("images/ship3.png");
  ship4IMG = loadImage("images/ship4.png");
  ship5IMG = loadImage("images/ship5.png");
  ship6IMG = loadImage("images/ship6.png");
  ship7IMG = loadImage("images/ship7.png");
  ship8IMG = loadImage("images/ship8.png");

  //GameSounds
  ShootSound = loadSound("audio/shooting.mp3");
  DieSound = loadSound("audio/die.mp3");
  BoostSound = loadSound("audio/boost.mp3");
  WinSound = loadSound("audio/win.mp3");
  ThemeSound = loadSound("audio/Main.mp3");
  
}

function setup() {
  createCanvas(400,625);
  game = new Game();
  game.setLevel1();
  
  output = new Output();
 //moresettings = new Settings();
  
  gamestate0 = new GameState0();
  gamestate0.start();


  //Groups
  fireBallGroup=createGroup();
  alienGroup=createGroup();
  meteorGroup=createGroup();
  ufoGroup=createGroup();
  boostGroup=createGroup();

  missileGroup=createGroup();
  laser1Group=createGroup();
  laser2Group=createGroup();
  laser3Group=createGroup();
  laser4Group=createGroup();
  laser5Group=createGroup();
  tridentGroup=createGroup();

  restart = createSprite(200,375,50,50);
  restart.addImage(restartIMG);
  restart.visible = false;
  restart.scale = 0.4;

  ThemeSound.loop();
  ThemeSound.setVolume(1.5);

  
}

function draw() {
  background(0);
  drawSprites();

  astroJet.x = mouseX;

  fill("gold");
  textSize(13);
  text("score :"+score,325,40);
  text("Lives: "+ lives,325,25);    
  textSize(15);
  text("--------------------------------------------------------------------------------------",1,70);  
  

  if(gameState === 0){
    gamestate0.start();

    fill("gold")
    textSize(15);
    text("PLAY",182,250); 
    textSize(15);
    text("INFO",110,576); 
    textSize(15);
    text("--------------------------------------------------------------------------------------",1,120);   
    
   

    if(mousePressedOver(startButton)){
      gameState = 1;
      bg.visible = false;
      startButton.visible = false;
    }

    if(mousePressedOver(info)){
      gameState = 5;
      bg.visible = false;
      startButton.visible = false;
    }
    if(mousePressedOver(settings)){
      gameState = 6;
      bg.visible = false
      startButton.visible = false;
    }
    if(mousePressedOver(ship1)){
      astroJet.addImage(ship1IMG);
    }

  }

  
  if(gameState === 1){
    game.playLevel1();
    astroJet.collide(bg2);

  }
  if(gameState === 2){
    game.playLevel2();
    bg.visible = false;
  }
  if(gameState === 3){
    text("Boss Health: "+ bossHealth,10,25);    
    textSize(15);
    game.playLevel3();
    lives = +10;
  }
  if(gameState === 4){
    game.end();
  }

  if(gameState === 5){
    output.Infopage();

    if(mousePressedOver(back)){
      gameState = 0;
    }

  }
  if(gameState === 6){
    gamestate0.SettingPage();
    if(mousePressedOver(back)){
      gameState = 0;
    }
  }

    
  if(lives === 0){
    textSize(25);
    text("Game Ended",125,300);
    restart.visible = true ;
    if(mousePressedOver(restart)){
      location.reload();
    }

  }

  // Settings

  

  
        
}
