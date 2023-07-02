function convertTemperature() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var kelvinInput = document.getElementById("kelvin");
  var result = document.getElementById("result");

  if (celsiusInput.value !== "") {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = celsius * 9 / 5 + 32;
    var kelvin = celsius + 273.15;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
    result.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F and " + kelvin.toFixed(2) + " K";
  } else if (fahrenheitInput.value !== "") {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var kelvin = (fahrenheit + 459.67) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
    result.textContent = fahrenheit + "°F is equal to " + celsius.toFixed(2) + "°C and " + kelvin.toFixed(2) + " K";
  } else if (kelvinInput.value !== "") {
    var kelvin = parseFloat(kelvinInput.value);
    var celsius = kelvin - 273.15;
    var fahrenheit = kelvin * 9 / 5 - 459.67;
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = fahrenheit.toFixed(2);
    result.textContent = kelvin + " K is equal to " + celsius.toFixed(2) + "°C and " + fahrenheit.toFixed(2) + "°F";
  } else {
    result.textContent = "Please enter a temperature value.";
  }
}
