import React from "react";
import "./DisplayPicture.css";

function DisplayPicture({ initials, height, width, fontSize }) {
  let style = {};
  if (height) {
    style["height"] = height;
  }
  if (width) {
    style["width"] = width;
  }
  if (fontSize) {
    style["fontSize"] = fontSize;
  }
  return (
    <div style={style} className="display-picture">
      {initials}
    </div>
  );
}

export default DisplayPicture;
