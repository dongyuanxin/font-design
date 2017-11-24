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
    clearInterval(timer); 
    timer = setInterval(function(){
        let speed ;
        if(iTarget > oDiv.offsetLeft){
            speed = Math.ceil((iTarget - oDiv.offsetLeft)/20); 
            /*
            1. (iTarget - oDiv.offsetLeft)实现动态变化
            2. /20是系数
            3. 不要忘记取整，因为算到最后一定会有小数
            */
        } else if (iTarget < oDiv.offsetLeft) {
            speed = Math.floor((iTarget - oDiv.offsetLeft)/20);
        } 

        if(oDiv.offsetLeft===iTarget){
            clearInterval(timer);
        }
        else{
            oDiv.style.left = oDiv.offsetLeft + speed +"px";
        }
    },30)
}
