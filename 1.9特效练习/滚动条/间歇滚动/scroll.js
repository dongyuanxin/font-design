let myscroll = null;
let liHeight = null ; 

window.onload = function(){
    let area = document.getElementById("moocBox"),
        con1 = document.getElementById("con1") ,
        con2 = document.getElementById("con2") ;
    liHeight = parseInt(area.getElementsByTagName("li")[0].offsetHeight);
    let speed =2000;
    area.scrollTop = 0;
    con2.innerHTML = con1.innerHTML;
    // setTimeout(startScoll(con1,area),2000); // 载入页面2s后启动
    myscroll = setInterval(startScoll(con1,area),speed);
}

function startScoll(obj,box){
    console.log(box.scrollTop);
    let a = box.scrollTop;
    a+=1;
    box.scrollTop+=1;
    
    console.log(" "+a+" "+box.scrollTop);

    if(box.scrollTop % liHeight===0){
        clearInterval(myscroll);
        console.log(box.scrollTop);
        box.scrollTop+=1;
        
        console.log(box.scrollTop);
        setTimeout(function(){
            myscroll = setInterval(startScoll(obj,box),50);
        },2000);
        // setTimeout(function(){
        //     box.scrollTop++;
        //     myscroll = setInterval(startScoll(obj,box),50);
        // },2000);
    } else {      
        box.scrollTop++;
        if(box.scrollTop>=obj.scrollHeight){
            box.scrollTop = 0;
        }
    }
}