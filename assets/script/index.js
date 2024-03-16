// Doing the Follow and for you DIVs button
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


// Creating the script for animations in search Bar
const searchDiv = document.querySelector(".rightAside");
const searchBar = document.getElementById("searchBar");

function addBorderSearchDiv(){
    searchDiv.style.border = "2px solid #1d9bf0";
}
function offBorderSearchDiv(){
    searchDiv.style.border = "0px solid #fff";
}


// CREATING POST SCRIPT
function postText() { 
    let inputPost = document.getElementById("inputPost");
    let postButton = document.getElementById("postButton");
    let userPost = document.getElementById("userPost");
    let postDiv = document.getElementById("postDiv");

    userPost.innerHTML = inputPost.value;
    postDiv.style.display = "block";
    inputPost.value = "";
    console.log(inputPost.value);
    console.log(postButton);
    console.log(userPost);
    console.log(postDiv);


}

