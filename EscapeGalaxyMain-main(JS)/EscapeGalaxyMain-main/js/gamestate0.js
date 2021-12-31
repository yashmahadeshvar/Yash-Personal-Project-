class GameState0{
    constructor(){}

    start(){

        bg = createSprite(200,300,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 0.45;

       
        startButton = createSprite(200,200,50,10);
        startButton.addImage(startButtonIMG);
        startButton.scale = 0.3;

        title = createSprite(200,95,10,10);
        title.addImage(titleIMG);
        title.scale = 0.7;

        info = createSprite(81,572,10,10);
        info.addImage(infoIMG);
        info.scale = 0.08;

        settings = createSprite(30,25,10,10);
        settings.addImage(settingsIMG);
        settings.scale = 0.4;
        
        bg2 = createSprite(200,300,400,625);
        bg2.addImage(backgroundIMG2);
        bg2.scale = 0.9;
        bg2.visible = false;

    }

    SettingPage(){

        bg2.visible = true;

        textSize(30);
        text("|Skins|",160,50);
        text("------------------------------------------------------------------------------------------",2,200);
        text("------------------------------------------------------------------------------------------",2,330);
        text("------------------------------------------------------------------------------------------",2,450);
        text("------------------------------------------------------------------------------------------",2,575);

        bg.visible = false;

        //First Row
        ship1 = createSprite(75,125,10,10);
        ship1.addImage(ship1IMG);
        ship1.scale = 0.2;

        ship2 = createSprite(325,125,10,10);
        ship2.addImage(ship2IMG);
        ship2.scale = 0.5;
        
        //Second Row
        ship3 = createSprite(75,255,10,10);
        ship3.addImage(ship3IMG);
        ship3.scale = 0.5;
        
        ship4 = createSprite(325,255,10,10);
        ship4.addImage(ship4IMG);
        ship4.scale = 0.4;
        
        //Third Row
        ship5 = createSprite(75,375,10,10);
        ship5.addImage(ship5IMG);
        ship5.scale = 0.6;

        ship6 = createSprite(325,375,10,10);
        ship6.addImage(ship6IMG);
        ship6.scale = 0.4;

        //Forth Row
        ship7 = createSprite(75,500,10,10);
        ship7.addImage(ship7IMG);
        ship7.scale= 0.5;

        ship8 = createSprite(325,500,10,10);
        ship8.addImage(ship8IMG);
        ship8.scale= 0.2;

        //backButton

        back = createSprite(100,30,10,10);
        back.addImage(backIMG);
        back.scale = 0.1;


       
    }
    
}