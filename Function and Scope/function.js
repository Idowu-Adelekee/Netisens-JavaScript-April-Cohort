"use strict";

/*
// Function expression
const print = function () {
  console.log("Hello world");
};

// Calling/Invoking/Running a function
print();
print();
print();

// Function declaration
function print2() {
  console.log("Hello Nigeria");
}

print2();
*/

// const fruitProcessor = function (mangoes, oranges) {
// console.log(mangoes, oranges);
//   const juice = mangoes + oranges;

//   return juice;
// };

// const fruitJuice = fruitProcessor(3, 2);

// console.log(fruitJuice);

const fruitProcessor2 = (mangoes, oranges) => mangoes + oranges;

// Arrow function does not get 'this' keyword;

const fruitJuice2 = fruitProcessor2(3, 2);
console.log(fruitJuice2);

// const aObje = { i: "you" };
// console.log(aObje);
