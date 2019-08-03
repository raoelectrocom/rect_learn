import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stepanie', age: 26}
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // Don't do this this.state.persons[0].name = "kondalarao"
    this.setState({
      persons: [
        { name: newName, age: 29},
        { name: 'Manu', age: 30},
        { name: 'Stepanie', age: 31}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 29},
        { name: event.target.value, age: 30},
        { name: 'Stepanie', age: 26}
      ]
    })
  }
  
  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>I am react app</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Rao!!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Kondal')}
          change={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Does this work now?'));
  }  
}

export default App;
