import React from "react";

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            temperature: ""
        }
    }

    handleInputChange(event) {
        this.setState(
            {temperature: event.target.value}
        )

        console.log(event.target.value);
        console.log("Temp: ", this.state.temperature)

    }



    render(){

        return(
            <div>
                <p>Enter temperature in Celcius: </p>
                <input
                    value={this.state.temperature}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default Calculator;