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

// Generating A Secret Number

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

numberEl.textContent = secretNumber;

// console.log(document.querySelector(".left").innerHTML);

// Adding event listener
btnCheckEl.addEventListener("click", function () {
  const guessResult = Number(guessEl.value);
  console.log(guessResult);

  if (!guessResult) {
    messageEl.textContent = "There is number";
  } else if (guessResult === secretNumber) {
    messageEl.textContent = "You won";
  } else if (guessResult > secretNumber) {
    messageEl.textContent = "Too high";
  } else if (guessResult < secretNumber) {
    messageEl.textContent = "Too low";
  }
});
