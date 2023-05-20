import React, { Component } from "react";
import Catagories from "./Catagories_items";
import Search from "./Search";
import "../../Styles/Main.scss";

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainContainer">
        <div>
          <Search />
          <Catagories />
        </div>
        <div></div>
      </div>
    );
  }
}
