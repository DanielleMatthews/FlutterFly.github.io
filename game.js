var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var avatar = document.getElementById("avatar");
var game = document.getElementById("game")
var avTop = 355;
var avBot = 405;
var avLeft = 400;
var avRight = 476;
var grav = 1.5;
var thL = 850; //left pos of thorns, top and bottom
var botOfTopThrns = 200;
var topOfBotThrns = -150;
let collision = false;
var smV = 267;
var lgV = 533;
const running = block1.style.animationPlayState || 'running';
const running1 = block2.style.animationPlayState || 'running';

function start(){
    if(collision == false){
        avBot -= grav;
        avTop += grav;
                          
        
        if(avRight>= thL+20 && thL+132 > avLeft-20 && avTop <= botOfTopThrns+30 || thL+132 > avLeft && avRight >= thL+20 && avBot <= topOfBotThrns +615 ){   
            grav = 0;
            gameOver();
            collision == true;
        }
            else if (avBot <= 155){
            grav = 0;
            gameOver();
            collision == true;
            }
        if(thL+132 >= avLeft){
            collision == false;         
        }

        avatar.style.bottom = avBot + "px";
        avatar.style.left = avLeft + "px"; 
        avatar.style.right = avRight + "px"; 
        avatar.style.top = avTop+ "px";
        block2.style.left = thL + "px";
        block1.style.bottom = botOfTopThrns + "px";
        block2.style.top = topOfBotThrns + "px";
        updateThL();
        // updateSmV();
        // updateLgV();
    }
}
let timerId = setInterval(start, 20)

function updateThL(){
    thL -= 2.83;
    if(thL <= 0)
        thL = 850; 
}

function fly(){
    if(avBot<=700){
        avBot += 30;
        avTop -= 30;
        avatar.style.bottom = avBot + "px";
    }
    console.log("thornsL " + thL)
}
document.addEventListener('keydown', fly)


function gameOver(){
    block1.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    block2.style.animationPlayState = running1 === 'running' ? 'paused' : 'running';

    console.log("GAMEOVER")
}
   
                          