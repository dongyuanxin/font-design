window.onload = function(){
    let go = document.getElementById("go");
    let box = document.getElementById("box");
    eventUtil.addHandler(box,"click",function(){
        alert("我是整个父盒子");
    });

    eventUtil.addHandler(go,"click",function(event){
        event = eventUtil.getEvent(event);
        alert(eventUtil.getElement(event));
        eventUtil.preventDefault(event); // 进制默认行为
    });

    let button_arr = document.getElementsByTagName("input");
    for(let i=0;i<button_arr.length;++i){
        eventUtil.addHandler(button_arr[i],"click",function(e){
            e = eventUtil.getEvent(e);
            eventUtil.stopPropagation(e); // 阻止冒泡
            alert("hello,I am "+this.value);
        })
    }

}