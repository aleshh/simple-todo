import React, { Component } from 'react';

class ToDos extends Component {
  render() {
    const list = (
      this.props.toDos.map(todo => {
        return (
          <li className="ToDo" key={todo.id}>
            <span onClick={this.props.deleteItem} id={todo.id} className="checkbox">✓</span>
            {todo.title}
          </li>
        );
      })
    );

    return (
      <div className="ToDos">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default ToDos;