import React, { useRef, useState } from "react";
import "./TextInput.css";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateYear,
} from "../../utils/validations";

function TextInput({ placeholder, size, onChange, type, confirm }) {
  const inputRef = useRef(null);
  const [focused, setFocus] = useState(false);
  const target = inputRef.current ? inputRef.current : null;
  let validInput = true;
  let errorString = null;
  let inputType = "";
  let width = "";
  let style = {};

  // Type...
  switch (type) {
    case "name":
      inputType = "text";
      break;
    case "year":
      inputType = "number";
      break;
    case "number":
      inputType = "number";
      break;
    case "password":
      inputType = "password";
      break;
    case "text":
      inputType = "text";
      break;
    default:
      inputType = "text";
  }

  // Size...
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

  //style...
  style = { width: width };

  //Validations...
  if (target && focused) {
    const value = target.value;
    if (type === "name") {
      const { valid, error } = validateName(value);
      validInput = valid;
      errorString = error;
    } else if (type === "email") {
      const { valid, error } = validateEmail(value);
      validInput = valid;
      errorString = error;
    } else if (type === "password" && confirm !== undefined) {
      const { valid, error } = validateConfirmPassword(confirm, value);
      validInput = valid;
      errorString = error;
    } else if (type === "password") {
      const { valid, error } = validatePassword(value);
      validInput = valid;
      errorString = error;
    } else if (type === "year") {
      const { valid, error } = validateYear(value);
      validInput = valid;
      errorString = error;
    }
    if (!validInput && errorString) {
      style = { ...style, borderColor: "red" };
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        style={style}
        className="custom-text-input"
        placeholder={placeholder}
        type={inputType}
        onChange={onChange}
        onFocus={() => setFocus(true)}
      />
      <p>{errorString}</p>
    </>
  );
}

export default TextInput;
