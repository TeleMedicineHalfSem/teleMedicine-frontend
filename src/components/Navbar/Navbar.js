import React, { useState } from "react";
import Button from "../button/Button";
import CustomLink from "../link/CustomLink";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import Dropdown from "./Dropdown";

function Nav() {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const username = "Slokha"; // Get these data from database...
  const email = "slokhaiyer@gmail.com"; // Get these data from database...
  const loggedIn = false; // Get this from cookie...

  let history = useHistory();

  const onClickSignIn = () => {
    history.push("/signin");
  };

  const onClickSignUp = () => {
    history.push("/signup");
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
      <b>{username}</b>
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
        <div className="navbar-logo">
          <b>EasyCare</b>
        </div>
        <div className="navbar-head">{loggedIn ? profileView : loginView}</div>
      </div>
      {dropDownVisible ? <Dropdown username={username} email={email} /> : null}
    </>
  );
}

export default Nav;
