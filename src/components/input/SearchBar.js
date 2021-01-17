import React from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, onChange }) {
  return (
    <div className="search-bar">
      <img className="search-bar-icon" src="images/search-icon.svg" alt="" />
      <input
        className="search-bar-input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
