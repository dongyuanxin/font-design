window.onload = function(){
    let oDiv = document.getElementsByTagName("div")[0];
    oDiv.onmouseover =  function(){
        startMove(0);
    };
    oDiv.onmouseout = function(){
        startMove(-200);
    }
}
let timer = null;
function startMove(iTarget){
    let oDiv = document.getElementsByTagName("div")[0];
    clearInterval(timer); // 一定要清除定时器
    timer = setInterval(function(){
        let speed ;
        if(oDiv.offsetLeft>iTarget){
            speed = -10;
        } else {
            speed = 10;
        }
        if(oDiv.offsetLeft===iTarget){
            clearInterval(timer);
        }
        else{
            oDiv.style.left = oDiv.offsetLeft + speed +"px";
        }
    },30)
}
