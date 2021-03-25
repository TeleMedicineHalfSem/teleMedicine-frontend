import React from "react";
import "./BoderInput.css";

function BoderInput({type,size}){
    let inputType = "";
    let width = "";
    let style = {};

    switch (size) {
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
          className="boder-text-input" 
          type={inputType}
          style = {style}
          /> 
        </div>
      );
}

export default BoderInput;