import React, { Component } from "react";
import style from "./AddTodo.css";

export default class AddTodo extends Component {
  state = {
    value: "",
  };
  inputHandler = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({
      value: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.formSubmit} className="row addTodo" style={style}>
        <input
          value={this.state.value}
          onChange={this.inputHandler}
          type="text"
          className="form-control d-inline"
        />
        <button className="btn btn-warning form form-control" type="submit">
          Add Item
        </button>
      </form>
    );
  }
}
