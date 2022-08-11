let now = new Date();
let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function showTemperature(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}º C`;
  document.querySelector("#temperature-description").innerHTML = response.data.weather[0].description;
  document.querySelector("#feels_like").innerHTML = `Feels like ${Math.round(response.data.main.feels_like)}º C`;;
  document.querySelector("#humidity").innerHTML = `Humidity ${response.data.main.humidity}%`;
  document.querySelector("#wind-speed").innerHTML = `Wind ${Math.round(response.data.wind.speed)} km/h`;
}

function search(city) {
  let apiKey = "a2095828db09eb62d8b590f3de4c1377";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
  function handleSubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#search-text-input").value;
    let apiKey = "a2095828db09eb62d8b590f3de4c1377";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Kyiv");

function showWeather(response) {
console.log(response.data); 
document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature").innerHTML = `${Math.round(
  response.data.main.temp
)}º C`;
document.querySelector("#temperature-description").innerHTML =
  response.data.weather[0].description;
document.querySelector("#feels_like").innerHTML = `Feels like ${Math.round(
  response.data.main.feels_like
)}º C`;
document.querySelector(
  "#humidity"
).innerHTML = `Humidity ${response.data.main.humidity}%`;
document.querySelector("#wind-speed").innerHTML = `Wind ${Math.round(
  response.data.wind.speed
)} km/h`;
}

function retrivePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "a2095828db09eb62d8b590f3de4c1377";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showWeather);
}
function getCurrentLocation(event) {
  event.preventDefault();
 
}
navigator.geolocation.getCurrentPosition(retrivePosition);

let button = document.querySelector("button");
button.addEventListener("click", showWeather);
