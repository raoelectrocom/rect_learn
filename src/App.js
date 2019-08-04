import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
      ],
      showPersons: false
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

  togglePeronsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map(person => {
            return <Person
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>I am react app</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePeronsHandler}>Switch Name</button>
          {persons}
      </div>
    )
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Does this work now?'));
  }  
}

export default App;
