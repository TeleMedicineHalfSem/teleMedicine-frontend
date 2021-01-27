import React from "react";
import "./LoadingBar.css";

function LoadingBar({ visible }) {
  return visible ? (
    <div className="loading-bar">
      <div className="loading-bar-image">
        <img src="./images/loading.svg" alt="" />
      </div>
    </div>
  ) : null;
}

export default LoadingBar;
