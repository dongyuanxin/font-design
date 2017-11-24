window.onload = function(){
    startMove();
}

/* 理解offsetWidth，以及其他
// https://www.cnblogs.com/fullhouse/archive/2012/01/16/2324131.html
function startMove(){
    setInterval(function(){
        let oDiv = document.getElementById("div1");
        // alert(oDiv.offsetWidth); // 可以看看到底oDiv.offsetWidth是多少 = width + border
        oDiv.style.width = oDiv.offsetWidth-1+"px";
        // width = 202 - 1 = 201px
        // width = 203 - 1 = 202px
        // 所以，这是宽度逐渐增大 
    },30);
}
*/


/*
// oDiv.style 都是指的 行间样式 ！！！ 而不是CSS样式
function startMove(){
    setInterval(function(){
        let oDiv = document.getElementById("div1");
        // alert(oDiv.style.width); // 你会发现只有将width作为行间样式（标签里给style="width:200px"）第一次alert才不为空，
        // oDiv.style.width 锁定的是行间样式
        oDiv.style.width = oDiv.offsetWidth-1+"px";
        
    },30);
}
*/

function startMove(){
    setInterval(function(){
        let oDiv = document.getElementById("div1");
        // console.log(getStyle(oDiv,"width")); 
        // 这里是20px ， 而不是20。所以下面无法直接 -1
        oDiv.style.width = parseInt(getStyle(oDiv,"width"))-1+"px";
        // parseInt: 会将20px -> 20
        // console.log(oDiv.style.width);
    },30);
}

// 获得css样式的方法
function getStyle(obj,attr){
    if(obj.currentStyle){
        // IE 7 8 9
        return obj.currentStyle[attr];
    } else {
        // 语法：
        // 在旧版本之前，第二个参数“伪类”是必需的，现代浏览器已经不是必需参数了
        // 如果不是伪类，设置为null，
        // window.getComputedStyle("元素", "伪类");
        return window.getComputedStyle(obj,null)[attr];
    }
}