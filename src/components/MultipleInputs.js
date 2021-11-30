import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  const InitialobjState = {
    isGoing: false,
    noOfGuests: 0,
    password: "",
    people: 0,
    searchValue: ""
  }

  const [objState, setObjectState] = useState(InitialobjState);


  function handleClick() {
    setHeadingText("Submitted");
  }


  // handleInputChange(event) {
  //   const target = event.target;

  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }


  function handleInputChange(event){
    let name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;


    setObjectState({
        [name] : value
      }
    )

    console.log(event.target.name)
    console.log(event.target.value)
    
    console.log(objState)
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("Submitted!")
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
       <form onSubmit={handleSubmit}>
         
<label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={objState.isGoing}
              onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number" 
              value={objState.noOfGuests}
              onChange={handleInputChange}
              />
          </label>
          <label>
        Password:
            <input
              name="password"
              type="password" 
              value={objState.password}
              onChange={handleInputChange}/>
          </label>
          <label>
              Search
            <input
              name="search"
              type="search"
              value={objState.searchValue}
              onChange={handleInputChange}/>
              
          </label>
          <label>
            Number of People:
            <input
              name="numberOfPeople"
              type="number"
              value={objState.people}
              onChange={handleInputChange}/>

              
               
          </label>

            </form>
      

    </div>
  );
}

export default App;
