import React from "react";
import he from "he";
import root from "react-shadow";
import "./index.scss";

export const CoverToHtml = ({ html, video }) => {
  const decodedHTML = he.decode(html);

  return (
    <root.div className={`html-shadow ${!video ? "self_text" : "media"}`}>
      <div dangerouslySetInnerHTML={{ __html: decodedHTML }} />
    </root.div>
  );
};
