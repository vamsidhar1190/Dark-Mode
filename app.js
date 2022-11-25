console.log("hello")
var icon=document.getElementById("icon");


icon.onclick=function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src="./ssun.png"
        document.body.style.backgroundColor = "black"
    }else{
        icon.src="./moon.png"
        document.body.style.backgroundColor = " white"

    }
}

