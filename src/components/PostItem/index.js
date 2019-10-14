import React, { Component } from "react";
import "./index.scss";
import VoteWrapper from "../VoteWrapper";
import { CLASSICVIEW, COMPACTVIEW } from "../../redux/app/type";
import RightContentForCompact from "./CompactView";
import RightContentForClassic from "./ClassicView";
import RightContentForCard from "./CardView";

const ContentWrapper = ({ item, viewMode }) => {
  switch (viewMode) {
    case CLASSICVIEW:
      return <RightContentForClassic item={item} />;
    case COMPACTVIEW:
      return <RightContentForCompact item={item} />;
    default:
      return <RightContentForCard item={item} />;
  }
};

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
        <ContentWrapper viewMode={viewMode} item={item} />
      </div>
    );
  }
}
