"use strict";

let number = 0;

const changeImages = function () {
  const allImages = document.querySelectorAll(".img");
  console.log(allImages);

  for (let i = 0; i < allImages.length; i++) {
    allImages[i].style.display = "none";
  }

  // allImages.forEach((img) => (img.style.display = "none"));

  // number = number +1
  number++;
  console.log(number);

  if (number > allImages.length) {
    number = 1;
  }
  console.log(number);

  allImages[number - 1].style.display = "block";

  setTimeout(changeImages, 2000);
};

changeImages();

// setTimeout(function () {
//   console.log("check out");
// }, 2000);

// console.log("check in");
