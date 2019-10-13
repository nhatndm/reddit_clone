import React, { Component } from "react";
import { ReactComponent as VoteDown } from "../../assest/arrow-pointing-down.svg";
import { ReactComponent as VoteUp } from "../../assest/arrow-up.svg";
import { ReactComponent as DotIcon } from "../../assest/circle.svg";

import "./index.scss";

export default class VoteWrapper extends Component {
  static defaultProps = {
    numberOfVote: 0
  };

  render() {
    const { isWidth90, numberOfVote } = this.props;
    return (
      <div className={`vote-wrapper ${isWidth90 ? "width-90" : "width-40"}`}>
        <VoteUp className="icon-16" />
        {numberOfVote === 0 ? (
          <DotIcon className="icon-5" />
        ) : (
          <p className="upvote-number">20</p>
        )}
        <VoteDown className="icon-16" />
      </div>
    );
  }
}
