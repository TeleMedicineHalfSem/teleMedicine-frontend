import React from "react";
import "./BoderInput.css";

function BoderInput({type}){
    let inputType = "";


  
      // Type...
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
          /> 
        </div>
      );
}

export default BoderInput;