/* This is a dynamic class containing a constructor function that acts like a blurprint for
eventual new instances. The class purpose is to display results of current weather
to the DOM based on an API-call from the class Api.js
*/

function CurrentWeather(dt, temp, city, icondCode, countryCode, timeZone) {
  (this.dt = dt), //Contains unix-time for the city
    (this.temp = temp), //Contains temperature
    (this.city = city), //Comtains the name of the city
    (this.iconCode = icondCode), //Contains an icon-code based on weather
    (this.countryCode = countryCode), //Contains the country-code
    (this.timeZone = timeZone), //Contains the timezone
    //This method writes out the result to the DOM
    (this.outputData = function () {
      var time; //Contains the current local time for the city
      var date; //Contains the current local date for the city
      var wrapper; //Contains a wrapper(div) in the DOM
      var background; //Contains a div where the result will display
      var body; //Contains the body-element

      time = this.timeGenerator();
      date = this.dateGenerator();

      wrapper = document.querySelector("#innerWrapper");
      background = document.querySelector("#weatherData");
      body = document.querySelector("BODY");
      body.className = HashMaps.backgrounds[this.iconCode];
      background.className = HashMaps.backgrounds[this.iconCode];
      var output = `
           
        <div id="rowL">
            <h2>${this.city}, ${this.countryCode}</h2>
            <div id="weatherDisplay">
            <h2>${Math.round(this.temp)} &deg;</h2>
            <img src="${HashMaps.icons[this.iconCode]}">
        </div>
        </div>
        <div id="rowR">
            
            <h2>${date}</h2>
            <h2>${time}</h2>
            
        </div>
    `;
      wrapper.innerHTML = output;
    }),
    /*This method generates the current local time based on unix-time and timezone
        It then returns the local time formatted to the outputData() method.
        */
    (this.timeGenerator = function () {
      var unix; //Contains current unix time
      var date; //Contains a date and local time based on unix-time and timezone
      var hours; //Contains the hours of the date variable
      var minutes; //Contains the minutes of the date variable
      var formattedTime; //Contains a formatted time based on hrs and mins.

      unix = this.dt;
      date = new Date(unix * 1000 + this.timeZone * 1000);
      if (date.getHours() == "0") {
        hours = "23";
      } else {
        hours = date.getHours() - 1;
      }
      minutes = "0" + date.getMinutes();
      formattedTime = `${hours} : ${minutes.substr(-2)}`;

      return formattedTime;
    }),
    /*This methods generates a local date for the city based on unix-time and timezone 
        It then returns a formatted date to the method outputData
        */
    (this.dateGenerator = function () {
      var months; //Contains an array with all the months
      var weekDays; //Contains an array with all the weekdays
      var unix; //Contains the current unix-time
      var date; //Contains a date and local time based on unix-time and timezone
      var month; //Contains the current local month for the city
      var day; //Contains the current local day of the month for the city
      var weekDay; //Contains the current local weekday for the city
      var formattedDate; //Contains a string of a formatted local date.

      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      unix = this.dt;
      date = new Date(unix * 1000 + this.timeZone * 1000);
      month = months[date.getMonth()];
      day = date.getDate();
      weekDay = weekDays[date.getDay()];
      formattedDate = `${weekDay}, ${month} ${day}`;

      return formattedDate;
    });
}
