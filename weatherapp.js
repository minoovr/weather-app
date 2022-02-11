//challenge1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let selecttime = document.querySelector("#nowtime");
let showday = days[now.getDay()];
let showhour = now.getHours();
let showminutes = now.getMinutes();
nowtime.innerHTML = `${showday} ${showhour}:${showminutes}`;
//challenge 2
function searchcity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
}
let form = document.querySelector("#searchedcity");
form.addEventListener("submit", searchcity);
//challenge 3
function showCelsius() {
  let temperatureform = document.querySelector("#temperature");
  temperatureform.innerHTML = 19;
}
let tempC = document.querySelector("#celsius");
tempC.addEventListener("click", showCelsius);

function showFahrenheit() {
  let temperatureform = document.querySelector("#temperature");
  temperatureform.innerHTML = 66;
}
let tempF = document.querySelector("#fahrenheit");
tempF.addEventListener("click", showFahrenheit);
