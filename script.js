'use strict';

// Application State Variables
// const secretNumber = Math.trunc(Math.random() * (20 + 1));
// console.log(secretNumber);
function secretNumberFn() {
    return Math.trunc(Math.random() * (20 + 1));
}

const secretNumber = secretNumberFn;
console.log(secretNumber);


let score = 20;
let highScore = 0;


function displayMessage(msg) {
    message.textContent = msg;
}


// console.log(secretNumber);


// DIFFERENT OPTION TO CONVERT TO INTEGER
// console.log(Math.floor(secretNumber));
// console.log(Math.ceil(secretNumber));
// console.log(Math.round(secretNumber));
// console.log(Math.trunc(secretNumber));


// console.log(document.querySelector('.message'));
// document.querySelector('.guess').value = 47

// Selecting Dom Elements
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreCard = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const body = document.body;

console.log(body);


// Creating Events
checkBtn.addEventListener('click', function () {

    // GETTING NUMBER FROM INPUT
    const newGuessNum = parseInt(guessNumber.value);

    console.log(newGuessNum);
    console.log(typeof newGuessNum);

    // when input is empty
    if (!newGuessNum) {
        message.textContent = '⛔ No Number';  // false

        // When input Number is correct
    } else if (newGuessNum === secretNumber) {
        displayMessage('🎉 Correct Number');
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = newGuessNum;

        if (score > highScore) {
            highScore = score;

        }


        // When Input Number is below thw secret Number
    } else if (newGuessNum < secretNumber) {
        if (score > 1) {
            message.textContent = '📉Too low';
            score--;
            scoreCard.textContent = score;
        } else {
            message.textContent = '💥Game Over';
            score = 0;
            scoreCard.textContent = score;
        }


        // When Input Number is Above the secret Number
    } else if (newGuessNum > secretNumber) {
        if (score > 1) {
            message.textContent = '📈Too High';
            score--;
            scoreCard.textContent = score;
        } else {
            message.textContent = '💥Game Over';
            score = 0;
            scoreCard.textContent = score;
        }
    }
});
// console.log(textContent);

// Resetting the Game

resetBtn.addEventListener('click', function () {
    displayMessage('Start guessing...')
    secretNumberFn();
    number.textContent = '?';
    score = 20;
    scoreCard.textContent = score;
    number.style.width = '15rem';
    body.style.backgroundColor = '#222';
    guessNumber.value = '';
    highscore.textContent = highScore;
})