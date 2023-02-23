const convertToCelsius = function(temp) {
  let finalTemp = temp;
  finalTemp = (temp - 32) / 1.8;
  finalTemp= Math.round(finalTemp * 10) / 10;
  return finalTemp;
};

const convertToFahrenheit = function(temp) {
  let finalTemp = temp;
  finalTemp = (temp * 1.8) + 32;
  finalTemp = Math.round(finalTemp * 10) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
