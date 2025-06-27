// 2. OPERATORS AND EXPRESSIONS
/\*
// Lecture
// Basic Operator
Operator allows us to transform values or combine multiple values or do all kind of work with value.
There are many types of operators, such as mathematical operator, assignment operatos, comparison operators, logical operators etc.

// 1. Mathematical operators
const now = 2025;
const ageJonas = now - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas _ 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 _ 2 _ 2 _ 2 which means 2 raise to power of 3

// We can also use addition to concatenate string
const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// Typeof operators (We already know this);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10;
x _= 4; // x = x _ 4;
x++; // x = x + 1;
x--; // x = x - 1;
x--; // x = x - 1;
console.log(x);

// Comparison operators (We used comparison operators to produce a value);
console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas === ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageJonas >= 18;

const isSarahMature = now - 1991 > now - 2018;

// Lecture
// Template Literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2025;

const jonas =
"I'm " + firstName + ", a" + " " + (year - birthYear) + " years old teacher";

console.log(jonas);

const aboutMe = `I'm ${firstName} and I'm a ${
  year - birthYear
} years old teacher`;
console.log(aboutMe);

// Lecture
// Control Structures:
// We will use if else statement and ternary operator to explain the concept of statements and expressions

const age = 7;
const isOldEnough = age >= 10;
console.log(isOldEnough);

if (age >= 10) {
console.log("Sarah can start driving licese");
} else {
const yearLeft = 18 - age;
console.log(`Sarah is too young, wait another ${yearLeft} years`);
}

// Another Example
const birthYear = 2003;
let century;

if (birthYear <= 2000) {
century = 20;
} else {
century = 21;
}
console.log(century);

// Lecture
// Type Conversion and Type Coercion

// Type Conversion
// Type conversion is where will normally convert one thing to another
// Type coercion is where JavaScript automatically convert somthing behind the scene for us.

const inputYear = "1991" + 18;
// Converting string to number
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

// Converting number to string
const currentYear = String(2025);
console.log(currentYear);

// We can convert a value to a number, to a string and to a boolean but we can't convert to undefined or null

// Type Coercion
// The plus operator coerce number into a string
console.log("I am " + "Idowu " + "a " + 27 + " year" + " Youngman");
// The subtration, division and multiplication operator coerce string into a number
console.log("44" + "10" - 4);
console.log("23" \* "2");
console.log("15" / "3");

// Guess the number
let n = "1" + 1;
n--;
console.log(n);

console.log("2" + "3" + "4" + 5);

// The Truthy and false
// False value are the value that wil become false once you convert them to boolean
// The five Falsy value = 0, '', undefined, null, NaN;

let webDev = "Good students";
console.log(Boolean());
// JavaScript do type coercion to a boolen logic in logical operator and conditional like if else statement;

// Example
const money = 0;

// Example 1
if (money) {
console.log("Don't spend it all");
} else {
console.log("You should get a job!");
}

// Example 2
let height;
if (height) {
console.log(`Cool!, height is defined`);
} else {
console.log("Height is defined");
}

// Lecture
// Eqaulity Operator
// The strict equality operator === (Does not do type coercion);
// But the strict eqaulity operator === (Does do type coercion);

const age = 18;
if (age === 18) console.log("You just became an adult");
else console.log("You are still a baby");

console.log(18 == "18");
console.log(18 === "18");

