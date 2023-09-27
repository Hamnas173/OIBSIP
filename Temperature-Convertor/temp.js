const Button = document.getElementById("Button");
const result = document.getElementById("result");

Button.addEventListener("click", () => {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperature)) {
    result.textContent = " Enter valid temperature";
    return;
  }

  let convertedTemperature;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
    }  else {
      convertedTemperature = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
    }  else {
      convertedTemperature = temperature;
    }
 
  }

  result.textContent = `${convertedTemperature.toFixed(2)} ${toUnit}`;
});
