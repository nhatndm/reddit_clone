import React, { Component } from "react";
import "../index.scss";
import VoteWrapper from "../../VoteWrapper";

export default class ClassicView extends Component {
  render() {
    return (
      <div className="view-component classic-view">
        <VoteWrapper />
        <div className="title-content-wrapper">Test</div>
      </div>
    );
  }
}
