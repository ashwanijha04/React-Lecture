import React, { useState } from "react";

class ClassComponent extends React.Component {

    // Initializes 
    // First thing that gets called is the constructor

    // Mounting - 1
    constructor(props) {
        // Call the constructor of React.Component class
        super(props);
        this.state = {
            testState : "Initial State",
            state2: "This is the second state"
        }
        this.changeState = this.changeState.bind(this);
        console.log("Component rendered");
    }

    // Mounting - 2
   static getDerivedStateFromProps(props){
        return {testState: props.value };
    }


    changeState() {
        this.setState(
            {
                testState: "NewValue",
                state2: "Changed value"
            }
        )
    }

    // componentWillUnmount

    // Mounting - 4
    // Do not perform time consuming tasks here
    componentWillMount(){
        fetch(API_URL)
        .then()
        .then()
        console.log("Component has rendered!!")
    }

    componentDidMount() {
        // Gets called right after the component has mounted
    }
    
    // Stateful
    shouldComponentUpdate() {
        return true;
        
    }

    // Updating 
    componentDidUpdate() {
        fetch(API_URL)
        .then()
        .then()
    }

    // Rendering

    // Mounting - 3
    render() {
        var x = 5;

        return(
            <div>
                <h1> Hello React classes! </h1>
                <h2>The current state is {this.state.testState}</h2>
                <h3>The second state is {this.state.state2}</h3>
                <h3>x is {x}</h3>
                <button onClick={this.changeState}> Change State </button>
            </div>
        )
    }
}

export default ClassComponent;
