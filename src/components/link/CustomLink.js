import React from "react";
import "./CustomLink.css";

function CustomLink({ children, onClick, color }) {
  switch (color) {
    case "primary":
      color = "#0037ae";
      break;
    case "secondary":
      color = "#35c1ba";
      break;
    default:
      color = "#ffffff";
  }

  return (
    <span style={{ color: color }} className="custom-link" onClick={onClick}>
      {children}
    </span>
  );
}

export default CustomLink;
