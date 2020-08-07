import React, { Component } from "react";
import TodoListItem from "../toDoListItem/TodoListItem";
import style from "./TodoList.css";

export default class TodoList extends Component {
  render() {
    let { todoList, onActionChange } = this.props;
    return (
      <div className="row todoList" style={style}>
        <ul className="list-group col-12">
          {todoList.map((todoItem) => (
            <TodoListItem
              key={todoItem.id}
              id={todoItem.id}
              label={todoItem.label}
              done={todoItem.done}
              important={todoItem.important}
              onActionChange={onActionChange}
            ></TodoListItem>
          ))}
        </ul>
      </div>
    );
  }
}
