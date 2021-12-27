import { useState } from "react";

function NameForm() {

    const [stateValue, setStateValue] = useState("");

    function handleSubmit(event){
        console.log("The form was submitted!");
        event.preventDefault();
    }

    function handleChange(event) {
        console.log(event.target.value);
        setStateValue(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={stateValue} onChange={handleChange}>
            </input>

            <input type="submit" value="Submit">
            </input>
        </form>
    )
}


export default NameForm;