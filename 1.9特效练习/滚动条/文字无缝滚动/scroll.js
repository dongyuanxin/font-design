let myscroll = null;

window.onload = function(){
    let area = document.getElementById("moocBox"),
        con1 = document.getElementById("con1") ,
        con2 = document.getElementById("con2") ;
    let speed =50;
    // scrollTop/scrollHeight：具体请见https://www.cnblogs.com/yuteng/articles/1894578.html
    area.scrollTop = 0;
    con2.innerHTML = con1.innerHTML;
    
    // 这是为了让它可以在页面加载的时候就开始滚动
	/*
    myscroll = setInterval(function(){
        startScoll(con1,area);   
    },speed);

    area.onmouseover = function(){
        clearInterval(myscroll);
    }
    area.onmouseout = function(){
        myscroll = setInterval(function(){
            startScoll(con1,area);   
        },speed);
    }*/
}

function startScoll(obj,box){
    if(obj.scrollHeight <= box.scrollTop){
        // 实现无缝效果
        // 如果con1都到了上面，那么将area.scrollTop设置为0
        // 此时他们就会回到原位（被挤到原位）
        box.scrollTop = 0;
    } else {
        box.scrollTop++;
		// box.scrollTop = Math.ceil(box.scrollTop+1);
		console.log(box.scrollTop);
    }
}