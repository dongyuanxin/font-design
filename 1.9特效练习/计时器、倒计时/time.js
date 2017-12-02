
window.onload = function(){
    myClock();
    setInterval(myClock,1000);
    myCountDown();
    setInterval(myCountDown,1000);
}
function checkTime(i){
    return i<10?("0"+i):i;
}

function myClock(){
    let now = new Date();
    let year = now.getFullYear(),
        month = now.getMonth()+1,
        day = now.getDate(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
    
    let weekday = new Array(7);
    // 注意index=0的情况
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    document.getElementById("clock").innerHTML = ""+year+"年"+month+"月"+day+"日 "+ weekday[now.getDay()] +" "+hour+":"+minute+":"+second;
}

function myCountDown(){
    let startTime = new Date(),
        endTime = new Date("2017/12/1,12:20:12"); 
        // endTime = new Date("2017/11/24,23:22"); 
    let offsetTime = Math.floor((endTime.getTime()-startTime.getTime())/1000); // 单位是秒
    
    let day = Math.floor(offsetTime/(24*60*60)),
        hour = Math.floor(offsetTime/(60*60)%24),
        minute = Math.floor(offsetTime/60%60),
        second = Math.floor(offsetTime%60);
    let countDownDiv = document.getElementById("count-down");
    if(offsetTime<=0)
        countDownDiv.innerHTML = "活动已结束";
    else {
        countDownDiv.innerHTML = "距离 " + endTime + " 还有 : " + day +"天 " + hour +"小时 " + minute +"分钟 "+ second +"秒 " ;
    }
}