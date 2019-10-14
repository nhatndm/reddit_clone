import React from "react";
import { durration } from "../../helper/date";
import { ReactComponent as ChatIcon } from "../../assest/chat.svg";
import { fromUnixTime } from "date-fns";
import { Tag } from "../Tag";
import { coverToKNumber } from "../../helper/number";

export default ({ item: { data } }) => {
  return (
    <div className="title-content-wrapper">
      <div className="post-title compact-view">
        {data.title}
        <Tag fluff={data.link_flair_richtext} />
      </div>
      <div className="author-time-wrapper">
        <span className="author">Posted by u/{data.author}</span>
        {durration(new Date(fromUnixTime(data.created_utc)))}
      </div>

      <div className="comment-wrapper compact-view">
        <ChatIcon className="icon-16" />
        <span className="comment-label">
          {coverToKNumber(data.num_comments)}
        </span>
      </div>
    </div>
  );
};
