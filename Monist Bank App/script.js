"use strict";

console.log("check in");
// DATA
const account1 = {
  owner: "Odudu Inemesit Essien",
  movements: [2000, 9000, -2000, 50000, -30000, 90, 1200],
  interestRate: 1.2, //%
  pin: 1111,
};
const account2 = {
  owner: "Lewis Isang",
  movements: [5000, 30000, -15000, 60000, -30000, 300, 1200],
  interestRate: 1.2, //%
  pin: 2222,
};
const account3 = {
  owner: "Philip Sunday Umoren",
  movements: [40000, 11000, -90000, 50000, -30000, 90, 1200],
  interestRate: 1.5, //%
  pin: 3333,
};
const account4 = {
  owner: "Prince Victory",
  movements: [
    1200, 9000, -2000, 50000, -30000, 90, 1200, 53000, 80000, 19000, 3022,
    -19000,
  ],
  interestRate: 1.1, //%
  pin: 4444,
};

const account5 = {
  owner: "Edidiong Sunday",
  movements: [
    2000, 9000, -2000, 50000, -30000, 90, 1200, 100000, 20000, -90000, 30000,
  ],
  interestRate: 1.7, //%
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// SELECTING ELEMENTS
const containerMovementEl = document.querySelector(".container-movements");

// THE APP STARTS HERE
const displayMovement = function (mov) {
  containerMovementEl.innerHTML = "";

  mov.forEach((mov, i) => {
    const type = mov > 1 ? "deposit" : "withdrawal";

    const html = `
     <div class="movements-row">
            <div class="movements-type movement-type--${type}">${
      i + 1
    } ${type}</div>
            <div class="movements-value">${mov}</div>
    </div>
    `;
    containerMovementEl.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovement(account5.movements);
