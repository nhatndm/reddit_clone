import React from "react";
import { durration } from "../../helper/date";
import { fromUnixTime } from "date-fns";
import { Tag } from "../Tag";
import { ImgComp, VideoComp } from "../Media";
import { CoverToHtml } from "../Html";
import { isJpgUrl } from "../../helper/regex";
import { CommentWrapperClassicCard } from "./CommentWrapper";

export default ({ item: { data } }) => {
  const renderHtml = data => {
    if (isJpgUrl(data.url)) {
      return <ImgComp url={data.url} />;
    }

    if (data.is_video) {
      return <VideoComp url={data.media.reddit_video.fallback_url} />;
    }

    if (data.media_embed.content) {
      return <CoverToHtml html={data.media_embed.content} video />;
    }

    return <CoverToHtml html={data.selftext_html} />;
  };

  const renderClassForSelfText = data => {
    if (data.selftext_html) {
      return "self-text-html";
    }

    return null;
  };

  return (
    <div className={`title-content-wrapper ${renderClassForSelfText(data)}`}>
      <div className="author-time-wrapper">
        <span className="author">Posted by u/{data.author}</span>
        {durration(new Date(fromUnixTime(data.created_utc)))}
      </div>
      <div className="post-title card-view">
        {data.title}
        <Tag fluff={data.link_flair_richtext} />
      </div>
      {renderHtml(data)}
      <CommentWrapperClassicCard data={data} />
    </div>
  );
};
