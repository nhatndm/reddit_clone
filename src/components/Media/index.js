import React from "react";
import ReactPlayer from "react-player";
import "./index.scss";

export const VideoComp = ({ url }) => {
  return (
    <div className="media">
      <ReactPlayer url={url} controls />
    </div>
  );
};

export const ImgComp = ({ url }) => {
  return (
    <div className="media">
      <img src={url} alt="sub--reddit-img" />
    </div>
  );
};
