import React from "react";
import "./Navbar.css";

function Dropdown({ username, email }) {
  const onClickLogOut = () => {
    // TODO: Logout...
    console.log("dada");
  };

  return (
    <div className="dropdown-card">
      <div className="dropdown-detail">
        <div className="dropdown-name">
          <b>{username}</b>
        </div>
        <div className="dropdown-email">{email}</div>
      </div>
      <div onClick={onClickLogOut} className="dropdown-button">
        Log Out
      </div>
    </div>
  );
}

export default Dropdown;
