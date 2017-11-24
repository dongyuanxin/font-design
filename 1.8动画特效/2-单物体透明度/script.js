let timer = null;
let alpha = 100; // 由于无法直接得到alpha，那么请在全局变量中直接声明初始值。

function startChange(iTarget){
    clearInterval(timer);
    let oDiv = document.getElementsByTagName("div")[0];
    timer = setInterval(function(){
        let speed;
        if(alpha>iTarget){
            speed = -10;
        } else {
            speed = 10;
        }
        if(alpha === iTarget){
            clearInterval(timer);
        } else {
            alpha += speed;
            oDiv.style.filter = "filter:alpha(opacity="+alpha+");";
            oDiv.style.opacity = alpha/100;
        }
    },30);
}

function main(){
    let oDiv = document.getElementsByTagName("div")[0];
    // oDiv.onmouseover = startChange(50); // 如果有参数，请不要使用这种调用方法
    oDiv.onmouseover = function(){
        startChange(50);
    }
    oDiv.onmouseout = function(){
        startChange(100);
    }
}


window.onload = main;
