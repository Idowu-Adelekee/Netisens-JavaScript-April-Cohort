"use strict";

console.log("check in");
// DATA
const account1 = {
  owner: "Odudu Inemesit Essien",
  movements: [2000, 9000, -2000, 50000, -30000, 90, 1200],
  interestRate: 0.5, //%
  pin: 1111,
};
const account2 = {
  owner: "Lewis Isang",
  movements: [5000, 30000, -15000, 60000, -30000, 300, 1200],
  interestRate: 0.3, //%
  pin: 2222,
};
const account3 = {
  owner: "Philip Sunday Umoren",
  movements: [40000, 11000, -90000, 50000, -30000, 90, 1200],
  interestRate: 0.3, //%
  pin: 3333,
};
const account4 = {
  owner: "Prince Victory",
  movements: [
    1200, 9000, -2000, 50000, -30000, 90, 1200, 53000, 80000, 19000, 3022,
    -19000,
  ],
  interestRate: 0.3, //%
  pin: 4444,
};

const account5 = {
  owner: "Edidiong Sunday",
  movements: [
    2000, 9000, -2000, 50000, -30000, 90, 1200, 100000, 20000, -90000, 30000,
  ],
  interestRate: 0.3, //%
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// SELECTING ELEMENTS
// Container
const containerMovementEl = document.querySelector(".container-movements");
const main = document.querySelector(".main");
const summary = document.querySelector(".summary");

// Label
const labelBalance = document.querySelector(".balance-total");
const labelTotalDeposit = document.querySelector(".summary-total--in");
const labelTotalWithdrawal = document.querySelector(".summary-total--out");
const labelTotalInterest = document.querySelector(".summary-total--interest");
const labelWelcome = document.querySelector(".label-welcome");

// Buttons
const btnLogin = document.querySelector(".btn__login");

// Inputs
const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPin = document.querySelector(".login-input-pin");

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

const calcDisplayBalance = function (mov) {
  const balance = mov.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `₦${balance.toLocaleString()}`;
};

const calcDisplaySummary = function (mov) {
  // 1. Total Amount Deposited
  const totalDeposit = mov
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelTotalDeposit.textContent = `₦${totalDeposit.toLocaleString()}`;

  // 2. Total Amount Withdrawn
  const totalWithdrawal = mov
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelTotalWithdrawal.textContent = `₦${Math.abs(
    totalWithdrawal
  ).toLocaleString()}`;

  // 3. Total Interest
  const totalInterest = mov
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account4.interestRate) / 100)
    .reduce((acc, int) => acc + int);
  labelTotalInterest.textContent = `₦${totalInterest.toLocaleString()}`;

  console.log(totalInterest);
};

// UPDATING THE UI
const updateUI = function (acc) {
  displayMovement(currentAccount.movements);

  // Display balance
  calcDisplayBalance(currentAccount.movements);

  // Display the summary
  calcDisplaySummary(currentAccount.movements);
};

// CLEARING THE INPUTS
const clearInputs = function () {
  inputLoginPin.value = inputLoginUsername.value = "";
  inputLoginPin.blur();
};

// IMPLEMENTING LOGIN FUNCTIONALITY

// const myName = "Prince Victory"; // iaa

const createUsername = function (accs) {
  accs.forEach(
    (acc) =>
      (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((firstLetter) => firstLetter[0])
        .join(""))
  );
};

createUsername(accounts);

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) =>
      inputLoginUsername.value === acc.username &&
      Number(inputLoginPin.value) === acc.pin
  );

  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    console.log(currentAccount);
    console.log(currentAccount.owner.split(" ")[0]);
    // Display the welcome message and UI

    main.classList.remove("no-visible");
    summary.classList.remove("no-visible");

    // Display the movements
    updateUI(currentAccount);
  }

  // Clear inputs
  clearInputs();
});

// console.log(inputLoginUsername.value);
// console.log(inputLoginUsername);
