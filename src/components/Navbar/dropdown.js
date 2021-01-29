import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

function Dropdown({ username, email, initials, isVisible, toggle, signOut }) {
  const onClickLogOut = () => {
    signOut();
  };

  const onClickProfile = () => {
    // Redirect to profile page...
  };
  return (
    <>
      {isVisible ? (
        <div onClick={() => toggle(false)} className="dropdown-card">
          <div className="dropdown-detail">
            <div>
              <div className="dropdown-name">
                <b>{username}</b>
              </div>
              <div className="dropdown-email">{email}</div>
            </div>
          </div>
          <div onClick={onClickProfile} className="dropdown-button">
            Profile
          </div>
          <div onClick={onClickLogOut} className="dropdown-button">
            Log Out
          </div>
        </div>
      ) : null}
    </>
  );
}
export default connect(null, { signOut })(Dropdown);
