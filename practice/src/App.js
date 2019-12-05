import React, {Component} from 'react';
import './App.css';
import Person from'./Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 25},
      {name: 'Manu', age: 28},
      {name: 'Mikki', age: 20}
    ]
  };

  switchNameHandler = (newName) => {
    //console.log("Was clicked");
    // DON'T do this: this.state.persons[1].name = "olga cara rudnic";
    this.setState({
      persons: [
        {name: newName, age: 25},
        {name: 'Manu', age: 28},
        {name: 'Mikki', age: 20}
      ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 25},
        {name: event.target.value, age: 28},
        {name: 'Mikki', age: 20}
      ] 
    })
  }

render(){

  const style = {
    backgroundColor: 'white',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <h1> Hi, I'm a React App </h1>
      <p>It's working :) </p>
      <button 
        onClick={() => this.switchNameHandler("Maximillian")}
        style = {style}>Switch Name</button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}
        click = {this.switchNameHandler.bind(this,"Max!")}> My hobbies: racing </Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
  );
};
}

export default App;
