var eventUtil = {
    // 添加句柄
    addHandler:function(element,type,handler){
        // 使用能力检测来保证浏览器兼容
        if(element.addEventListener){
            element.addEventListener(type,handler,false); // 这里是 click
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler,false); //注意这里需要onclick
        }else {
            element["on"+element] = handler;
        }
    },
    // 删除句柄
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        } else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        } else {
            element["on"+element] = null;
        }
    },
    // 获取事件
    getEvent:function(event){
        event = event || window.event;
        return event;
    },
    // 阻止默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 阻止事件冒泡
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getType:function(event){
        return event.type;
    },
    getElement:function(event){
        return event.target || event.srcElement;
    }
}