import React from "react";
import "./Banner.css";

function Banner({ date }) {
  return (
    <div className="banner">
      <div className="heading">
        <p className="heading-left">Easy Care</p>
        <p className="heading-right">Medical Record</p>
      </div>
      <p className="sub-heading">Online Consultancy Service</p>
      <p className="date">{date}</p>
    </div>
  );
}

export default Banner;
