import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";


function CalculatorFunction() {

    const [temp, setTemp] = useState('')

    return(
        <div>
            <TemperatureInput scale="c" temperature={temp} />
            <TemperatureInput scale="f" temperature={temp} />
        </div>

    )
}


export default CalculatorFunction;





            {/* <button
                onClick={handleClick}
                onMouseEnter={handleMouseEnter} 
            >
                Click me
            </button> */}