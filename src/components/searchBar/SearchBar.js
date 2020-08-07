import React, { Component } from "react";
import style from "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    let { search, filter, searchValue, filterValue } = this.props;
    const onSearchChange = (e) => {
      let value = e.target.value;
      searchValue(value);
    };
    const onFilterChange = (value) => {
      filterValue(value);
    };
    let clazz = filter;
    return (
      <div className="row searchBar" style={style}>
        <input
          onChange={onSearchChange}
          value={search}
          type="text"
          className="form-control d-inline"
        />
        <div className="btn-group">
          <div
            className={`btn ${clazz === 'all' ? 'btn-primary' : 'btn-secondary'} form-control`}
            onClick={() => {
              onFilterChange("all");
            }}
          >
            All
          </div>
          <div
            className={`btn ${clazz === 'active' ? 'btn-primary' : 'btn-secondary'} form-control`}
            onClick={() => {
              onFilterChange("active");
            }}
          >
            Active
          </div>
          <div
            className={`btn ${clazz === 'done' ? 'btn-primary' : 'btn-secondary'} form-control`}
            onClick={() => {
              onFilterChange("done");
            }}
          >
            Done
          </div>
        </div>
      </div>
    );
  }
}
