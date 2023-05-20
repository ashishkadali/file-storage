import React, { Component } from "react";
import "../../Styles/Header.scss";
import DailogBox from "./DailogBox";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpen = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="fileManger">
            <div>File Manager</div>
          </div>
          <div className="button" onClick={this.handleOpen}>
            <button className="uploadButton">
              <i className="fa fa-plus pluseIcon"></i>
              Upload
            </button>
          </div>
        </div>
        {this.state.showModal ? (
          <DailogBox closeModel={this.handleClose} />
        ) : null}
      </div>
    );
  }
}
