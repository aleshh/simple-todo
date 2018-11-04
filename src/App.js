import React, { Component } from 'react';
import store from 'store2';

import './App.css';
import ToDos from './components/ToDos/ToDos';

class App extends Component {
  state = {
    toDos: []
  };

  componentDidMount() {
    this.setState(store('state'));
  }

  componentDidUpdate() {
    store('state', this.state);
  }

  addToDo = newToDo => this.setState({
    toDos: [...this.state.toDos, newToDo]
  });

  deleteToDo = e => {
    const deletedId = e.target.id;
    this.setState({
      toDos: this.state.toDos.filter(td => td.id !== deletedId)
    });
  }

  render() {
    return (
      <div className="App">
        <ToDos
          toDos={this.state.toDos}
          addToDo={this.addToDo}
          deleteToDo={this.deleteToDo}
        />
      </div>
    );
  }
}

export default App;
