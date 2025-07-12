"use strict";

console.log("check in");

// SELECTING ELEMENTS
const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnCloseModal);

// ADDING THE FUNCTIONALITY

// Open the pop up
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

//Refactoring
const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Closing the pop up
btnCloseModal.addEventListener("click", closeModalFunc);

overlay.addEventListener("click", function () {
  closeModalFunc();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalFunc();
  }
});

/*
// SELECTING ELEMENTS
const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
console.log(btnCloseModal);

// ADDING THE FUNCTIONALITY

// Open the pop up
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

//Refactoring 


// Closing the pop up
btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function (m) {
  console.log(m);
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

*/
// btnShowModal.addEventListener("click", function () {
//   console.log("Hello");
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers);

// The for loop
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// The for of loop

// console.log("____The for of loop");
// for (const value of numbers) {
//   console.log(value);
// }

// The functional Programming
/// The for Each Loop;

// The for Each loop
// console.log("___The for each loop");
// numbers.forEach(function (value, odudu, arr) {
//   console.log(value);
//   console.log(odudu);
//   console.log(arr);
// });

const helloMachine = function (greeting) {
  console.log("Hello", greeting);
};

helloMachine("ladies");
