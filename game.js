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
let grav = 2;
let thL = 850;

function start(){
    avBot -= grav;
    if(avBot <= 100){
        grav =0;
        
    }
    avatar.style.bottom = avBot + "px";
    avatar.style.left = avLeft + "px";
}
let timerId = setInterval(start, 20)

block3.addEventListener('animationiteration', () => {
    block1.style.top = -(top3) + "px"; 
});

block1.addEventListener('animationiteration', () => {
    block1.style.top = -(top1) + "px"; 
});

block2.addEventListener('animationiteration', () => {
    block2.style.top = (100 -top1) + "px"; 
});


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
    };
}
document.addEventListener('keydown', fly)

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
    //     topt.style.left = thL + "px"
    //     if(thL === -99){
    //         clearInterval(timerId)
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