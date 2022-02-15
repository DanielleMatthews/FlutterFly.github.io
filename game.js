var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var avatar = document.getElementById("avatar");
var rdmThorns = Math.random()*2;  //random numb b/w 0-3
var top1 = (rdmThorns*100); //random num b/w 0-300 + height of thorns
var flying = 0;


//element.addEventListener("click", function(){ alert("Hello World!"); });
block1.addEventListener('animationiteration', () => {
    block1.style.top = -(top1) + "px";
});
block2.addEventListener('animationiteration', () => {
    block2.style.top = (100 -top1) + "px";
});

setInterval (function(){
    var avatarTop = parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
    if(flying==0){
        avatar.style.top = (avatarTop+3)+"px";
    }
}, 10)
function fly(){
    flying = 1;
    let flyCnt = 0;
    var flyInt = setInterval(function(){
        parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
        if((avatar>=6) && (counter<15)){
            avatar.style.top = (avatarTop-15)+"px";
        }
        if(flyCnt>20){
            clearInterval(flyInt)
            flying = 0;
            flyCnt = 0;
        }
        flyCnt++;
    }, 10)
}

    