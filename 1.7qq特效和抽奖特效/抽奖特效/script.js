let prize_arr = ["iPhone-X","Ipad","谢谢参与","充气娃娃","谢谢参与","震动棒","QQ靓号","100元现金"],
    timer = null,
    flag = 0 // flag代表第几次敲击键盘
    ;

function startPrize(){
    let prize = document.getElementById("prize");
    /*
    每次添加定时器之前，一定要将之前的定时器关闭。否则，变化会过快。
    */
    clearInterval(timer); 
    // var self = this;
    timer = setInterval(function(){
        let index = Math.floor(Math.random()*prize_arr.length);
        prize.innerHTML = prize_arr[index];
    },50);
    // 这种方法错误。因为对于键盘事件，this指的是键盘，他没有background属性
    // self.style.background = "#999";
    // self.style.cursor = "auto";
    start.style.background = "#999";
    start.style.cursor = "auto";
}

function stopPrize(){
    clearInterval(timer);
    start.style.background = "#036";
    start.style.cursor = "pointer";
}

window.onload = function(){
    let start = document.getElementById("start"),
        end = document.getElementById("end");
    // start to play
   start.onclick = startPrize;
   // end 
   end.onclick = stopPrize;

    /*
    键盘事件：由于我们这里需要检测整个网页，所以绑定对象是document
    */
    document.onkeyup = function(event){
        event = event || window.event;
        // console.log(event.keyCode);
        // 使用这条语句来确定键对应的编码
        if(event.keyCode===13){
            if (flag===0){
                startPrize();
                flag = 1;
            } else {
                stopPrize();
                flag = 0;
            } 
        }
    }
}