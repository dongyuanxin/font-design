function startMove(obj,moveJson,func){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        let finish = true; // 检测是否完全完成
        for (let attr in moveJson){
            // 1. 取出当前值
            let icur = 0;
            let target = moveJson[attr];
            if(attr==="opacity"){
                icur = parseFloat(getStyle(obj,attr))*100; 
            } else{
                icur = parseInt(getStyle(obj,attr));
            }

            // 2. 计算速度
            let speed = (target-icur)/8; 
            speed = speed > 0?Math.ceil(speed):Math.floor(speed);
            
            // 3. 检测停止
            if(icur !== target){
                finish = false;
                if(attr==="opacity"){
                    obj.style.filter = "alpha(opacity:"+(icur+speed)+");";
                    obj.style.opacity = (icur+speed)/100;
                }
                else
                    obj.style[attr] = icur + speed+"px";
            }
        }
        // 4. 检测是否完成
        if(finish) {
            console.log("1");
            clearInterval(obj.timer);
            if(fn) fn();
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