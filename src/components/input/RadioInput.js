import React from "react";
import "./RadioInput.css";

function RadioInput({
  name,
  children,
  checked,
  onChange,
  value,
  defaultChecked,
}) {
  return (
    <label className="custom-radio">
      <input
        className="custom-radio-input"
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
        defaultChecked={defaultChecked}
      />
      <span className="custom-radio-span">{children}</span>
    </label>
  );
}

export default RadioInput;
