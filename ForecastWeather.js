/* This is a dynamic class containing a constructor function that acts like a blurprint for
eventual new instances. The class purpose is to display results of weather forecast
to the DOM based on an API-call from the class Api.js
*/

function ForecastWeather(forecast, timezone) {
  this.forecast = forecast; //An array containing objects for weather forecasts
  this.timeZone = timezone; //Contains a timezone

  //This method writes out the result to the DOM
  (this.outputData = function () {
    var i; //Contains iteration for the loop
    var time; //Contains local time for each weather forecast
    var wrapper; //Contains a wrapper(div) in the DOM
    var trimmedForecast; //An array containing five objects of weather forecast

    wrapper = document.querySelector("#innerWrapper2");
    trimmedForecast = [];
    for (i = 0; i < 5; i++) {
      trimmedForecast.push(this.forecast[i]);
    }
    wrapper.innerHTML = "";
    for (i = 0; i < trimmedForecast.length; i++) {
      time = this.timeGenerator(trimmedForecast[i].dt);
      wrapper.innerHTML += `<div class="forecast">
            <h3>${time}</h3>
            <img src="${HashMaps.icons[trimmedForecast[i].weather[0].icon]}">
            <h3>${Math.round(trimmedForecast[i].main.temp)} &deg;</h3>
        </div>`;
    }
  }),
    /*This method generates the current local time based on unix-time and timezone
        It then returns the local time formatted to the outputData() method.
    */
    (this.timeGenerator = function (seconds) {
      var unix; //Contains unix-time
      var date; //Contains a date and local time based on unix-time and timezone
      var hours; //Contains the hours of the date
      var minutes; //Contains the minutes of the date
      var formattedTime; //Contains a formatted string of the time
      unix = seconds;
      date = new Date(unix * 1000 + this.timeZone * 1000);
      if (date.getHours() == "0") {
        hours = "23";
      } else {
        hours = date.getHours() - 1;
      }
      minutes = "0" + date.getMinutes();
      formattedTime = `${hours} : ${minutes.substr(-2)}`;

      return formattedTime;
    });
}
