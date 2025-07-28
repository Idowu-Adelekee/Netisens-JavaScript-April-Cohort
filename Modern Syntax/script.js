"use strict";

const openingHours = {
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
};

const location2 = "No. 34 Oron Road, Uyo Akwa-Ibom";

const restaurant = {
  name: "Udy Pot",
  location2,
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

  openingHours,

  orderIbibioMeal(first, second) {
    return [this.ibibioSoup[first], this.swallow[second]];
  },

  orderYorubaMeal({ location, time, yorubaSoup, swallow }) {
    console.log(
      `Order recieved, ${this.yorubaSoup[yorubaSoup]} and ${this.swallow[swallow]} will be delivered at ${location} by ${time}pm`
    );
  },
};

// STRING METHODS
// The indexOf, the lastIndexOf method
// The slice method
// toLowerCase();
// toUpperCase();
// replace
// includes
// startsWith and endsWith
// split
// join

const oduduFullname = "Odudu Inemesit Essien";
const godlyFirstname = "godLy godwin gift";

const capitalizedName = function (name) {
  const names = name.toLowerCase().split(" ");

  const correctName = [];
  for (const firstword of names) {
    correctName.push(firstword[0].toUpperCase() + firstword.slice(1));
  }

  console.log(correctName.join(" "));
};

capitalizedName("goDly phIlip umOren"); // Godly Philip Umoren
capitalizedName(godlyFirstname); // Godly Philip Umoren
capitalizedName("Idowu AdEdotun MichaeL adeleke noble"); // Godly Philip Umoren

const number = 1234;
const name = "Big fish";
const allOfThem = name + number;
console.log(allOfThem);

const myString = "You are loved";
const myNumber = 3898;

console.log(String(myNumber));

console.log(myNumber + "");

// const oduduFullname = "Odudu Inemesit Essien";
// const godlyFirstname = "uodly uodwin uift";

// INDEX
// console.log(name[0]);
// console.log(name[5]);

// // INDEXOF AND LASTINDEXOF
// console.log(name.indexOf("O"), name.indexOf("Odudu"));
// console.log(name.lastIndexOf("d"));

// SLICE
// const firstName = fullname.slice(0, 5);
// console.log(firstName);

// TOLOWERCASE AND TOUPPERCASE
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// REPLACE
// console.log(godlyFirstname.replace("u", "G"));
// console.log(godlyFirstname.replaceAll("u", "G"));
// console.log(godlyFirstname.replace("uodly", "Godly"));

// console.log(oduduFullname.includes("odudu"));
// console.log(oduduFullname.startsWith("Odudu"));

// console.log(oduduFullname.split(" ", 2));

// const joshuaFullname = ["Joshua", "Ubongabasi"];

// console.log(joshuaFullname.join(" "));

// Exercise
// const capitalizedName = function (name) {

// };

// console.log("goDly phIlip umoren");

// map Method
// const moneyMovementsUSD = [2000, 4000, -3500, 9000, -200, 1300];

// const max = moneyMovementsUSD.reduce((acc, val) => {
//   if (acc > val) return acc;
//   else return val;
// }, moneyMovementsUSD[0]);

// console.log(max);

// const dollarRate = 1600;

// const nairaMovements = moneyMovementsUSD.map(function (mov, i) {
//   return mov * dollarRate;
// });
// const nairaMovements = moneyMovementsUSD.map((mov, i) => mov * dollarRate);

// console.log(nairaMovements);

// const depositMovements = moneyMovementsUSD.filter((mov) => mov < 0);
// console.log(depositMovements);

// const allMovements = moneyMovementsUSD.reduce(function (acc, mov, i, arr) {
//   return acc + mov;
// });

// console.log(allMovements);

// Assignment: Use the reduce method to find the biggest number in the moneyMovementsUSD array

// forEach
// Side effect
// const moneyMovements = [2000, 4000, -3500, 9000, -200, 1300];

// moneyMovements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(mov);
//   }

