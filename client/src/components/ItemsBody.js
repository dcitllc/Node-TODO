import React, { Component } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";
import axios from "axios";

class ItemsBody extends Component {
  state = {
    loading: true,
    todos: {}
  };

  componentDidMount() {
    axios.get("api/todo").then(response => {
      this.setState({
        loading: false,
        todos: response.data
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    }

    return (
      <ListItems>
        {this.state.todos.map(todo => {
          return (
            <ListItem title={todo.title} isDone={todo.is_done} key={todo.id} />
          );
        })}
      </ListItems>
    );
  }
}

export default ItemsBody;
