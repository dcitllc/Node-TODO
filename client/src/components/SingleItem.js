import React, { Component } from "react";
import axios from "axios";
import TodoCard from "./TodoCard";

class SingleItem extends Component {
  state = {
    loading: true,
    todo: {}
  };

  componentWillMount() {
    const id = this.props.match.params.id;

    axios.get(`/api/todo/${id}`).then(res => {
      this.setState({
        loading: false,
        todo: res.data
      });
    });
  }

  render() {
    return (
      <TodoCard title={this.state.todo.title} isDone={this.state.is_done} />
    );
  }
}

export default SingleItem;
