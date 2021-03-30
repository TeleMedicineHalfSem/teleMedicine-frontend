import React from "react";
import "./BoderInput.css";

function BoderInput({ type, size, onChange, value }) {
  let inputType = "";
  let width = "";
  let style = {};

  switch (size) {
    case "small":
      width = "50px";
      break;
    case "medium":
      width = "250px";
      break;
    case "large":
      width = "350px";
      break;
    default:
      width = "250px";
  }

  style = { width: width };

  switch (type) {
    case "date":
      inputType = "date";
      break;
    case "text":
      inputType = "text";
      break;
    case "number":
      inputType = "number";
      break;
    default:
      inputType = "text";
  }

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        className="boder-text-input"
        type={inputType}
        style={style}
      />
    </div>
  );
}

export default BoderInput;
