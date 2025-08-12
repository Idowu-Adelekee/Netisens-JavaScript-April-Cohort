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
  movements: [-40000, -11000, -9000, -50000, -30000, -90, -1200],
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
const btnTransfer = document.querySelector(".btn-transfer");
const btnLoan = document.querySelector(".btn-loan");
const btnCloseAcc = document.querySelector(".btn-close");
console.log(btnLoan, btnCloseAcc, btnTransfer);

// Inputs
const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferUsername = document.querySelector(".input_transfer-user");
const inputTransferAmount = document.querySelector(".input_transfer-amount");
const inputLoanAmount = document.querySelector(".input_loan-amount");
const inputCloseusername = document.querySelector(".input_close-user");
const inputClosePin = document.querySelector(".input_close-pin");

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
            <div class="movements-value">${mov.toLocaleString()}</div>
    </div>
    `;
    containerMovementEl.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `₦${acc.balance.toLocaleString()}`;
};

const calcDisplaySummary = function (mov) {
  // 1. Total Amount Deposited
  const totalDeposit = mov
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelTotalDeposit.textContent = `₦${totalDeposit.toLocaleString()}`;

  // 2. Total Amount Withdrawn
  const totalWithdrawal = mov
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelTotalWithdrawal.textContent = `₦${Math.abs(
    totalWithdrawal
  ).toLocaleString()}`;

  // 3. Total Interest
  const totalInterest = mov
    .filter((mov) => mov > 0)
    .map((mov) => (mov * account4.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelTotalInterest.textContent = `₦${totalInterest.toLocaleString()}`;

  console.log(totalInterest);
};

// UPDATING THE UI
const updateUI = function (acc) {
  displayMovement(currentAccount.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display the summary
  calcDisplaySummary(currentAccount.movements);
};

// CLEARING THE INPUTS
const clearInputs = function () {
  inputLoginPin.value = inputLoginUsername.value = "";
  inputLoginPin.blur();

  inputTransferUsername.value = inputTransferAmount.value = "";
  inputTransferAmount.blur();

  inputLoanAmount.value = "";
  inputLoanAmount.blur();

  inputClosePin.value = inputCloseusername.pin = "";
  inputClosePin.blur();
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

// IMPLEMENTING THE TRANSFER FUNCTIONALITY
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const recipientAccount = accounts.find(
    (acc) => inputTransferUsername.value === acc.username
  );
  const amount = Number(inputTransferAmount.value);

  if (
    recipientAccount &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    recipientAccount !== currentAccount
  ) {
    currentAccount.movements.push(-amount);
    recipientAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);

    console.log("Transfered");
  }

  clearInputs();
});

// IMPLEMENTING REQUESTING LOAN
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov > 0 && amount < mov) &&
    currentAccount.balance > 0
  ) {
    currentAccount.movements.push(amount);

    // Update the UI
    updateUI(currentAccount);
  }

  clearInputs();
});

// IMPLEMENTING THE CLOSING OF ACCOUNT FUNCTIONALITY
btnCloseAcc.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseusername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (acc) => currentAccount.username === acc.username
    );

    accounts.splice(index, 1);

    main.classList.add("no-visible");
    summary.classList.add("no-visible");
  }

  clearInputs();
});
