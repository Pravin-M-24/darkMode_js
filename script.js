let togglediv = document.getElementById("toggle_container");
let bodytag = document.getElementsByTagName("body")[0];
let circle = document.getElementById("circle");
console.log(bodytag);
let h1 = document.getElementsByTagName("h1")[0];
let toggle = false;
function changeMode(){
     if(!toggle){
        bodytag.classList.add("bgclr");
        h1.classList.add("h1_darkmode");
        circle.classList.add("dark-mode");
        toggle = true;
     }
     else{
        bodytag.classList.remove("bgclr");
        h1.classList.remove("h1_darkmode");
        circle.classList.remove("dark-mode");
        toggle = false;
     }
}
togglediv.addEventListener("click" , changeMode);