import React from "react";
import "./index.scss";

export const Tag = ({ fluff }) => {
  return fluff.map((v, i) => (
    <span className="tag-fluff" key={i}>
      {v.t}
    </span>
  ));
};
