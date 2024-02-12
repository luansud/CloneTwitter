
const bodyTest = document.querySelector("#corpo");
const buttonD = document.querySelector("#darkmode");
const divButtonD = document.querySelector("#buttonDark");
const buttonL = document.querySelector("#lightmode");

buttonD.addEventListener("click", inDark);
buttonL.addEventListener("click", inLight);

function inDark() { 
    document.documentElement.style.setProperty("--font" , "white");
    document.documentElement.style.setProperty("--fundo" , "black");
    document.documentElement.style.setProperty("--fundoDivs", "#2c29291a");
}

function inLight() { 
    document.documentElement.style.setProperty("--font" , "black");
    document.documentElement.style.setProperty("--fundo" , "white");
    document.documentElement.style.setProperty("--fundoDivs", "#f2f0f0");

}


