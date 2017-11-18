function fnDown(event){
    event = event || window.event;
    var my_drag = document.getElementsByClassName("login-panel")[0],
        offset_x = event.clientX-my_drag.offsetLeft,
        offset_y = event.clientY-my_drag.offsetTop;
    // 在对象移动的时候持续的触发
    document.onmousemove = function(event){
        event = event || window.event;
        // document.title = event.clientX+","+event.clientY;
        let left = event.clientX-offset_x,
            top = event.clientY-offset_y;
        let window_width = document.documentElement.clientWidth || document.body.clientWidth;
            window_height = document.documentElement.clientHeight|| document.body.clientHeight;
        let max_left = window_width - my_drag.offsetWidth,
            max_top = window_height - my_drag.offsetHeight;
        if(top<10){
            top = 10;
        } else if (top>=max_top-10 ){
            top = max_top-10;
        }
        if (left<10){
            left = 10;
        } else if(left>=max_left-10){
            left = max_left-10;
        }
        my_drag.style.left = left+"px";
        my_drag.style.top = top+"px";
    }
    document.onmouseup = function(){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

function loginFunc(){
    let panel_submit = document.getElementsByClassName("panel-submit")[0],
        li_arr = panel_submit.getElementsByTagName("li");
    if(this.className==="show-state"){
        for(let i=0;i<li_arr.length;++i){
            li_arr[i].className = "";
        }
    } else {
        for(let i=0;i<li_arr.length;++i){
            li_arr[i].className = "hide-state";
        }
        this.className="show-state";
    }

}

function drag(){
    let my_title = document.getElementsByClassName("panel-header")[0];
    my_title.onmousedown = fnDown; // 在鼠标按下时触发

    let panel_submit = document.getElementsByClassName("panel-submit")[0],
        li_arr = panel_submit.getElementsByTagName("li");
    
    for(let i=0;i<li_arr.length;++i){
        li_arr[i].onclick = loginFunc;
    }
    let exit_logo = document.getElementById("exit-login");
    exit_logo.onclick = function(){
        let  login_panel = document.getElementsByClassName("login-panel")[0];
        login_panel.style.display = "none";
    }
}

window.onload = drag;