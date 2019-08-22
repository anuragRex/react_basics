import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Anurag", age: 24, position: "NA" },
      { name: "Anmol", age: 25, position: "NA" },
      { name: "Rahul", age: 27, position: "NA" }
    ],
    showPositions: false
  };

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPositions;
    this.setState({ showPositions : !doesShow });
  } 

  render() {
    // conditional rendering the right way
    let persons = null;

    if(this.state.showPositions){
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} position={this.state.persons[0].position}></Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} position={this.state.persons[1].position}>Children content</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} position={this.state.persons[2].position}></Person>
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
