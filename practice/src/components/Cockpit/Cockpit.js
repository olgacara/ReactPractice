import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('Cockpit useEffect()')
        //Http request, casus side effects...
        // setTimeout(() => {
        //     console.log('Saved data to cloud');
        // }, 1000);
        toggleButtonRef.current.click();
        //return will be executed after the first render but beofre the main function run

        return () => {
            console.log('cleanup work in Cockpit');
        }
    }, []); //Empty array for running only at creation

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
                ref={toggleButtonRef}
                className={btnClasses}
                onClick={props.clicked}
            >Toggle Persons</button>
            <button onClick={authContext.login}>Log in</button>

        </div>

    );
}

export default Cockpit;