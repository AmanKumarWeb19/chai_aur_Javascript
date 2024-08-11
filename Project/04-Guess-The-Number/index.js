const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (!NaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a more than one");
  } else if (guess > 100) {
    alert("Please Enter a number less than 100");
  } else {
    prevGuess.push(guess);
  }
}
validateGuess();

function checkGuess(guess) {
  //
}
checkGuess();

function displayGuess(guess) {
  //
}

function displayMessage(message) {
  //
}
displayMessage();

function newGame() {
  //
}

function endGame() {
  //
}