// Example 1 :
const favouriteNumber = Number(prompt("What's your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
console.log(`Cool! 23 is an amazing number`);
} else if (favouriteNumber === 7) {
console.log(`7 is also a cool number`);
} else if (favouriteNumber === 2) {
console.log(`2 is an amazing number`);
} else if (favouriteNumber === 1) {
console.log(`1 is a the begining`);
} else {
console.log(`No number inserted`);
}

// Not equal to or different operator !=

if (favouriteNumber !== 23) console.log("Why not 23?");

console.log("Are you there?");

Lecture
Boolean Logic
Boolean logic is a branch of computer science which uses true and false value to solve complex logical problem. In order to do that it uses several logical operators to combine true and false values. They can be somtimes be confusion so we are just going to scratch the surface.
We are just going to talk about AND, OR and NOT

Example:
A. Rejoice has a driver's license
B. Rejoice has good vision

Using AND operators
Rejoice has a driver's license AND has a good vision

The AND Table
True AND True === true
True and False === false
Fasle and False === false

// Generalization:
true AND true AND true === true;
true AND true AND false === false;

// The OR Table
True OR True === true
true OR false === true
false OR false === false

// Example:
A. Rejoice has a driver's license
B. Rejoice has good vision

Using AND operators
Rejoice has a driver's license OR has a good vision
The OR logical operand is true if one of the value is true

// The NOT operators
The just inverse the value of the logical operator i.e. if A is true, not A will be false; and if false not A will become true.

const age = 16;
A. age is greater or equal 20 === false
B. Age is less than 30 === true

Combination:
Let's use operators
NOT
What's !A === [true]
What's A AND B === [false]
What's A OR B === [true]
What's !A AND B === [true]
What's A OR !B === [false]

Lecture
Logical Operators
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasGoodVision);

Let's use it to take decision

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
console.log(`Sarah is able to drive!`);
} else {
console.log(`Someone else should drive...`);
}

// Let's take it to the next level
const isTired = false; // C

console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
console.log(`Sarah is able to drive!`);
} else {
console.log(`Someone else should drive...`);
}

The Switch Statement
The switch statemnt is an alternative of if else statement

const day = "saturday";
switch (day) {
case "monday": /// day === monday
console.log("Plan course structure");
console.log("Go to coding meetup");
break;
case "tuesday":
console.log("Prepare theory videos");
break;
case "wednesday":
case "thursday":
console.log("Write code examples");
break;
case "friday":
console.log("Record videos");
break;
case "saturday":
case "sunday":
console.log("Enjoy the weekend :D");
break;
default:
console.log("Not a valid day");
}

Using else if statement

if (day === "monday") {
console.log("Plan course structure");
console.log("Go to coding meetup");
} else if (day === "tuesday") {
console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
console.log("Write code examples");
} else if (day === "friday") {
console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
console.log("Enjoy your weekend");
}

Lecture
Statement and Expression
Expression
And Expression is a piece of codes that produces a value.
For example: 3 + 4, 99, true, false, true && false && !true;

// // Statement
// // A statement is a bigger pieces of code that is executed but not produces a value on its self;

// // For example a sentence is like a statment but the words in a sentence are values.

// if (23 > 10) {
// const str = "23 is bigger";
// // the '23 is bigger is an expression' while all the line itself is a statement.
// }

// // JavaScript expects expression is some places while for example in a template literals.
// // For example
// console.log(`I'm ${2025 - 1991} years old`);

// // // But not this
// // console.log(`I'm ${if(23 > 20) {
// // }} years old`);

const myName = "Ade";
// // variable is always an expression
console.log(`Hello everyone my name is ${myName}`);

// in short value is an expression while a block of code is a statement. Also anything that produces a value like operator or variable is also expression too.

Lecture
Another conditional
The Ternary Operator
const age = 23;
const wineOrWater =
age >= 18
? console.log(`I like to drink wine`)
: console.log(`I like to drink water`);

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
drink2 = "wine";
} else {
drink2 = "water";
}
console.log(drink2);

// Let's take a folder

console.log(`I like to drink ${drink}`);

Lecture
Loop
Loop are fundamental of every programming language because they allow us to undertake repetitive task

console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");

The for loop (statement);
The for loop has three part (the initial value of the counter, the logical value that is evaluated before each iteration of the loop, and the counter)
Note: the loop keep running while the condition is true.

console.log("**\_\_\_\_**The for Loop\***\*\_\_\_\*\***");
for (let rep = 1; rep <= 10; rep++) {
<!-- console.log(`Lifting weights repetition ${rep}`); -->
}
