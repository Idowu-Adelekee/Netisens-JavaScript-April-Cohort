"use strictt";

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

const containerEl = document.querySelector(".countries");
console.log(containerEl);

const getCountryData = function (countryName) {
  const response = fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(function (lewis) {
      return lewis.json();
    })
    .then(function (chizzy) {
      console.log(chizzy[0]);
      const [country] = chizzy;
      // const country = chizzy[0];
      console.log(country);

      const html = `
     <article class="country">
          <img class="country__img" src="${country.flag}" />
          <div class="country__data">
            <h3 class="country__name">${country.name}</h3>
            <h4 class="country__region">${country.region}</h4>
            <p class="country__row"><span>👫</span>${country.population} people</p>
            <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${country.currencies[0].code}</p>
          </div>
        </article>
    `;

      containerEl.insertAdjacentHTML("afterbegin", html);
    });
};

// getCountryData("nigeria");
// getCountryData("usa");
// getCountryData("portugal");
// getCountryData("canada");
// g
getCountryData("japan");
getCountryData("china");
getCountryData("india");
getCountryData("pakistan");
getCountryData("russia");
getCountryData("zimbabwe");
getCountryData("benin");

console.log(response);
console.log("first of all");
