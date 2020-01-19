import React, { Component } from 'react';
// import styles from "./Styles/Styles.module.css";
import classes from "./App.module.css"
import Person from './Person/Person';


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
    let btnClass = '';

    let persons=null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index)=>{
            return <Person
              click={()=>this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let asignedClasses ='';

    if (this.state.persons.length<=2){
      asignedClasses = classes.red;
    }

    if (this.state.persons.length<=1){
      asignedClasses = classes.bold;
    }

    return (
      <div className={classes.App}>
          <h1>Hi, I am a React App</h1>
          <p className={asignedClasses}>This is working...</p>

          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toogle Person
          </button>
            
          {persons}

      </div>
    );

  // jsx structure...
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App'));
  }


}

export default App;
