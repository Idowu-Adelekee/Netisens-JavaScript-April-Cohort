"use strict";

// const countriesContainer = document.querySelector(".countries");
// const btn = document.querySelector(".btn-country");

// console.log("check in ");

// setTimeout(function () {
//   console.log("This is the set timeout");
// }, 2000);

// setInterval(function () {
//   console.log("This is the set interval");
// }, 1000);

// console.log("Hello man");

// NOTE ON ASYCHRNOUS JAVASCRIPT

// The main purpose of async is to make ajax call to api
// Async js and xml: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically

// API: is piece of software that can be used by another piece of software, order to allow applications to talk to each other. e.g dom api, geolocation api

// A promise is an object that is used as a placeholder for the future result of an asynchronous operation.

// Promise and the fetch API
// https://dummyjson.com/
// const response = fetch("https://restcountries.com/v2/name/nigeria")
//   .then(function (result) {
//     return result.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// const containerEl = document.querySelector(".countries");
// console.log(containerEl);

// setTimeout(function () {
//   console.log("Two seconds have passed");
// }, 2000);

// console.log("Hello August");
// const thisYear = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   ["others"],
// ];

// console.log(thisYear);

// const response = fetch(`https://dummyjson.com/recipes
// `)
//   .then(function (result) {
//     console.log(result);
//     return result.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

const countriesContainer = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

const displayCountry = function (country) {
  const countryData = `
     <article class="country">
          <img class="country__img" src="${country.flag}" />
          <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${Math.trunc(
              country.population / 1000000
            )}m people</p>
            <p class="country__row"><span>🗣️</span>${
              country.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
              country.currencies[0]?.code
            }</p>
          </div>
        </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", countryData);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (countryName) {
//   const response = fetch(`https://restcountries.com/v2/name/${countryName}`)
//     .then((result) => result.json())
//     .then((data) => {
//       const [country] = data;
//       displayCountry(country);
//     })
//     .catch(function (error) {
//       console.log(error);
//       // alert(error.message);

//       countriesContainer.insertAdjacentText(
//         "beforeend",
//         `Something went wrong ${error.message}`
//       );
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// getCountryData("nigeria");

// btn.addEventListener("click", function () {
//   getCountryData("china");
// });

const getCountryData = async function (countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );
    console.log(response);
    // if (!response.ok) {
    //   throw new Error();
    // }

    const data = await response.json();
    console.log(data);
    const [country] = data;

    const dummyPost = await fetch(`https://dummyjson.com/recipes`);
    const dummyResult = await dummyPost.json();
    console.log(dummyResult);

    displayCountry(country);
  } catch (error) {
    console.error(`Something went wrong ${error.message}`);
  }
};

btn.addEventListener("click", function () {
  getCountryData("nigeria");
});

// console.log("Hello August");

// const y = 3;
// let x = 2;
// y = 1;
// try {
//   const y = 3;
//   let x = 2;
//   y = 1;
// } catch (err) {
//   console.error(`Something went wrong ${err.message}`);
// }
