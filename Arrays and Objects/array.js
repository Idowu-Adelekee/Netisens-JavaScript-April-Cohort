"use strict";
console.log("check in");

// const aboutLewis = 'Lewis';
// const lewisAge = ''

const aboutLewis = [
  "Lewis",
  "Isang",
  2025 - 2001,
  "Akwa Ibom",
  "Uyo",
  ["Chizzy", "Bigfish"],
];

console.log(aboutLewis);
console.log(aboutLewis[aboutLewis.length - 1]);

// console.log(aboutLewis[aboutLewis.length - 1], aboutLewis[2]);
// console.log(aboutLewis.length);

// Basic Operation on Arrays (Methods)

// Adding elements to an array
// 1. The Push Method to the end of an array
// 2. Unshift Method will add element to the begining of an array

aboutLewis.push("B.Sc Micro Biology");
aboutLewis.unshift("Male");

console.log(aboutLewis);

// Removing elements to an array
// 1. Pop method (This removes the last element of an array);
// 2. Shift (This removes the first element of an array);
const anything = aboutLewis.pop();
console.log(aboutLewis);

aboutLewis.shift();
console.log(aboutLewis);

// Deletin an element from an array

// aboutLewis.delete(24);
// aboutLewis.console.log(aboutLewis);

const number = [2, 3, 4, 5, 9, 0, 4];

// number.'you' = "2";
// console.log(number);

console.log(number.new);
console.log();
// number.0 = 44;
// console.log(number);

// console.log(number.splice(0));
// console.log(number.slice(1, 2));
// console.log(number.slice(2));
// console.log(number);
// console.log(number.at(1));
// console.log(number.at(6));
// console.log(number);

// console.log(aboutLewis.splice(2, 1));
// console.log(aboutLewis);

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const ages = [2001, 2019, 2002, 2005, 2002];

const lewisAge = calcAge(ages[0]);

console.log(lewisAge);

const studentAges = [
  calcAge(ages[0]),
  calcAge(ages[1]),
  calcAge(ages[2]),
  calcAge(ages[3]),
  calcAge(ages[4]),
];

console.log(studentAges);
console.log(aboutLewis);

// Objects
const aboutOdudu = {
  firstName: "Odudu",
  lastName: "Essien",
  birthYear: 2005,
  state: "Akwa-Ibom",
  LGA: "Uyo",
  friends: ["Khadija", "Bigfish", "Chizzy"],
  calcAge: function (birthYear) {
    return 2025 - birthYear;
  },
};

console.log(aboutOdudu);
