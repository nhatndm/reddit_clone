import React, { Component } from "react";
import VoteWrapper from "../../VoteWrapper";
import "../index.scss";

export default class CardView extends Component {
  render() {
    return (
      <div className="view-component card-view">
        <VoteWrapper />
        <div className="title-content-wrapper">Test</div>
      </div>
    );
  }
}