//   console.log(
//     `At movement ${i + 1}, You ${mov > 0 ? "deposit" : "withdrawal"} ${Math.abs(
//       mov
//     )}`
//   );

//   return mov;
// });

// THE FOR OF LOOP
// const moneyMovements = [2000, 4000, -3500, 9000, -200, 1300];

// for (let i = 0; i < moneyMovements.length; i++) console.log(moneyMovements[i]);

// console.log("___For of Loop");
// for (const [i, mov] of moneyMovements.entries()) {
//   console.log(
//     `At movement ${i + 1}, You ${mov > 0 ? "deposit" : "withdrawal"} ${Math.abs(
//       mov
//     )}`
//   );
// }

// ARROW FUNCTION REVIEW

// const helloMachine = function (greet, firstName) {
//   return `Hello ${greet}, I'm ${firstName}`;
// };

// const gretter = helloMachine("everyone", "Idowu");
// console.log(gretter);

// const helloMachine2 = (greet, firstName) => {
//   console.log(`Hey ${firstName}`);
//   return `Hello ${greet}, I'm ${firstName}`;
// };

// const gretter2 = helloMachine2("everybody", "Lewis");
// console.log(gretter2);

// console.log(...moneyMovements.entries());

// THE SPLICE METHOD

// const names = ["Lewis", "Mr. Barry", "Odudu", "Khadija", "Bigfish"];

// console.log(names.splice(2, 3));
// // console.log(names);
// // console.log(names.splice(-1));
// console.log(names);

// THE SLICE METHOD
// const number = [2, 3, 4, 5, 6, 7, 8];
// console.log(number.slice(1, 5));
// console.log(number.slice(2));

// const [soup, swallow] = [
//   ...restaurant.yorubaSoup.slice(-1),
//   ...restaurant.swallow.slice(-1),
// ];
// console.log(soup, swallow);

// console.log(...number);

// OPTIONAL CHAINING
// console.log(restaurant.openingHours.fri.open);
// // console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.orderIgboMeal?.(4, 8));

// const [soup, swallow] = restaurant.orderIbibioMeal?.(2, 3);
// const soup2 = restaurant.orderHausaMeal?.();
// console.log(soup2);

// console.log(soup, swallow);

// if (restaurant.orderHausaMeal) {
//   console.log(restaurant.orderHausaMeal());
// } else {
//   console.log(`There is no hausa meal here`);
// }

// console.log(restaurant?igalaSoup?.['Ewedu']);
// const [soup, swallow] = restaurant?.orderIgalaMeal(0, 1);

// const rest1 = {
//   name: "Noble Pot",
//   location: "Uyo",
// };
// console.log(rest1.nam);

// console.log(soup, swallow);

// console.log(restaurant.yorubaSoup[0]);

// THE REST PATTERN
// const [name, nameLocation, ...yorubaSoup] = [
//   restaurant.name,
//   restaurant.location2,
//   ...restaurant.yorubaSoup,
// ];

// console.log(name, nameLocation, yorubaSoup);

// const isItTrue = true || false || false || true || !true;

// const isItFalse = true && false && false && true && !true;

// console.log(isItTrue, isItFalse);

// Return, recive any data types and they do short circuiting

// The (||) or operator return the first found truthy value but return the last falsy value if there is no truthy value;
// const richMan = "Money" || "noMoney" || undefined || 0;

// const richMan2 = 0 || false || undefined || 0 || null;

// const richMan3 = null || 0 || "money" || undefined;

// console.log(richMan);
// console.log(richMan2);
// console.log(richMan3);

/// AND

// The (&&) AND operator return the first found falsy value but return the last truthy value if there is no falsy value;

// const averageMan = "Money" && "noMoney" && undefined && 0;

// const averageMan2 = 0 && false && undefined && 0 && null;

// const averageMan3 = 2 && [3, 4] && "money" && true;

// console.log(averageMan, averageMan2, averageMan3);

// const number = [2, 3, 4, 5, 6, 7, 8, 9];

