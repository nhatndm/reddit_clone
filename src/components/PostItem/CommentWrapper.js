import React from "react";
import { ReactComponent as ChatIcon } from "../../assest/chat.svg";
import { ReactComponent as AwardIcon } from "../../assest/medal.svg";
import { ReactComponent as ShareIcon } from "../../assest/share.svg";
import { coverToKNumber } from "../../helper/number";

export const CommentWrapperCompact = ({ data }) => {
  return (
    <div className="comment-wrapper compact-view">
      <ChatIcon className="icon-16" />
      <span className="comment-label">{coverToKNumber(data.num_comments)}</span>
    </div>
  );
};

export const CommentWrapperClassicCard = ({ data }) => {
  return (
    <div className="comment-wrapper classic-card-view">
      <div className="group-action">
        <ChatIcon className="icon-16 comment-icon" />
        <span className="comment-label">
          {coverToKNumber(data.num_comments)} Comments
        </span>
      </div>
      <div className="group-action">
        <AwardIcon className="icon-16 award-icon" />
        <span className="comment-label">Give Award</span>
      </div>
      <div className="group-action">
        <ShareIcon className="icon-16 share-icon" />
        <span className="comment-label">Share</span>
      </div>
    </div>
  );
};
