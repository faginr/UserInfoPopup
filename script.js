let body = document.querySelector("body");
let popup = document.querySelector(".pop-up");
let header = document.querySelector(".header");

function exit(){
    popup.style.display = "none";
    body.style.backgroundColor = "#fff";
    header.style.opacity = "1";
}

function popUp(){
    popup.style.display = "block";
    body.style.backgroundColor = "#ddd";
    header.style.opacity = ".5";
}