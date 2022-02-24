let input = document.getElementById("input");
let guessButton = document.getElementById("guessButton");
let text = document.getElementById("text");
let container = document.getElementById("container");
let startButton = document.getElementById("startButton");
let restart = document.getElementById("restart");
let header = document.getElementById("header");
let gameContainer = document.getElementById("gc");

startButton.addEventListener("click", startTheGame);

guessButton.addEventListener("click", () => {

    game().then((resolve) => {
        text.innerHTML = resolve.a;
        header.innerHTML = resolve.b;
    }).catch((reject) => {
        input.value = "";
        text.innerHTML = reject;
    })
    restart.classList.remove("hidden");
})

restart.addEventListener("click", () => {
    input.value = "";
    text.innerHTML = "Guess the number from 1 up to 6.";
    header.innerHTML = "GUESS THE NUMBER";
    restart.classList.add("hidden");
})


function startTheGame() {
    startButton.classList.add("hidden");
    gameContainer.classList.add("game-container");
    gameContainer.classList.remove("hidden");
}

function displayResult(res) {
    text.innerHTML = res;
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
            b:"Congratulations!!!"});
        } else if (+input.value++ === randomNumber || +input.value-- === randomNumber) {
            resolve({a:`The correct number was ${randomNumber}. You got 1 point.`,
            b:`Lucky One`});
        } else {
            resolve({a:`You got 0 point. The correct number was ${randomNumber}.`,
            b:"Try Once More!"});
        }

    })
}


