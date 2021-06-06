import React, { Component } from "react";
import style from "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    const { search, filter, searchValue, filterValue } = this.props;
    const onSearchChange = (e) => {
      let value = e.target.value;
      searchValue(value);
    };
    const onFilterChange = (value) => {
      filterValue(value);
    };

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
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'} form-control`}
            onClick={() => {
              onFilterChange("all");
            }}
          >
            All
          </div>
          <div
            className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-secondary'} form-control`}
            onClick={() => {
              onFilterChange("active");
            }}
          >
            Active
          </div>
          <div
            className={`btn ${filter === 'done' ? 'btn-primary' : 'btn-secondary'} form-control`}
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
