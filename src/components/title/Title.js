import React, { Component } from "react";
import style from "./Title.css";

export default class Title extends Component {
  render() {
    let { todoList } = this.props;
    let done = 0;
    todoList.forEach((todo) => {
      return todo.done ? (done = done + 1) : "";
    });
    let notDone = todoList.length - done;
    return (
      <div className="row title" style={style}>
        <h1 className="col-6 text-center">Todo List</h1>
        <span className="col-6 text-center">
          {notDone} more to do, {done} done
        </span>
      </div>
    );
  }
}
