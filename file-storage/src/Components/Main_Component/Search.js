import React, { Component } from "react";
import "../../Styles/Search.scss";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: " ",
    };
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <div className="searchContainer">
        <div>
          <input
            className="searchBar"
            type="text"
            placeholder="search"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
