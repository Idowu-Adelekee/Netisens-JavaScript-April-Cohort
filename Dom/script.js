"use strict";
/*
console.log("check in");

// Selecting element using querySelector

// Selecting single element
console.log(document.querySelector(".container"));

console.log(document.querySelector("#about-dom"));

// Selecting multiple elements
console.log(document.querySelectorAll(".heading-primary"));

// console.log(document)

// document.querySelector(".heading-primary").textContent = "This is fun";

// Selecting elements with id
const paragraph = document.getElementById("about-dom");

console.log(paragraph);

// Selecting elements with clasName

const allHeadings = document.getElementsByClassName("heading-primary");
console.log(allHeadings);

*/

const firstHeading = document.querySelector(".heading-primary");
console.log(firstHeading);

firstHeading.textContent = "Lewis is the course rep";

// Manipulating css with JavaScript

firstHeading.style.color = "orange";

// document.querySelector(".container").style.backgroundColor = "#000";

const container = document.querySelector(".container");

container.style.backgroundColor = "#000";

const btnEl = document.querySelector(".btn");
// console.log(btnEl);

btnEl.addEventListener("click", function () {
  alert("You clicked a button");

  btnEl.style.backgroundColor = "blue";
});
