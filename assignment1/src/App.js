import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    username: "myusername",
    lengthInput: 0,
    input: []
  }

  setUsernameHandler = (event) => {
    this.setState({username:event.target.value});
  }

  inputLengthChangedHandler = (event) => {
    this.setState({
      lengthInput: event.target.value.length, 
      input: event.target.value.split('')
    });
  }

  removeLetterHandler = (event, index) => {
    const inp = [...this.state.input];
    inp.splice(index, 1);
    this.setState({input: inp});
  }

  render(){
    
    let chars = this.state.input.map((el, index) => {
      return <Char 

      letter = {el} 
      remove = {(event) => this.removeLetterHandler(event,index)}/>
    })

    return (
      <div className="App">
        <UserInput username={this.state.username} changed={this.setUsernameHandler.bind(this)} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />


        Assignment 2
        <div>
          <input onChange={this.inputLengthChangedHandler} value={this.state.input.join("")}></input>
          <p>Length: {this.state.lengthInput}</p>
          <Validation length = {this.state.lengthInput} />
          <div>
            {chars}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
