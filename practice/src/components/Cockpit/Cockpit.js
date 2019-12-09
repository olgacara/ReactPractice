import React from 'react';

import classes from './Cockpit.module.css'

const cockpit = (props) => {

    let btnClasses = [];

    if (props.showPersons) btnClasses = classes.Red;

    const assignedClasses = [];
    if (props.persons.length <= 2) assignedClasses.push(classes.red);
    if (props.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
        <div className={classes.Cockpit}>
            <h1> {props.title} </h1>
            <p className={assignedClasses.join(' ')}>It's working :) </p>
            <button
                className={btnClasses}
                onClick={props.clicked}
            >Toggle Persons</button>
        </div>

    );
}

export default cockpit;