import React from "react";
import "./CardComponent.css";

const CardStruct = ({ img, alt, text }) => {
  return (
    <div className="card-row">
      <div className="card-column">
        <div className="card">
          <img src={img} alt={alt} className="card-responsive" />
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStruct;
