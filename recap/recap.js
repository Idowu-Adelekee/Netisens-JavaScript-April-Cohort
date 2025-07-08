"use strict";

console.log("Lifting weight repetion 1");
console.log("Lifting weight repetion 2");
console.log("Lifting weight repetion 3");
console.log("Lifting weight repetion 4");
// console.log("Lifting weight repetion 1");
// console.log("Lifting weight repetion 1");
// console.log("Lifting weight repetion 1");
// console.log("Lifting weight repetion 1");

console.log("--------For Loop-------");
for (let number = 1; number <= 4; number++) {
  console.log(`Lifting weight repetion ${number}`);
}

let globalMoney = 300;
// Function expression
const calcBalance = function (debit, credit) {
  const balance = 2500;
  console.log(globalMoney);
  return `Your balance is ₦${balance - debit + credit}`;
};

// console.log(balance);

if (true) {
  const yourMoney = 90000;
  var yourBalance = 200;
}
// console.log(yourMoney);
console.log(yourBalance);

console.log(calcBalance(2000, 500));

const newBalance = calcBalance(2000, 500);
console.log(newBalance);
