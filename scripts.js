const displayOne = document.getElementById("reviewOne");
const displayTwo = document.getElementById("reviewTwo");
const displayThree = document.getElementById("reviewThree");

displayOne.addEventListener("click", fadeAway);
displayTwo.addEventListener("click", fadeAwayTwo);
displayThree.addEventListener("click", fadeAwayThree);

function fadeAway() {
    displayOne.style.display = "none";
    displayTwo.style.display = "block";
    displayThree.style.display = "none";
}

function fadeAwayTwo() {
    displayOne.style.display = "none";
    displayTwo.style.display = "none";
    displayThree.style.display = "block";
}

function fadeAwayThree() {
    displayOne.style.display = "block";
    displayTwo.style.display = "none";
    displayThree.style.display = "none";
}

let sectionBG =  document.querySelector('.trying')
let timer = setTimeout(onTick, 50);

function onTick(params) {
    sectionBG.classList.add('move')
}