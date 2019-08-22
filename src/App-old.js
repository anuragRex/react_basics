import React, { useState } from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  // using React Hooks 
  const [appState, setAppState ] = useState({
    persons : [
      {name : "Anurag", age : 24, position : 'NA'},
      {name : "Anmol", age : 25, position : 'NA'},
      {name : "Rahul", age : 27, position : 'NA'}
    ],
    
  });
  const [showPosition, setShowPosition] = useState(false);
  const switchHandler = () => {
    setAppState({
      persons : [
        {name : "Anurag", age : 24, position : 'Developer'},
        {name : "Anmol", age : 25, position : 'Developer'},
        {name : "Rahul", age : 27, position : 'Manager'}
      ]
    });
  }

  const togglePositionHandler = () => {
    setShowPosition(!showPosition)
  }

  return (
    <div className="App">
      <button onClick={togglePositionHandler}>Toggle Persons</button>
      <div>
      <button onClick={switchHandler}>check positions</button>
      { showPosition ? 
        appState.persons.map((person,index)=>{
          return(
              <Person name={person.name} age={person.age} position={person.position}/>
          )
        }) : null
      }</div>
    </div>
  );
}

export default App;
