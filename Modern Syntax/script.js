"use strict";

const restaurant = {
  name: "Udy Pot",
  ibibioSoup: [
    "Afang",
    "Editan",
    "Atama",
    "White Soup",
    "Fisherman Soup",
    "Ekpang Nkukwo",
  ],
  igboSoup: ["Oha", "Nsala", "Onugbu", "Akwu", "Egwusi"],
  yorubaSoup: ["Ewedu", "Efo Riro", "Gbegiri", "Egboyin", "Abula"],
  hausaSoup: ["Wake", "Zogale", "Miyan", "Taushe"],
  swallow: ["Garri", "Fufu", "Semovita", "Amala", "Pounded Yam"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 9,
      close: 23,
    },
    sat: {
      open: 8,
      clos: 10,
    },
  },

  orderIbibioMeal: function (first, second) {
    return [this.ibibioSoup[first], this.swallow[second]];
  },
};

// console.log("Hi");
// console.error("You are an error");

// DESTRUCTURING ASSIGNMENT
// Destructuring arrays: unpacking array and store into new variables
const [soup, swallow] = restaurant.orderIbibioMeal(0, 1);
console.log(soup, swallow);

const number = [2, 3, 4, 5, 6, [7, 8], 9, 10];

console.log(restaurant.ibibioSoup);
// Dinosaur way of doing this.
const number2 = number[0];
const number3 = number[1];
console.log(number2, number3);

const [odudu, numberThree, , numberFive, , [, numberEight]] = number;

let [lewisPeopleSoup, , OduduPeopleSoup] = restaurant.ibibioSoup;
console.log(lewisPeopleSoup, OduduPeopleSoup);

console.log(odudu, numberThree, numberFive, numberEight);

console.log(lewisPeopleSoup, OduduPeopleSoup);

// let tempSoup = OduduPeopleSoup;
// lewisPeopleSoup = tempSoup;

// console.log(lewisPeopleSoup, OduduPeopleSoup);
// let tempSoup = OduduPeopleSoup;

// OduduPeopleSoup = lewisPeopleSoup;
// lewisPeopleSoup = tempSoup;

// console.log(lewisPeopleSoup, OduduPeopleSoup);

[lewisPeopleSoup, OduduPeopleSoup] = [OduduPeopleSoup, lewisPeopleSoup];
console.log(lewisPeopleSoup, OduduPeopleSoup);
