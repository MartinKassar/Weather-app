/*This class contains of properties that acts like hashmaps.
These hashmaps are used by two classes to dynamically change background and 
display icons
*/

var HashMaps = {
  //Object containing a hashmap for displaying icons based on icon-codes from API.
  icons: {
    "01d": "icons/clearsky.svg",
    "02d": "icons/fewclouds.svg",
    "03d": "icons/clouds.svg",
    "04d": "icons/clouds.svg",
    "09d": "icons/showerrain.svg",
    "10d": "icons/dayrain.svg",
    "11d": "icons/thunder.svg",
    "13d": "icons/snow.svg",
    "50d": "icons/mist.svg",
    "01n": "icons/night.svg",
    "02n": "icons/nightclouds.svg",
    "03n": "icons/nightclouds.svg",
    "04n": "icons/nightclouds.svg",
    "09n": "icons/nightrain.svg",
    "10n": "icons/nightrain.svg",
    "11n": "icons/nightthunder.svg",
    "13n": "icons/snownight.svg",
    "50n": "icons/mist.svg",
  },
  //Object containing hashmap to dynamically change the background based on the icon-codes
  backgrounds: {
    "01d": "sky",
    "02d": "sky",
    "03d": "sky",
    "04d": "sky",
    "09d": "sky",
    "10d": "sky",
    "11d": "sky",
    "13d": "snow",
    "50d": "foggy",
    "01n": "night",
    "02n": "night",
    "03n": "night",
    "04n": "night",
    "09n": "night",
    "10n": "night",
    "11n": "night",
    "13n": "night",
    "50n": "night",
  },
};
