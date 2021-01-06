import React from "react";
import "./Button.css";

function Button({ size, onClick, children, b_style, color }) {
  let width = "";
  if (b_style === "custom") {
    b_style = "custom-button";
  } else {
    if (color === "primary") {
      b_style = "primary-button";
    } else if (color === "secondary") {
      b_style = "secondary-button";
    } else {
      b_style = "primary-button";
    }
  }

  switch (size) {
    case "small":
      width = "100px";
      break;
    case "medium":
      width = "150px";
      break;
    case "large":
      width = "200px";
      break;
    default:
      width = "100px";
  }
  return (
    <div>
      <button style={{ width: width }} onClick={onClick} className={b_style}>
        {children}
      </button>
    </div>
  );
}

export default Button;
