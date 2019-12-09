import React, {Component} from 'react';
import classes from './App.module.css';
import Person from'./Person/Person';


class App extends Component {

  state = {
    persons: [
      {id:'sads', name: 'Max', age: 25},
      {id:'ndjkjksa', name: 'Manu', age: 28},
      {id:'sadkjsjkd', name: 'Mikki', age: 20}
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons 
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

render(){

  let persons = null;
  let btnClasses = [];

  if(this.state.showPersons){
    persons = (
      <div >
        {this.state.persons.map((el, index) => {
          return <Person 
            click = {this.deletePersonHandler.bind(this,index)}
            name={el.name} 
            age={el.age}
            changed={(event) => this.nameChangedHandler(event, el.id)}
            key={el.id}/>
          })
        }
      </div>
    );
    btnClasses.push(classes.Red);
  }

  const assignedClasses = []; 
  if(this.state.persons.length <= 2) assignedClasses.push(classes.red);
  if(this.state.persons.length <= 1) assignedClasses.push(classes.bold);

  return (
    <div className={classes.App}>
      <h1> Hi, I'm a React App </h1>
      <p className={assignedClasses.join(' ')}>It's working :) </p>
      <button 
        className={btnClasses}
        onClick={this.togglePersonsHandler.bind(this)}
        >Toggle Persons</button>
      {persons}
    </div>
    
  );
};
}

export default App;
