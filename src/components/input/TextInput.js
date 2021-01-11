import React from "react";
import "./TextInput.css";

function TextInput({ placeholder, size, onChange, type }) {
  let inputType = "";
  let width = "";

  switch (type) {
    case "password":
      inputType = "password";
      break;
    case "text":
      inputType = "text";
      break;
    default:
      inputType = "text";
  }

  switch (size) {
    case "small":
      width = "100px";
      break;
    case "medium":
      width = "250px";
      break;
    case "large":
      width = "400px";
      break;
    default:
      width = "250px";
  }
  return (
    <input
      style={{ width: width }}
      className="custom-text-input"
      placeholder={placeholder}
      type={inputType}
      onChange={onChange}
    />
  );
}

export default TextInput;
