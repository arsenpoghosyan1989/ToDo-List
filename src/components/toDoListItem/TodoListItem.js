import React, { Component } from "react";
import style from "./TodoListItem.css";

export default class TodoListItem extends Component {
  state = {};

  render() {
    let { label, important, done, id, onActionChange } = this.props;
    let clazz = done ? " done" : "";
    clazz += important ? " importantTodo" : "";
    return (
      <li className="list-group-item todoListItem" style={style}>
        <span
          onClick={() => {
            onActionChange("done", id);
          }}
          className={clazz}
        >
          {label}
        </span>
        <span className="float-right">
          <button
            onClick={() => {
              onActionChange("delete", id);
            }}
            className="btn btn-small btn-outline-danger delete"
          >
            <i className="far fa-trash-alt"></i>
          </button>
          <button
            onClick={() => {
              onActionChange("important", id);
            }}
            className="btn btn-small btn-outline-success important"
          >
            <i className="fas fa-exclamation"></i>
          </button>
        </span>
      </li>
    );
  }
}
