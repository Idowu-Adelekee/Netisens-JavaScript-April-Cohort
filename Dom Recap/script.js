"use strict";

console.log("check in");

// console.log(document);

// const firstButton = document.querySelectorAll("button");
// console.log(firstButton);

// console.log(document.querySelectorAll("show-modal"));

// const bigButton = document.querySelector(`[data-set]`);

// console.log(bigButton);

// const lewisButton = document.querySelector(`[data-lewis]`);

// console.log(lewisButton);

// const button = document.querySelector(".show-modal");
// console.log(button);

// button.addEventListener("click", () => {
//   console.log("Helloooo");
//   console.log(this);
// });

const allButtons = document.querySelectorAll(".show-modal");
console.log(allButtons);

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    console.log("Helllooo");
  });
}

// // SELECTING ELEMENTS
// const btnShowModal = document.querySelectorAll(".show-modal");
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// console.log(btnCloseModal);

// // ADDING THE FUNCTIONALITY

// // Open the pop up
// for (let i = 0; i < btnShowModal.length; i++) {
//   btnShowModal[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });
// }

// //Refactoring
// const closeModalFunc = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // Closing the pop up
// btnCloseModal.addEventListener("click", closeModalFunc);

// overlay.addEventListener("click", function () {
//   closeModalFunc();
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     closeModalFunc();
//   }
// });
