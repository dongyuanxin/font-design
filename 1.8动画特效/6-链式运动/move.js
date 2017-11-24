
function startMove(obj,attr,target,func){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 1. 取出当前值
        let icur = 0;
        if(attr==="opacity"){
            icur = parseFloat(getStyle(obj,attr))*100; 
        } else{
            icur = parseInt(getStyle(obj,attr));
        }

        // 2. 计算速度
        let speed = (target-icur)/8; 
        speed = speed > 0?Math.ceil(speed):Math.floor(speed);
        
        // 3. 检测停止
        if(icur ===target){
            clearInterval(obj.timer);
            if(func){
                func(); // 如果有链式的运动传入，那么就继续执行
            }
        } else{
            if(attr==="opacity"){
                obj.style.filter = "alpha(opacity:"+(icur+speed)+");";
                obj.style.opacity = (icur+speed)/100;
            }
            else
                obj.style[attr] = icur + speed+"px";
        }
    },30);
}

function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj,null)[attr];
    }
}