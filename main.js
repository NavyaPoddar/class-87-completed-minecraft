var canvas=new fabric.Canvas('myCanvas');
var blockwidth=30;
var blockheight=30;
var playerxposition=10;
var playeryposition=10;
var playerimage=""; 
var blockimage="";

function update_player_image(){
    fabric.Image.fromURL("player.png",function(Img){
        playerimage=Img;
        playerimage.scaleToWidth(150);
        playerimage.scaleToHeight(140);
        playerimage.set({
            top:playeryposition,
            left:playerxposition
        });
        canvas.add(playerimage)
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimage=Img;
        blockimage.scaleToWidth(blockwidth);
        blockimage.scaleToHeight(blockheight);
        blockimage.set({
            top:playeryposition,
            left:playerxposition
        });
        canvas.add(blockimage)
    });
}

window.addEventListener("keydown",keydowmfunction);

function keydownfunction(e){
    var pressedkeycode= e.keyCode;
    // e is an evnent and e.keyCode means that when the keydown occurs we will get the keyCode of the button that is pressed//

    console.log(pressedkeycode);

    if(pressedkeycode== "38"){
        up();
        console.log("up pressed");
    }

    if(pressedkeycode=="37"){
        left();
        console.log("left pressed");
    }

    if(pressedkeycode=="39"){
        right();
        console.log("right pressed");
    }

    if(pressedkeycode=="40"){
    down();
    console.log("down pressed");
    }

    if(pressedkeycode=="87"){
      new_image("wall.jpg");
      console.log("w pressed");  
    }

    if(pressedkeycode=="71"){
        new_image("ground.png");
        console.log("g pressed");
    }

    if(pressedkeycode=="76"){
        new_image("light_green.png");
        console.log("l pressed");
    }

    if(pressedkeycode=="84"){
        new_image("trunk.jpg");
        console.log("t pressed");
    }

    if(pressedkeycode=="82"){
        new_image("roof.jpg");
        console.log("r pressed");
    }

    if(pressedkeycode=="68"){
        new_image("dark_green.png");
        console.log("d pressed");
    }

    if(pressedkeycode=="85"){
        new_image("unique.png");
        console.log("u pressed");
    }

    if(pressedkeycode=="67"){
        new_image("cloud.jpg");
        console.log("c pressed");
    }

    if(pressedkeycode=="89"){
        new_image("yellow_wall.pmg");
        console.log("y pressed");
    }
}

function up(){
    if(playeryposition>0){
        playeryposition= playeryposition-20;
        console.log('player y position:'+ playeryposition);
        canvas.remove(playerimage);
        update_player_image();
    }
}

function down(){
    if(playeryposition<550){
        playeryposition= playeryposition+20;
        console.log('player y position:'+ playeryposition);
        canvas.remove(playerimage);
        update_player_image();
    }
}

function left(){
    if(playerxposition>0){
        playerxposition= playerxposition-20;
        console.log('player x position:'+ playerxposition);
        canvas.remove(playerimage);
        update_player_image();
    }
}

function right(){
    if(playeryposition<750){
        playerxposition= playerxposition+20;
        console.log('player x position:'+ playerxposition);
        canvas.remove(playerimage);
        update_player_image();
    }
}