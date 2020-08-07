import React, { Component } from "react";
import Title from "../title/Title";
import SearchBar from "../searchBar/SearchBar";
import TodoList from "../toDoList/TodoList";
import AddTodo from "../addTodo/AddTodo";
import style from "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { label: "Click to mark as done", done: false, important: false, id: 1 },
      { label: "Remove or Mark", done: true, important: false, id: 2 },
      { label: "Add new", done: false, important: true, id: 3 },
    ],
    filter: "all",
    search: "",
  };
  onActionChange = (actionType, id) => {
    console.log(actionType, id);
    switch (actionType) {
      case "done":
        this.doneTodo(id);
        break;
      case "important":
        this.importantTodo(id);
        break;
      case "delete":
        this.deleteTodo(id);
        break;
      default:
        console.log(actionType);
    }
    this.setState({
      [actionType]: !this.state[actionType],
    });
  };
  doneTodo = (id) => {
    let newTodoList = this.state.todoList.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  importantTodo = (id) => {
    let newTodoList = this.state.todoList.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  deleteTodo = (id) => {
    let newTodoList = this.state.todoList.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    this.setState({
      todoList: newTodoList,
    });
  };
  searchValue = (value) => {
    this.setState({
      search: value,
    });
  };
  filterValue = (value) => {
    this.setState({
      filter: value,
    });
  };
  keyStartNumber = 100;
  addTodo = (label) => {
    console.log(this.keyStartNumber++);
    let newTodo = {
      label,
      done: false,
      important: false,
      id: this.keyStartNumber,
    };
    console.log(newTodo);
    let newTodoList = [newTodo, ...this.state.todoList];
    this.setState({
      todoList: newTodoList,
    });
  };

  render() {
    let { todoList, search, filter } = this.state;
    console.log(search);
    let searchTodoList = todoList;
    if (search) {
      searchTodoList = todoList.filter((todo) => {
        if (todo.label.includes(search)) {
          return true;
        }
        return false;
      });
    }
    let filterTodoList = searchTodoList;
    if (filter !== "all") {
      filterTodoList = searchTodoList.filter((todo) => {
        switch (filter) {
          case "done":
            if (todo.done) {
              return true;
            }
            break;
          case "active":
            if (!todo.done) {
              return true;
            }
            break;
          default:
            return true;
        }

        return false;
      });
    }
    return (
      <div className="container" style={style}>
        <Title todoList={todoList}></Title>
        <SearchBar
          search={search}
          filter={filter}
          searchValue={this.searchValue}
          filterValue={this.filterValue}
        ></SearchBar>
        <TodoList
          todoList={filterTodoList}
          onActionChange={this.onActionChange}
        ></TodoList>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}
