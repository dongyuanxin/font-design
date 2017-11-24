// 下面这种代码，共用了一个timer，所以，快速滑动的时候，会有bug出现
// window.onload = function(){
//     let allLi = document.getElementsByTagName("li");
//     for(let i=0;i<allLi.length;++i){
//         allLi[i].onmouseover = function(){
//             startMove(this,400); // 注意this的用法
//         }
//         allLi[i].onmouseout = function(){
//             startMove(this,200);
//         }
//     }
// }
// let timer = null;
// function startMove(obj,target){
//     clearInterval(timer);
//     timer = setInterval(function(){
//         let speed = (target-obj.offsetWidth)/8; // offsetWidth代表宽度
//         speed = speed > 0?Math.ceil(speed):Math.floor(speed);
//         if(obj.offsetWidth==target){
//             clearInterval(timer);
//         } else{
//             obj.style.width = obj.offsetWidth + speed+"px";
//         }
//     },30);
// }

window.onload = function(){
    let allLi = document.getElementsByTagName("li");
    for(let i=0;i<allLi.length;++i){
        // 多物体运动解决方法
        allLi[i].timer = null;
        // 除此之外，多物体运动不能共享全局变量
        // 例如之前的opacity变化
        // 解决方法一样，就是将其作为属性传给对应的对象
        allLi[i].onmouseover = function(){
            // startMove(this,"width",400); // 注意this的用法
            startMove(this,"opacity",100);
        }
        allLi[i].onmouseout = function(){
            // startMove(this,"width",200);
            startMove(this,"opacity",30);
        }
    }
}

function startMove(obj,attr,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        // 兼容 透明度
        let icur = 0;
        if(attr==="opacity"){
            // icur = Math.round(parseFloat(getStyle(obj,attr)))*100; // 注意0.07*100，有精度损失
            icur = parseFloat(getStyle(obj,attr))*100; // Chrome改过了，不需要上面的代码了
        } else{
            icur = parseInt(getStyle(obj,attr));
        }

        let speed = (target-icur)/8; // use Function getStyle
        speed = speed > 0?Math.ceil(speed):Math.floor(speed);
        if(icur ==target){
            clearInterval(obj.timer);
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