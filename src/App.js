import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

function App() {
  return (
    <div className="App">
      <h1>Hi I'm Tayfun</h1>
      <Person name="Max" age="258" />
      <Person name="Manu" age="29">Mtyyter a aw a </Person>
      <Person name="stephene" age="30" />
     
     </div>
    
  );
  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi I\ m React app'))
}

export default App;
