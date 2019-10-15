import React from "react";
import { ReactComponent as LodingSVG } from "../../assest/loading.svg";
import "./index.scss";

export default ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="loading-comp">
        <LodingSVG className="icon-50" />
      </div>
    );
  }
  return null;
};
