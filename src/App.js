import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos/ToDos';

import toDos from './services/DataService';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToDos toDos={toDos}/>
      </div>
    );
  }
}

export default App;
