/* A static class that add eventlisteners to DOM-element and also handles them in eventhandlers.
It calls for API-calls inside the class Api.js based on the city and temperature unit.
*/
var InputHandler = {
  radioBtns: '', //Contains the DOM-element of the buttons
  //This method adds eventlisteners to DOM-elements
  handleListeners: function () {
    var form; //Contains the form DOM-element
    form = document.querySelector("#form");
    form.addEventListener("submit", InputHandler.handleInput);
    InputHandler.radioBtns = document.querySelectorAll('input[name="switch"]');
    for (i = 0; i < InputHandler.radioBtns.length; i++) {
      InputHandler.radioBtns[i].addEventListener(
        "change",
        InputHandler.handleInput
      );
    }
  },
  /*This method handles the events coming from DOM-elements and then
    sends the city and temperature unit to an API-call inside Api.js*/
  handleInput: function (e) {
    e.preventDefault();
    var city; //Contains the value of the inputfield
    var checkedValue; //Contains the checked value of radio buttons.
    city = document.querySelector("#city").value;
    for (var i = 0; i < InputHandler.radioBtns.length; i++) {
      if (InputHandler.radioBtns[i].checked) {
        checkedValue = InputHandler.radioBtns[i].value;
        break;
      }
    }
    Api.fetchToday(checkedValue, city);
    Api.fetchForecast(checkedValue, city);
  },
};

InputHandler.handleListeners();
