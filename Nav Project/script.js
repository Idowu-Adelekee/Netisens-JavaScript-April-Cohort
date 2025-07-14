"use strict";
console.log("check in");

// SELECTING ELEMENTS
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
console.log(btnNav, header);

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");

  // if (!header.classList.contains("nav-open")) {
  //   header.classList.add("nav-open");
  // } else {
  //   header.classList.remove("nav-open");
  // }
});
