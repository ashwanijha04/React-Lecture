import { useState } from "react";
import cities from "../data/cities";


/*
const searchedStateValue = () => {

    if (searchQuery) {
      const searchedData = data.filter((data) => {
        if (
          data.city.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return data.colData;
        }
      });
      return searchedData;
    }
}

*/

function CityList() {

    console.log(cities)

    const searchedValue = useState("")
    const inputValue = useState("")

    const listOfCities = cities.map((object) =>
        <ul key={object.city}>
            {object.city}
        </ul>
    );

    function handleChange(event){
        inputValue = event.target.value
    }

    return(
        <div>
        <h1>City list</h1>
        <input value= {inputValue} onChange={handleChange}></input>
        {listOfCities}
        </div>
    )
}

export default CityList;