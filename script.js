let input = document.getElementById("input");
let guessButton = document.getElementById("guessButton");
let text = document.getElementById("text");
let container = document.getElementById("container");
let startButton = document.getElementById("startButton");
let restart = document.getElementById("restart");


//startButton.addEventListener("click", startTheGame);

/*function startTheGame() {
    container.innerHTML =
  `<label id="text">Guess the number from 1 up to 6.</label>
    <input id="input"/>
    <button id="guessButton" class="button">Guess</button>`
}*/

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
            resolve(`You have guessed the number. You got 2 points!`);
        } else if (+input.value++ === randomNumber || +input.value-- === randomNumber) {
            resolve(`The correct number was ${randomNumber}. You were so close, you got 1 point.`);
        } else {
            resolve(`You got 0 point. The correct number was ${randomNumber}.`);
        }

    })
}


guessButton.addEventListener("click", () => {

    game().then((resolve) => {
     return text.innerHTML = resolve;
    }).catch((reject) => {
        return text.innerHTML = reject;
    })
})


restart.addEventListener("click", () => {
    input.value = "";
    text.innerHTML = "Guess the number from 1 up to 6.";
})
