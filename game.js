var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var topt = document.getElementsByClassName("topt")
var bott = document.getElementsByClassName("bott")
var avatar = document.getElementById("avatar");
var game = document.getElementById("game")
var rdmThorns = Math.random()*2;  //random numb b/w 0-3
var top1 = (rdmThorns*100); //random num b/w 0-300 + height of thorns
var top3 = (rdmThorns*100);
var avLeft = 400;
var avBot = 405;
var grav = 2.4;
var avRight = 476
var thbL = 850;

let collision = false;

const running = block1.style.animationPlayState || 'running';
const running1 = block2.style.animationPlayState || 'running';
console.log(thbL)
console.log(updateThL(thbL))
function start(){
    if(collision == false){
        avBot -= grav;
        // if(avBot < (-top1 +425) && (thbL >400) && (thbL <479)){
        //     grav = 0;
        //     gameOver();
        // }
        if(avRight >= thbL+15){
            grav = 0;
            gameOver();
        }
        else if(avBot <= 100){
            grav = 0;
            gameOver();
        }
        avatar.style.bottom = avBot + "px";
        avatar.style.left = avLeft + "px"; 
        avatar.style.right = avRight + "px"; 
        block2.style.left = thbL + "px";
        updateThL(thbL);
    }
    // if(thL > 400 && thL < 476 && avLeft === 476) {//&& avBot+50 >= top1+425)
    //     gameOver();
   
}
let timerId = setInterval(start, 20)

block1.addEventListener('animationiteration', () => {
    block1.style.top = -(top1) + "px"; 
});

block2.addEventListener('animationiteration', () => {
    block2.style.top = (100 -top1) + "px"; 
});

function updateThL(){
    thbL -= 2.83;
    //return x-=2.83;
}

function control(e){
    if(e.keycode === 32){
        flying();
    } 
}
function fly(){
    if(avBot<=700){
        avBot += 30;
        avatar.style.bottom = avBot + "px";
        console.log(avBot)
        console.log(thbL)
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
    // setInterval (function(){
        //     var avatarTop = parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
        //     if(flying==0){
            //         avatar.style.top = (avatarTop+3)+"px";
            //     }
            // }, 1000)
            // function fly(){
                //     flying = 1;
                //     let flyCnt = 0;
                //     var flyInt = setInterval(function(){
                    //         parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
                    //         if((avatar>=6) && (counter<15)){
                        //             avatar.style.top = (avatarTop-15)+"px";
                        //         }
                        //         if(flyCnt>20){
                            //             clearInterval(flyInt)
                            //             flying = 0;
                            //             flyCnt = 0;
                            //         }
                            //         flyCnt++;
                            //     }, 10)
                            // }
                            
                            // function genThorns(){
                                //     let thL = 1250;
                                //     let thBot = -350;
                            //     const thorns = document.createElement("div");
                            //     thorns.classList.add('topt')
                            //     game.appendChild(thorns);
                            //     topt.style.left = thL + "px";
                            //     topt.style.bottom = thBot + "px";
                            
                            // function moveThorns(){
                                //     thL -=2
                                //     topt.style.left = thbL + "px"
                                //     if(thbL === -99){
                                //             clearInterval(timerId)
                                //         game.removeChild(thorns)
                                //     }
                                // }
                                // let timerId = setInterval(moveThorns, 20)
                                // setTimeout(genThorns, 2000)
                            // }   
                            // genThorns();
                            
                            
                            
                            // block1.addEventListener('animationiteration', () => {
                               // block1.style.top = -(top1) + "px";
                               // });