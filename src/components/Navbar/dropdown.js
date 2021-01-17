import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import DisplayPicture from "../displayPicture/DisplayPicture";

function Dropdown({ username, email, initials, isVisible, toggle, signOut }) {
  const onClickLogOut = () => {
    signOut();
  };
  return (
    <>
      {isVisible ? (
        <div onClick={() => toggle(false)} className="dropdown-card">
          <div className="dropdown-detail">
            <DisplayPicture
              height="50px"
              width="50px"
              fontSize="150%"
              initials={initials}
            />
            <div>
              <div className="dropdown-name">
                <b>{username}</b>
              </div>
              <div className="dropdown-email">{email}</div>
            </div>
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
