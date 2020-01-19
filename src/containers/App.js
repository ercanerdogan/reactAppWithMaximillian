import React, { Component } from 'react';
import classes from "./App.module.css"
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component{
  state={
    persons : [
      {id:"1", name:"Ercan", age:39},
      {id:"2", name:"Ahmet", age:33},
      {id:"3", name:"Mehmet", age:45}
    ],
    otherState : " Some other value",
    showPersons : false
  }

  deletePersonsHandler = (personIndex) =>{
    // const persons=this.state.persons.slice();
    const personsDelete = [...this.state.persons];

    personsDelete.splice(personIndex,1);
    this.setState({persons:personsDelete});
  }

  nameChangedHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    })

    const editPerson = {...this.state.persons[personIndex]};
    editPerson.name = event.target.value;

    const personsNew =[...this.state.persons];
    personsNew[personIndex] = editPerson;

    this.setState({persons : personsNew});

  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
  
    let persons=null;

    if(this.state.showPersons){
      persons = <Persons
      persons={this.state.persons}
      clicked={this.deletePersonsHandler}
      changed={this.nameChangedHandler}
      />;
    }

    
    return (
      <div className={classes.App}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
            
          {persons}

      </div>
    );

  // jsx structure...
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App'));
  }


}

export default App;
