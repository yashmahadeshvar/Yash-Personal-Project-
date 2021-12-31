class Output{
    constructor(){}
    
    Infopage(){

        //The canvas width is 400 & height is 625 
        
        fill("Gold");
        textSize(20);
        text("Instructions About Escape Galaxy :",45,150);
        textSize(15);
        text("1.Use mouse or controler for to move AstroJet",45,200);
        text("2.Destroy alien's & UFO's to proceed further levels",45,225);
        text("3.Collect XP pointes to Increase Your Health",45,250);
        text("All The Best Astro ! Lets Beat It",45,275);
        text("------------------------------------------------------------------------------------------",2,300);
        text("--------------------------------------------------------------------------------------",1,120  )     ;


        title = createSprite(200,100,10,10);
        title.addImage(titleIMG);
        title.scale = 0.7;

        //Production

        textSize(15);
        text("Founder Of Escape-Galaxy : Yash Mahadeshvar",45,350);
        text("------------------------------------------------------------------------------------------",2,375);

        textSize(20);
        text("Production : KAI Studio",45,450);
        text("------------------------------------------------------------------------------------------",2,525);
        
        production = createSprite(285,450);
        production.addImage(productionIMG);
        production.scale = 0.6;

        back = createSprite(200,25,10,10);
        back.addImage(backIMG);
        back.scale = 0.1;

        bg2.visible = true;
     }


}