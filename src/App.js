import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos/ToDos';

import toDos from './services/DataService';

class App extends Component {
  state = {
    toDos: toDos
  };

  deleteItem = e => {
    const toDos = this.state.toDos;
    const deletedId = e.target.id;
    console.log('deleted: ', this.state.toDos[deletedId].title);
    toDos.splice(deletedId, 1);
    this.setState({
      toDos: toDos
    });
  }

  render() {
    return (
      <div className="App">
        <ToDos
          toDos={this.state.toDos}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
