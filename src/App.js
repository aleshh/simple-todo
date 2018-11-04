import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos/ToDos';

class App extends Component {
  state = {
    toDos: [
      {
        id: '0',
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
        id: '1',
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
        id: '2',
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

  addToDo = newToDo => this.setState({
    toDos: [...this.state.toDos, newToDo]
  });

  deleteToDo = e => {
    const deletedId = e.target.id;

    console.log(typeof(deletedId));

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
