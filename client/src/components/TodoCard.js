import React, { Component } from "react";

class TodoCard extends Component {
  state = {
    editing: false,
    title: this.props.title,
    isDone: this.props.isDone
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default TodoCard;
