import React from "react";
import "./DisplayPicture.css";
import getRandomColor from "../../utils/getRandomColor";

function DisplayPicture({ initials, height, width, fontSize }) {
  const color = getRandomColor();
  let style = { background: color };
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
