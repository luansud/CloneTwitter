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
    let postSection = document.getElementById("postSection");
    const postDiv = `
    <div id="postDiv" class="postDiv">
                        <div class="postTop">
                            <img src="./assets/img/icons/profile.png" alt="" class="postProfile">
                            <div class="profileAndText">
                                <div class="postTopNameHashtag">
                                    <b>Profile 1</b>
                                    <p class="hashtagPost">@Profile1 - 1h</p>
                                </div>
                                <div id="userPost" class="postText">
                                    ${inputPost.value}
                                </div>
                            </div>
                            <img class="postDots" src="./assets/img/icons/3dotsNoCircle.png" alt="">
                        </div>

                        <div class="postDivImage">
                            <img class="postImage" src="" alt="">
                        </div>


                        <div class="optionsDiv">
                            <div class="options">
                                <img class="optionImg" src="/assets/img/icons/talkBallon.png" alt="Talk Ballon Icon">
                                <label id="optionDescTalk" class="optionDesc">7 K</label>
                            </div>

                            <div class="options">
                                <img class="optionImg" src="/assets/img/icons/rePost.png" alt="Re-Post Icon">
                                <label id="optionDescPost" class="optionDesc">22 K</label>
                            </div>

                            <div class="options">
                                <img class="optionImg" src="/assets/img/icons/Heart.png" alt="Heart Icon">
                                <label id="optionDescHeart" class="optionDesc">226 K</label>
                            </div>

                            <div class="options">
                                <img class="optionImg" src="/assets/img/icons/Statistic bar.png" alt="Statistic Bar Icon">
                                <label id="optionDescStat" class="optionDesc">28 M</label>
                            </div>

                            <div class="options">
                                <img class="optionImg" src="/assets/img/icons/Salvar.png" alt="Save Icon">
                                <img class="optionImg" src="/assets/img/icons/Upload.png" alt="Upload Icon">
                            </div>
                        </div>
                   </div>
    `;

    postSection.innerHTML = postDiv+postSection.innerHTML;
    inputPost.value = "";
    console.log(inputPost.value);
    console.log(postButton);
    console.log(userPost);
    console.log(postDiv);
}



