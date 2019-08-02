import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>
        I am react app
      </h1>
      <p>This is really working</p>
      <Person />
      <Person />
      <Person />
      <Person /> 
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null', 'Does this work now?'));
}

export default App;
