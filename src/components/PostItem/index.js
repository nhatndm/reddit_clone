import React, { Component } from "react";
import "./index.scss";
import VoteWrapper from "../VoteWrapper";
import { CLASSICVIEW, COMPACTVIEW } from "../../redux/app/type";

export default class PostItem extends Component {
  changeClassNameFollowViewMode(viewMode) {
    switch (viewMode) {
      case CLASSICVIEW:
        return "classic-view";
      case COMPACTVIEW:
        return "compact-view";
      default:
        return "card-view";
    }
  }

  render() {
    const { item, viewMode } = this.props;
    return (
      <div
        className={`view-component ${this.changeClassNameFollowViewMode(
          viewMode
        )}`}
      >
        <VoteWrapper
          isWidth90={viewMode === COMPACTVIEW}
          numberOfVote={item.data.score}
        />
        <div className="title-content-wrapper">Test</div>
      </div>
    );
  }
}
