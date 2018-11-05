import React, { Component } from 'react';
import uuid from 'uuid';

class ToDos extends Component {
  state = {
    newItemText: ''
  };

  onNewItem = () => {
    if (this.state.newItemText === '') {
      return;
    }
    const newItem = {
      id: uuid(),
      dateCreated: null,
      dateModified: null,
      dateDue: null,
      dateReminder: null,
      dateCompleted: null,
      completed: false,
      title: this.state.newItemText,
      details: '',
      list: 'default',
      priority: 0,
      tags: ''
    };
    this.props.addToDo(newItem);
    this.setState({
      newItemText: ''
    })
  };

  onNewItemChange = e => {
    this.setState({
      newItemText: e.target.value
    });
  };

  handleReturn = e => {
    if (e.key !== 'Enter') {
      return;
    }
    this.onNewItem();
  }

  render() {
    const list = (
      this.props.toDos.map(todo => {
        return (
          <li className="ToDo" key={todo.id}>
            <span onClick={this.props.deleteToDo} id={todo.id} className="checkbox">✓</span>
            <input
              type="text"
              name={todo.id}
              value={todo.title}
              />
          </li>
        );
      })
    );

    return (
      <div className="ToDos">
        <ul>
          {list}
          <li className="ToDo">
            <input
              type="text"
              name="newItemText"
              onKeyPress={this.handleReturn}
              onChange={this.onNewItemChange}
              onBlur={this.onNewItem}
              value={this.state.newItemText}
              placeholder="Add Item..."
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDos;