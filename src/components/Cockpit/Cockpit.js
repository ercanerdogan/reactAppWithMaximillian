import React from 'react';
import classes from './Cockpit.module.css'

// import classes from "./App.module.css"


const cockpit =(props)=>{

    const asignedClasses =[];
    let btnClass='';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    

    if (props.persons.length<=2){
      asignedClasses.push(classes.red);
    }

    if (props.persons.length<=1){
      asignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a React App</h1>
            <p className={asignedClasses.join(' ')}>This is working...</p>

            <button className={btnClass} onClick={props.clicked}>
                Toogle Person
            </button>
        </div>
    );
} 


export default cockpit;