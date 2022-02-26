let input = document.getElementById("input");
let guessButton = document.getElementById("guessButton");
let text = document.getElementById("text");
let container = document.getElementById("container");
let startButton = document.getElementById("startButton");
let restart = document.getElementById("restart");
let header = document.getElementById("header");
let gameContainer = document.getElementById("gc");
let points = document.getElementById("points");
let reset = document.getElementById("reset");


startButton.addEventListener("click", startTheGame);

guessButton.addEventListener("click", () => {

    game().then((resolve) => {
        text.innerHTML = resolve.a;
        header.innerHTML = resolve.b;
        points.value = +points.value + resolve.c;
    }).catch((reject) => {
        input.value = "";
        text.innerHTML = reject;
    })
    guessButton.classList.add("hidden");
    restart.classList.remove("hidden");
})

restart.addEventListener("click", () => {
    input.value = "";
    text.innerHTML = "Guess the number from 1 up to 6.";
    header.innerHTML = "GUESS THE NUMBER";
    restart.classList.add("hidden");
    guessButton.classList.remove("hidden");
})

header.addEventListener("mouseover",transformer);

header.addEventListener("mouseout", unTransform);

reset.addEventListener("click", ()=>{
    return points.value = 0;
})
function startTheGame() {
    startButton.classList.add("hidden");
    gameContainer.classList.add("game-container");
    gameContainer.classList.remove("hidden");
    points.value = 0;
}


function random(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function game() {

    let randomNumber = random(6,1);

    return new Promise((resolve, reject) => {

        if (Number(input.value) < 1 || Number(input.value) > 6 || isNaN(+input.value)) {
            reject("Please enter a number from 1 up to 6.");
        } else if (+input.value === randomNumber) {
            resolve({a:`You have guessed the number. You got 2 points!`,
            b:"Congratulations!",
            c:2});
        } else if (+input.value === randomNumber+1 || +input.value === randomNumber-1) {
            resolve({a:`The correct number was ${randomNumber}. You got 1 point.`,
            b:`Lucky One`,
            c:1});
        }
            else {
            resolve({a:`You got 0 point. The correct number was ${randomNumber}.`,
            b:"Try Once More!",
            c:0});
        }

    })
}

 function transformer (){
     header.classList.add("transform");
 }
 function unTransform(){
     header.classList.remove("transform");
 }



