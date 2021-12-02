let mybutton = document.getElementById("mybutton");
const backgroundcolor = document.querySelector(".blue-background");

mybutton.addEventListener("click", changeText);

function changeText(){
    mybutton.textContent = "Button clicked!"
};

backgroundcolor.addEventListener("click", bgChange);

function bgChange(){
    backgroundcolor.classList.toggle("red-background")
};