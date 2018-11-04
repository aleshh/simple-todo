import React, { Component } from 'react';
import uuid from 'uuid';

class ToDos extends Component {
  state = {
    newItemText: ''
  };

  onNewItemChange = e => {
    this.setState({
      newItemText: e.target.value
    });
  };

  onNewItem = e => {
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
  };

  render() {
    const list = (
      this.props.toDos.map(todo => {
        return (
          <li className="ToDo" key={todo.id}>
            <span onClick={this.props.deleteToDo} id={todo.id} className="checkbox">✓</span>
            {todo.title}
          </li>
        );
      })
    );

    return (
      <div className="ToDos">
        <ul>
          {list}
          <li className="ToDo newItemEntry">
            <input
              type="text"
              name="newItemText"
              onChange={this.onNewItemChange}
              onBlur={this.onNewItem}
              value={this.state.newItem}
              placeholder="Add Item..."
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default ToDos;