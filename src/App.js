import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos/ToDos';

class App extends Component {
  state = {
    toDos: [
      {
        id: 0,
        dateCreated: null,
        dateModified: null,
        dateDue: null,
        dateReminder: null,
        dateCompleted: null,
        completed: false,
        title: 'Buy shoelaces',
        details: '',
        list: 'default',
        priority: 0,
        tags: ''
      },
      {
        id: 1,
        dateCreated: null,
        dateModified: null,
        dateDue: null,
        dateReminder: null,
        dateCompleted: null,
        completed: false,
        title: 'Cook dinner',
        details: '',
        list: 'default',
        priority: 0,
        tags: ''
      },
      {
        id: 2,
        dateCreated: null,
        dateModified: null,
        dateDue: null,
        dateReminder: null,
        dateCompleted: null,
        completed: false,
        title: 'Research PDFs',
        details: '',
        list: 'default',
        priority: 0,
        tags: ''
      },
    ]
  };

  deleteItem = e => {
    const deletedId = parseInt(e.target.id, 10);

    this.setState({
      toDos: this.state.toDos.filter(td => td.id !== deletedId)
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
