const menubar=document.querySelector("nav ul")
const bars=document.querySelector("#bars")
const bgoverlay=document.querySelector(".bg-overlay-container")



bars.addEventListener(
    "click",
    function(){
        menubar.classList.add("open")
        bgoverlay.classList.add("open-bg-overlay-container")
        bars.classList.add("fa-xmark")
    }
)



bgoverlay.addEventListener(
    "click",
    function(){
        menubar.classList.remove("open")
        bgoverlay.classList.remove("open-bg-overlay-container")
        bars.classList.remove("fa-xmark")



    }
)

