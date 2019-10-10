import React, { Component } from "react";
import "./index.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="subreddit-wrapper">
          <div className="title-icon-wrapper">
            <div className="icon" />
            <div className="title">r/DotA2</div>
          </div>
        </div>
      </div>
    );
  }
}
