/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props=>{
  
  // Hooks usage  
  const [personsState, setPersonsState] = useState({
    persons : [
      {name:"Ercan", age:39},
      {name:"Ahmet", age:33},
      {name:"Mehmet", age:45}
    ]
  });

  const [otherState, setOtherState] = useState(" Some other value");
  

  console.log(personsState, otherState);

  const switchNameHandler = ()=>{
    setPersonsState({
      persons : [
        {name:"Ercan Erdoğan", age:40},
        {name:"Ahmet Erdoğan", age:33},
        {name:"Mehmet Erdoğan", age:45}
      ]

    })
  }

  return (
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is working...</p>

          <button onClick={switchNameHandler}>Switch me</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>a Senior Software Developer</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
      </div>
    );

  // jsx structure...
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App'));
  
}

export default app;



