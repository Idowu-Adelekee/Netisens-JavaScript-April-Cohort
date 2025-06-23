"use strict";
// Variables and Data types

// const number = 23;
// const name = "Netisens";
// const goodTogo = true;
// let age = 21;
// age = 22;

// const age2 = 23;
// age2 = 24;

// console.log(typeof name);
// console.log(typeof number);
// console.log(typeof goodTogo);

// OPERATORS
// Operator allows us to transform values or combine multiple values or do all kind of work with value.

//  There are many types of operators, such as mathematical operator, assignment operatos, comparison operators, logical operators etc.

/*
const currentYear = 2025;
const birthYear = 1998;
const lewisBirthYear = 2001;

// The subtraction
const ageRejoice = currentYear - birthYear;
const ageLewis = currentYear - lewisBirthYear;
// console.log(age);
console.log(ageLewis);

// Addition
const lewisInTheNextTwoYears = ageLewis + 2;

console.log(lewisInTheNextTwoYears);

console.log(20 + 23 + 40);

// Using addition for string concertenation
const myAge = 27;
const sarahAge = "p";

console.log(myAge + sarahAge);

const firstName = "Lewis ";
const surname = "Isang";
const fullName = firstName + surname;

const whoIsLewis = firstName + "is " + "a " + "young " + "man " + ".";

console.log(fullName);
console.log(whoIsLewis);

// Multiplication
console.log(2 * 2);
console.log(3 * 7);
console.log(2 ** 3); // This means 2 * 2 *2;

// Division
console.log(9 / 3);
console.log(40 / 4);


// ASSIGNMENT OPERATORS
const ict = "Netisens";
let x = 10;
// x = x + 10;
x += 20;
x -= 5;
console.log(x);

let y = 40;
// y = y - 1;
y--;
y++;
console.log(y);

// Comparison Operators
const ageLewis = 24;
const ageBen = 25;
console.log(ageLewis > ageBen);

console.log(ageLewis == ageBen);

const password = "24";
const passkey = 24;
console.log(passkey === password);

console.log(ageLewis >= ageBen);


// Template Literals or Template Strings

const myName = "Idowu";
const school = "University of Abuja";

const aboutMe2 = "Hello" + "I am" + myName;
console.log(aboutMe2);

const aboutMe = `Hello, I am ${myName}, I studied at the ${school}.`;
console.log(aboutMe);


// CONTROL STRUCTURE
// 1. IF ELSE STATEMENT
// 2. TERNAY OPERATOR
// 3. LOOP

// if else statement;
const age = 12;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);

if (age >= 18) {
  console.log(`You can start driving`);
} else {
  console.log(`You are not old enough, wait till when you are 18 years of age`);
}

const birthYear = 1998;
let century = 20;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Type coercion and type conversion.

console.log(23 == "23");

const number = String(40);
const string = Number("13");

console.log(typeof string);
console.log(typeof number);
*/

const number = Number(prompt("What is your favourite number"));

console.log(number);

if (number === 1) {
  console.log(`I carry first`);
} else if (number === 2) {
  console.log(`I carry second`);
} else if (number === 3) {
  console.log(`I carry third`);
} else {
  console.log(`Invalid number`);
}
