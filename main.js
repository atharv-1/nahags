var canvas=new fabric.Canvas("myCanvas");

block_img_height=30;
block_img_width=30;

player_x=10;
player_y=10;

var player_object="";
var block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
player_object.scaleToHeight(170);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}
function block_update(get_Img){
    fabric.Image.fromURL(get_Img,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);
    });
}




// key pressed evenets/////////
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
//codes for shift+p////////////////////////
if(e.shiftKey==true&&keyPressed=='80'){
    console.log("shift+p is pressed");
block_img_height=block_img_height+10;
block_img_width=block_img_width+10;
document.getElementById("current_height").innerHTML=block_img_height;
document.getElementById("current_width").innerHTML=block_img_width;
}
if(e.shiftKey==true&&keyPressed=='77'){
    console.log("shift+m is pressed");
block_img_height=block_img_height-10;
block_img_width=block_img_width-10;
document.getElementById("current_height").innerHTML=block_img_height;
document.getElementById("current_width").innerHTML=block_img_width;
}


if(keyPressed=='67'){
    block_update('cloud.jpg');
    console.log("c");


}
if(keyPressed=='68'){
block_update('dark_green.png');
console.log("d");
}
if(keyPressed=='71'){
    block_update('ground.png');
    console.log("g");
    }
    if(keyPressed=='76'){
        block_update('light_green.png');
        console.log("l");
        }
        if(keyPressed=='82'){
            block_update('roof.jpg');
            console.log("r");
            }
            if(keyPressed=='84'){
                block_update('trunk.jpg');
                console.log("t");
                }
                if(keyPressed=='85'){
                    block_update('unique.png');
                    console.log("u");
                    }
                    if(keyPressed=='87'){
                        block_update('wall.jpg');
                        console.log("w");
                        }
                        if(keyPressed=='89'){
                            block_update('yellow_wall.png');
                            console.log("y");
                            }
                            if(keyPressed=='38'){
                            console.log("up");
                            up();
                            }
                            if(keyPressed=='40'){
                                console.log("down");
                                down();
                                }
                                if(keyPressed=='37'){
                                    console.log("left");
                                    left();
                                    }
                                    if(keyPressed=='39'){
                                        console.log("right");
                                        right();
                                        }

}
function up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_update();
    }
    
}
function down(){
if(player_y<=500){
player_y=player_y+block_img_height;
canvas.remove(player_object);
player_update();
}    
}
function right(){
    if(player_x<900){
player_x=player_x+block_img_width;
canvas.remove(player_object);
player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        player_update();
    }

}