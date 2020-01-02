import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working..</p>
        <Person name="Ercan" age="39"></Person>
        <Person name="Ahmet" age="33"></Person>
        <Person name="Mehmet" age="45"></Person>
    </div>
  );

  // jsx structure...
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App'));
}

export default App;
