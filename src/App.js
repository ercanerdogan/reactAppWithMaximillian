import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state={
    persons : [
      {name:"Ercan", age:39},
      {name:"Ahmet", age:33},
      {name:"Mehmet", age:45}
    ],
    otherState : " Some other value"
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons : [
        {name: newName, age:39},
        {name:"Ahmet Eroğan", age:33},
        {name:"Mehmet Erdoğan", age:45}
      ]
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is working...</p>

          <button onClick={this.switchNameHandler.bind(this, "Ercan Erdoğan")}>Switch me</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Ercan Erdoğan!!!")}>a Senior Software Developer
          </Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
          </Person>
      </div>
    );

  // jsx structure...
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App'));
  }


}

export default App;
