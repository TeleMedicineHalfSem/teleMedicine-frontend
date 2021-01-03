import React from "react";
import "./CustomButton.css";

function CustomButton({ size, onClick, children }) {
  let width = "";

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
      <button
        style={{ width: width }}
        onClick={onClick}
        className="custom-button"
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
