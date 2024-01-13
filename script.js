let togglediv = document.getElementById("toggle_container");
let bodytag = document.getElementsByTagName("body");
let h1 = document.getElementsByTagName("h1");
let toggle = false;
function changeMode(){
     if(!toggle){
        bodytag.classList.add("bgclr");
        toggle = true;
     }
     else{
        bodytag.classList.remove("bgclr");
        toggle = false;
     }
}

togglediv.addEventListener("click" , changeMode);