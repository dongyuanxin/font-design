function changePage(){
    let test = document.getElementById("test");
    let li_arr = document.getElementsByTagName("li");
    let p_arr = document.getElementsByTagName("p");
    for(let i = 0;i<li_arr.length;++i){
        li_arr[i].index = i;
        li_arr[i].onmouseover = function(){
            for(let n=0;n<li_arr.length;++n){
                li_arr[n].className = "";
                p_arr[n].className ="hide";
            }
            this.className = "on";
            p_arr[this.index].className = "on";
        }
    } 
}

window.onload = changePage;