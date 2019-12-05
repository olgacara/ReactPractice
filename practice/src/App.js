import React, {Component} from 'react';
import './App.css';
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

  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  let persons = null;

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
  }

  return (
    <div className="App">
      <h1> Hi, I'm a React App </h1>
      <p>It's working :) </p>
      <button 
        onClick={this.togglePersonsHandler.bind(this)}
        style = {style}>Toggle Persons</button>
      {persons}
    </div>
  );
};
}

export default App;