// const [firstNumber, ...otherNumbers] = number;

// console.log(firstNumber, otherNumbers);

// THE SPREAD OPERATOR
// const number = [2, 3, 4, 5, 6];

// const completeNumber = [number[0], number[1], number[2], 8, 9, 10];

// const completeNumber = [...number, 7, 8, 9, 10];

// console.log(completeNumber);

// const allUdyPotSoup = [
//   ...restaurant.ibibioSoup,
//   ...restaurant.yorubaSoup,
//   ...restaurant.igboSoup,
//   ...restaurant.hausaSoup,
// ];

// console.log(allUdyPotSoup);

// let firstName = "Odudu";
// console.log("O", "d", "u", "d", "u");
// console.log(...firstName);

// restaurant.orderYorubaMeal({
//   location: "Atiku",
//   time: 8,
//   swallow: 0,
//   yorubaSoup: 2,
// });

// console.log("Hi");
// console.error("You are an error");

// DESTRUCTURING ASSIGNMENT\
// Destructuring object: unpacking object and store into new variables

// Nested Destructuring
// restaurant.orderYorubaMeal({
//   location: "Atiku",
//   time: 8,
//   swallow: 0,
//   yorubaSoup: 2,
// });

// const {
//   thu: { open: thuOpenHrs },
//   fri: secondDay,
//   sat: thirdDay,
// } = restaurant.openingHours;

// console.log(thuOpenHrs, secondDay, thirdDay);

// Destructuring arrays: unpacking array and store into new variables
// const [soup, swallow] = restaurant.orderIbibioMeal(0, 1);
// console.log(soup, swallow);

// const number = [2, 3, 4, 5, 6, [7, 8], 9, 10];

// const bigFish2 = number[0];
// const bigFish3 = number[1];
// const bigFish5 = number[3];
// const bigFish7 = number[5][0];

// console.log(bigFish2, bigFish3, bigFish5, bigFish7);

// const [smallFish2, smallFish3, , smallFish5, , [smallFish7]] = number;

// console.log(smallFish2, smallFish3, smallFish5, smallFish7);

// const emmanueltwo = number[0];
// console.log(emmanueltwo);

// const [numberTwo, numberThree, , fiveDigit, , []] = number;
// console.log(numberTwo, numberThree, fiveDigit);

// const [eba, akpu] = restaurant.swallow;

// const [courseRep, assCourseRep] = ["Lewis", "Khadija"];
// console.log(courseRep, assCourseRep);

// console.log(eba, akpu);
// console.log(restaurant.ibibioSoup);
// // Dinosaur way of doing this.
// const number2 = number[0];
// const number3 = number[1];
// console.log(number2, number3);

// const [odudu, numberThree, , numberFive, , [, numberEight]] = number;

// let [lewisPeopleSoup, , OduduPeopleSoup] = restaurant.ibibioSoup;
// console.log(lewisPeopleSoup, OduduPeopleSoup);

// console.log(odudu, numberThree, numberFive, numberEight);

// console.log(lewisPeopleSoup, OduduPeopleSoup);

// let tempSoup = OduduPeopleSoup;
// lewisPeopleSoup = tempSoup;

// console.log(lewisPeopleSoup, OduduPeopleSoup);
// let tempSoup = OduduPeopleSoup;

// OduduPeopleSoup = lewisPeopleSoup;
// lewisPeopleSoup = tempSoup;

// console.log(lewisPeopleSoup, OduduPeopleSoup);

// [lewisPeopleSoup, OduduPeopleSoup] = [OduduPeopleSoup, lewisPeopleSoup];
// console.log(lewisPeopleSoup, OduduPeopleSoup);

// CLASSWORK

// const addNumbers = function (numbers) {
//   console.log(numbers);

//   // Add each element of the numbers array together
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };

// addNumbers([2, 3]);
// addNumbers([2, 4, 8, 9]);
// addNumbers([20, 30, 40]);
// addNumbers([38, 200, 400, 900, 200, 2]);
