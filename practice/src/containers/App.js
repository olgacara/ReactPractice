import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/AuxWithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';


class App extends Component {


  state = {
    persons: [
      { id: 'sads', name: 'Max', age: 25 },
      { id: 'ndjkjksa', name: 'Manu', age: 28 },
      { id: 'sadkjsjkd', name: 'Mikki', age: 20 }
    ],
    counter: 0,
    authenticated: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    //use it for time-senstitive updates
    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      }
    });
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  authenticateHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />
      );
    }

    return (
      <Aux>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.authenticateHandler }}>
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler.bind(this)}
            persons={this.state.persons}
          />
          {persons}
        </AuthContext.Provider>
      </Aux>

    );
  };
}

export default WithClass(App, classes.App);
