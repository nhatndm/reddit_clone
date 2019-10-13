import React, { Component } from "react";
import "../index.scss";
import VoteWrapper from "../../VoteWrapper";

export default class CompactView extends Component {
  render() {
    return (
      <div className="view-component compact-view">
        <VoteWrapper isWidth90 />
        <div className="title-content-wrapper">Test</div>
      </div>
    );
  }
}
