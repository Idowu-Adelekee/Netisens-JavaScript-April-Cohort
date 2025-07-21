"use strict";

console.log("check in");

// SELECTING ELEMENTS
const btnCheckEl = document.querySelector(".check");
const btnAgainEl = document.querySelector(".again");

const numberEl = document.querySelector(".number");

const guessEl = document.querySelector(".guess");

const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");

// INITIAL VALUES
// Generating A Secret Number
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// numberEl.textContent = secretNumber;

// console.log(document.querySelector(".left").innerHTML);

// Adding event listener
btnCheckEl.addEventListener("click", function () {
  const guessResult = Number(guessEl.value);
  console.log(guessResult);

  // WHEN THERE IS NO GUESS
  if (!guessResult) {
    messageEl.textContent = "There is number";

    // Set highscore
    // 1. Understand the problem
    // Setting highscore: if score is greater highscore, let highscore be equl to score.

    // WHEN THE PLAYER WON
  } else if (guessResult === secretNumber) {
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
    messageEl.textContent = "You won";

    numberEl.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#48a371";
    document.querySelector("h1").textContent = "Let's go again";

    // WHEN THE GUESS IS TOO HIGH
  } else if (guessResult > secretNumber) {
    if (score > 1) {
      score--;
      messageEl.textContent = "Too high";
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "You lost the game";
      scoreEl.textContent = 0;
    }

    // WHEN THE GUESS IS TOO LOW
  } else if (guessResult < secretNumber) {
    if (score > 1) {
      score--;
      messageEl.textContent = "Too low";
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = "You lost the game";
      scoreEl.textContent = 0;
    }
  }
});

// Set highscore
// 1. Understand the problem
// Setting highscore: if score is greater highscore, let highscore be equl to score.

btnAgainEl.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#EEEEFF";

  // Text content
  numberEl.textContent = "?";
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = 20;
  document.querySelector("h1").textContent = "Guess My Number";

  guessEl.value = "";
});
