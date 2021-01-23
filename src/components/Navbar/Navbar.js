import React, { useState } from "react";
import Button from "../button/Button";
import CustomLink from "../link/CustomLink";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import Dropdown from "./dropdown";
import { connect } from "react-redux";
import camelCaseText from "../../utils/camelCaseText";

function Nav({ auth, profile }) {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  let firstName = "";
  let email = "";
  let username = "";
  let initials = "";
  let loggedIn = false;
  let history = useHistory();

  // Checking if user is signed in or not...
  if (auth !== undefined && auth.uid) {
    loggedIn = true;
  }

  // Getting data from database...
  if (!profile.isEmpty) {
    firstName = profile.firstName;
    email = profile.email;
    username = camelCaseText(profile.fullName);
    initials = profile.initials;
  }

  const onClickSignIn = () => {
    history.push("/signin");
  };

  const onClickSignUp = () => {
    history.push("/signup");
  };

  const onClickLogo = () => {
    history.push("/");
  };

  const loginView = (
    <>
      <div className="navbar-signIn">
        <CustomLink onClick={onClickSignIn} color="secondary">
          Sign In
        </CustomLink>
      </div>
      <div className="navbar-signUp">
        <Button onClick={onClickSignUp}>Sign Up</Button>
      </div>
    </>
  );

  const profileView = (
    <button
      onClick={() => setDropDownVisible(!dropDownVisible)}
      className="navbar-profile"
    >
      <b>{firstName}</b>
      <img
        src="/images/arrow-down.svg"
        alt=""
        style={{ height: "10px", width: "10px", marginLeft: "10px" }}
      />
    </button>
  );

  return (
    <>
      <div className="navbar">
        <div onClick={onClickLogo} className="navbar-logo">
          <b>EasyCare</b>
        </div>
        <div className="navbar-head">{loggedIn ? profileView : loginView}</div>
      </div>
      <Dropdown
        isVisible={dropDownVisible}
        toggle={setDropDownVisible}
        username={username}
        email={email}
        initials={initials}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Nav);
