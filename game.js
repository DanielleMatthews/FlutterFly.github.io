var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var topt = document.getElementsByClassName("topt")
var bott = document.getElementsByClassName("bott")
var avatar = document.getElementById("avatar");
var game = document.getElementById("game")
var rdmThorns = Math.random()*2;  //random numb b/w 0-3
//var random = (rdmThorns*100); //random num b/w 0-300 + height of thorns
// var top3 = (rdmThorns*100);
var top1 = -175
var avTop = 355;
var avBot = 405;
var avLeft = 400;
var avRight = 476;
var grav = 1.5;
var thL = 850; //left pos of thorns, top and bottom
var botOfTopThrns = 200;
var topOfBotThrns = 25;
let collision = false;
var smV = 267;
var lgV = 533;
const running = block1.style.animationPlayState || 'running';
const running1 = block2.style.animationPlayState || 'running';
console.log(thL)
// console.log(updateSmV)
// console.log(updateLgV)
console.log(updateThL())
function start(){
    if(collision == false){
        avBot -= grav;
        avTop += grav;
    
        if((smV< thL <lgV) && (avRight >= thL) && (avTop <= botOfTopThrns +25) ||(smV< thL <lgV) && (avRight >= thL+15) && avBot <= topOfBotThrns +260 ){   
            grav = 0;
            gameOver();
            collision == true;
        }
            else if (avBot <= 155){
            grav = 0;
            gameOver();
            collision = true;
            }
        else{ 
            //add count
        }

        avatar.style.bottom = avBot + "px";
        avatar.style.left = avLeft + "px"; 
        avatar.style.right = avRight + "px"; 
        avatar.style.top = avTop+ "px";
        block2.style.left = thL + "px";
        block1.style.bottom = botOfTopThrns + "px";
        block2.style.top = topOfBotThrns + "px";
        updateThL();
        updateSmV();
        updateLgV();
    }
}
let timerId = setInterval(start, 20)

block1.addEventListener('animationiteration', () => {
    block1.style.top = (top1) + "px"; 
});

block2.addEventListener('animationiteration', () => {
    block2.style.top = (100 -top1) + "px"; 
});

function updateSmV(){
    smV -= 2.83;
    if(thL = 0);
        smV + smV;
};
function updateLgV(){
    lgV -= 2.83;
    if(thL = 0){
        lgV + lgV;
    }
};
function updateThL(){
    thL -= 2.83;
    if(thL = 0){
        thL + thL;
    }
   
}

function control(e){
    if(e.keycode === 32){
        flying();
    } 
}
function fly(){
    if(avBot<=700){
        avBot += 30;
        avTop -= 30;
        avatar.style.bottom = avBot + "px";
        // console.log("avBot " + avBot)
        // console.log("top of bot thrns " + topOfBotThrns)
        // console.log("avTop " + avTop)
        // console.log("bot of top thrns " + botOfTopThrns)
        //console.log(thbT + " thornsbot Top")
        console.log("av right" + avRight )
        console.log(smV)
        console.log(lgV)
        console.log("thorns left" +thL )
    };
}
document.addEventListener('keydown', fly)


function gameOver(){
    block1.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    block2.style.animationPlayState = running1 === 'running' ? 'paused' : 'running';

    console.log("GAMEOVER")
    //display count
    //option for replay
}
   
                          