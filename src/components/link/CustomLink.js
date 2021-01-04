import React from "react";
import "./CustomLink.css";

function CustomLink({ children, onClick }) {
  return (
    <p className="custom-link" onClick={onClick}>
      {children}
    </p>
  );
}

export default CustomLink;
