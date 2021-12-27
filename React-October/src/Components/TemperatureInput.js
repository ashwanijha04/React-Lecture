import { useState } from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
function toFahrenheit(celsius) {
return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


function TemperatureInput(props) {

    const temperature = props.temperature

    function handleChange(e) {
        props.onTemperatureChange = e.target.value
    }

    // const scale = props.scale;

    return (
        // const temperature = this.state.temperature;
    
        <fieldset>
        <legend>Enter temperature in {scaleNames[props.scale]}: </legend>
        <input value={temperature}
                onChange={handleChange} />
        </fieldset>
    )
    
}

export default TemperatureInput;
