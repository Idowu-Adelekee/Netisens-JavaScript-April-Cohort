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

*/

// Function Expressions
const calcBirthYear = function (birthYear, firstName) {
  const age = 2025 - birthYear;
  console.log(age);
  return `${firstName} is ${age} years old`;
};

const idowuAge = calcBirthYear(1998, "Idowu");
const bigFishAge = calcBirthYear(1991, "Bigfish");
console.log(bigFishAge);

console.log(idowuAge);

// Using function declaration
function calcAge(birthYear, firstName) {
  const age = 2025 - birthYear;
  console.log(age);
  return `${firstName} is ${age} years old`;
}
const lewisAge = calcAge(2001, "Lewis");
console.log(lewisAge);

const calcAge2 = (firstName) => `${firstName} is a boy`;

const chizzyAge = calcAge2("Chizzy");
console.log(chizzyAge);

// FUNCTION CALLING ANOTHER FUNCION

const cutFruitPiece = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (oranges, mangoes) {
  const orangesPiece = cutFruitPiece(oranges);
  const mangoesPiece = cutFruitPiece(mangoes);

  console.log(orangesPiece, mangoesPiece);

  return `Fruit juice with ${orangesPiece} pieces of orange and ${mangoesPiece} pieces of mango`;
};

const juice = fruitProcessor(4, 2);
console.log(juice);

// Age, yearsUntilRetirement.
// Bigfish will retire in 35 years.

// Class
// Create

// Scope and Scoping
// Scoping controls how program's variable are organized and accessed. It asks a question where can we access a particular variable and where not.

// Lexical Scoping: JavaScript uses lexical scope which is means scope is accessed by placements of functions and blocks in our code

// There are 3 types of scope in JavaScript
//  1. Global Scope
// 2. Funtion scope
// 3. Block scope

const forScope = function () {
  const myScope = true;

  const innerScope = function () {
    const myInnerScope = false;
    console.log(myScope);
  };

  innerScope();
};

forScope();
// console.log(myScope);

let number = 0;
if (true) {
  number++;
  const ict = "Netisens";
} else {
  const noRestult = 0;
}

console.log(number);
// console.log(ict);

// Age
// Years Until Retirement
// Retiremennt age: 65
// OUTPUT: Lewis will retire in (65 - 24) years;

// Create a higher order function that calls another function which calc age of an indivual, the order should then calc the years until retirement and return it.

const ourFunction = function (birthYear) {
  console.log("How are you");
  console.log(birthYear);

  const age = 2025 - birthYear;

  return age;
};

// ourFunction(1998);
// console.log(ourFunction(1998));

const idowuAge2 = ourFunction(1998);
console.log(idowuAge2);
