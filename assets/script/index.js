const forButton = document.getElementById("forYouDiv");
const followButton = document.getElementById("followDiv");
const divFol = document.querySelector(".centerTopRight");
const divFor = document.querySelector(".centerTopLeft");

function addBorderBlueFollow() {
    forButton.style.borderBottom = "0px solid black";
    followButton.style.borderBottom = "8px solid rgb(29, 155, 240)";
    followButton.style.borderRadius = "5px";
}

function addBorderBlueForYou() {
    followButton.style.borderBottom = "0px solid black";
    forButton.style.borderBottom = "8px solid rgb(29, 155, 240)";
    forButton.style.borderRadius = "5px";

}

followButton.addEventListener("click", addBorderBlueFollow);
forButton.addEventListener("click", addBorderBlueForYou);
divFor.addEventListener("click",addBorderBlueForYou);
divFol.addEventListener("click",addBorderBlueFollow);