import TemperatureInput from './Temperature'
import React, { useEffect, useState } from 'react';


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.handleCssChange = this.handleCssChange.bind(this);
      this.state = {temperature: '', scale: 'c', black: false};
    }

    handleCssChange(scale, temperature) {
      if(temperature > 100 && scale=='c') {
        this.setState(
          {
            black: true
          }
        )
      } else if(temperature > 212 && scale=='f'){
        this.setState({
          black: true
        })

      }
      else {
        this.setState(
          {
            black: false
          }
        )
      }
    }
  
    handleCelsiusChange(temperature) {
      this.handleCssChange(this.state.scale, temperature)
      this.setState({scale: 'c', temperature});
    }


  
    handleFahrenheitChange(temperature) {
      this.handleCssChange(this.state.scale, temperature)
      this.setState({scale: 'f', temperature});
    }

  
    render() {
      // const bgColor = this.state.black ? "black-class": "yellowClass";

      let bgColor = ""
      if(this.state.black) {
        bgColor = "black-class"
      }else {
        bgColor = "yellowClass"
      }
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
      return (
        <div className={bgColor}>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  export default Calculator;
