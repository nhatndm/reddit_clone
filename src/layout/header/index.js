import React, { Component } from "react";
import Navbar from "../navbar/";
import "./index.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container subreddit-wrapper">
          <div className="title-icon-wrapper">
            <div className="icon" />
            <div className="title">r/DotA2</div>
          </div>
        </div>
        <Navbar />
      </div>
    );
  }
}
