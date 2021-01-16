import React from "react";
import "./Divider.css";

function Divider({ margin }) {
  const { top, bottom, left, right } = margin;
  const style = {
    marginTop: top,
    marginBottom: bottom,
    marginLeft: left,
    marginRight: right,
  };
  return <div style={style} className="divider-horizontal"></div>;
}

export default Divider;
