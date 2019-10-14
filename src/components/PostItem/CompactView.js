import React from "react";
import { durration } from "../../helper/date";
import { fromUnixTime } from "date-fns";
import { Tag } from "../Tag";
import { CommentWrapperCompact } from "./CommentWrapper";

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

      <CommentWrapperCompact data={data} />
    </div>
  );
};
