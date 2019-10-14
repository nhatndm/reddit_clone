import React from "react";
import { durration } from "../../helper/date";
import { ReactComponent as ChatIcon } from "../../assest/chat.svg";
import { ReactComponent as AwardIcon } from "../../assest/medal.svg";
import { ReactComponent as ShareIcon } from "../../assest/share.svg";

import { fromUnixTime } from "date-fns";
import { Tag } from "../Tag";
import { coverToKNumber } from "../../helper/number";

export default ({ item: { data } }) => {
  return (
    <div className="title-content-wrapper">
      <div className="post-title classic-view">
        {data.title}
        <Tag fluff={data.link_flair_richtext} />
      </div>
      <div className="author-time-wrapper">
        <span className="author">Posted by u/{data.author}</span>
        {durration(new Date(fromUnixTime(data.created_utc)))}
      </div>

      <div className="comment-wrapper classic-view">
        <div className="group-action">
          <ChatIcon className="icon-16 comment-icon" />
          <span className="comment-label">
            {coverToKNumber(data.num_comments)}
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
    </div>
  );
};
