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



// console.log(3 === 4);
// console.log(3 !== 3);
// console.log(3 !== 4);

// // Not eqaul to operator
// console.log(5 !== 5);

// BOOLEAN LOGIC
// AND
// OR
// NOT

// AND Table
// true AND true === true
// true AND false === false
// false AND true === false
// false AND false === false

// OR Table
// True OR true === true
// true OR false === true
// false OR true === true
// false OR false  === false

// NOT (Inversion)
// !true === false;
// !false === true;

// The syntanx
// AND === &&
// OR === ||
// EXAMPLE

const hasDriversLicense = true;
const hasGoodVision = true;

const isDrunk = false;

// Combining AND
console.log(hasDriversLicense && hasDriversLicense);
console.log(hasDriversLicense && hasGoodVision);
console.log(hasGoodVision && hasGoodVision);

// Combining OR
console.log(hasDriversLicense || hasDriversLicense);
console.log(hasDriversLicense || hasGoodVision);
console.log(hasGoodVision || hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isDrunk) {
  console.log(`Mr. Lewis can drive`);
} else {
  console.log(`Mr. Lewis cannot drive`);
}

// const myName = "Idowu";
// const myAge = 27;

// if (!myName) console.log(`Idowu is his name`)
// else console.log("His name is not Idowu")

// Truthy and falsy values;

// 5 falsy values
// 1. Undefined;
// 2. null
// 3. 0
// 4. '';
// 5. NaN

const zero = 0;
const number = 4;

if (zero) {
  console.log("This is truthy value");
} else {
  console.log("This is falsy value");
}



// The Switch Statement
const day = "monday";

switch (day) {
  case "Monday":
    console.log("Go to the bank");
    break;
  case "tuesday":
    console.log("Go to the market");
    break;
  case "wednesday":
    console.log("Travel to village");
    break;
  case "thurday":
    console.log("Go to the mall");
    break;
  case "friday":
  case "saturday":
    console.log("Go and party with friends");
  case "sunday":
    console.log("Go to Church");
    break;
  default:
    console.log(`Not a valid day`);
}

const day2 = "january";

if (day2 === "monday") {
  console.log("Go to the bank");
} else if (day2 === "tuesday") {
  console.log("Go to the market");
} else if (day2 === "wednesday") {
  console.log("Travel to village");
} else if (day === "thursday") {
  console.log("Go to the mall");
} else if (day2 === "friday" || day2 === "saturday") {
  console.log("Party with friends");
} else if (day2 === "sunday") {
  console.log("Go to church");
} else {
  console.log("Not a valid day");
}

*/

// Ternary operator
const school = "Uniuyo";

const illiterate = school ? `I went to ${school}` : `I didn't go to ${school}`;

console.log(illiterate);

// Statement and Expression
// 23 false undefined;
23;
const number = 23;

const firstName = "Lewis";
const lastName = "Isang";
const gender = 1;

const whoIsHe = `His name is ${firstName} ${lastName}, and he's ${
  2025 - 2001
}. He is a ${gender ? "Man" : "Woman"}`;

console.log(whoIsHe);

// DRY === DON'T REPEAT YOURSELF

// LOOP
// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetition 2");
// console.log("Lifting weight repetition 3");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 4");
// console.log("Lifting weight repetition 6");
// console.log("Lifting weight repetition 7");
// console.log("Lifting weight repetition 8");
// console.log("Lifting weight repetition 9");
// console.log("Lifting weight repetition 10");

// The for loop has 3 parts, the initial value, the condition and the counter;

console.log("_____Using Loop____");
for (let rep = 5; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

// ASSIGNMENT
// Create a loop inside of a loop, by repeting 5 repetition inside of 3 set of exercises, e.g. 5 reps inside the first exercise, 5 reps inside the second exercise and 5 reps inside the third exercise.
