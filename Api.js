/*This class makes an API call based on the data coming from the class InputHandler.js
The incoming data to the methods are city and the unit for temperature.
The class later creates a new instance of the API-call's response.
*/

var Api = {
  apiKey: "55f970a5b61819d7f237eb1cb2be6bfd", //Api key for openweathermap
  timeZone: "", //Contains the timezone. This is re-used for the second API-call that doesnt get a tzone.

  //A method that fetch the current weather and created a new instance of the response.
  fetchToday: function (unit, city) {
    var url; //Contains a string that represents the API-url
    var radioButtons; //Contains a div that contains the radiobuttons
    var errorMessage; //A DOM-element that will write out error handling.
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api.apiKey}&units=${unit}`;
    radioButtons = document.querySelector(".radioButtons");
    errorMessage = document.querySelector("#error");
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        errorMessage.style.display = "none";
        var weather = new CurrentWeather(
          data.dt,
          data.main.temp,
          data.name,
          data.weather[0].icon,
          data.sys.country,
          data.timezone
        ); //Created a new instance of a class

        weather.outputData();
        radioButtons.style.visibility = "visible";
        Api.timeZone = data.timezone;
      })
      .catch(() => {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = `Could not find the city <i>${city}</i>`;
      });
  },

  //A method that makes an API-call do get the forecast and created a new instance of the response
  fetchForecast: function (unit, city) {
    var url; //Contains an URL representing the API-call for forecast.
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${Api.apiKey}&units=${unit}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var forecast = new ForecastWeather(data.list, Api.timeZone); //Creates a new instance of a class
        forecast.outputData();
      })
      .catch(() => {});
  },
};
