import React, { Component } from 'react';

class ToDos extends Component {
  // constructor (props) {
  //   super(props);
  // }

  deleteItem = (event) => {
    const toDos = this.props.toDos;
    const deletedId = event.target.id;
    console.log('deleted: ', this.props.toDos[deletedId].title);
    toDos.splice(deletedId, 1);
    this.props.setState({
      toDos: toDos
    });
  }

  render() {
    const list = (
      this.props.toDos.map(todo => {
        return (
          <li className="ToDo" key={todo.id}>
            <span onClick={this.deleteItem} id={todo.id} className="checkbox">✓</span>
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