'use strict';

/*

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input, we have to make '', 0 or other falsy value to be true so we negate them.
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';

    displayMessage('No number');
    // WHEN THE PLAYER WIN THE GAME
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#072B1D';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // document.querySelector('.message').textContent = 'Correct Number';

    displayMessage('Correct Number');

    // WHEN THE GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Resetting the game functionality
// 1. The score should go back to zero
// 2. background should be black again
// 3. score should be back to zero

// Clicking the again button
const btnAgainEl = document.querySelector('.again');

btnAgainEl.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

// PICKING THE ELEMENTS FIRST
// BTN ELEMENTS
const btnAgainEl = document.querySelector('.again');
const btnCheckEl = document.querySelector('.check');

const bodyEl = document.querySelector('body');

// TEXT ELEMENTS
const numberEl = document.querySelector('.number');
const heading1El = document.querySelector('h1');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// Game State
let score = 20;
let highScore = 0;

// ADDING EVENT LISTENER TO THE BTN CHECK
btnCheckEl.addEventListener('click', function () {
  const guess = Number(inputEl.value);

  // WHERE IS NO GUESS
  if (!guess) {
    messageEl.textContent = 'No number';

    // WHEN THE PLAYER WIN
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }

    numberEl.textContent = secretNumber;

    bodyEl.style.backgroundColor = '#106061';
    numberEl.style.width = '30rem';
    messageEl.textContent = 'You win 😎';

    heading1El.textContent = "Let's go again 🚀";

    // WHEN THE GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = 'Too high';
    } else {
      messageEl.textContent = 'You lost the game';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      scoreEl.textContent = score;
      messageEl.textContent = 'Too low';
    } else {
      messageEl.textContent = 'You lost the game';
      scoreEl.textContent = 0;
    }
  }
});

// Reseting the game with again button
btnAgainEl.addEventListener('click', function () {
  // Resetting the text content
  messageEl.textContent = 'Start guessing...';

  numberEl.textContent = '?';

  score = 20;
  scoreEl.textContent = score;

  inputEl.value = '';

  // Resetting the background and the width
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
