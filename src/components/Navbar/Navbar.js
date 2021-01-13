import React from "react";
import Button from "../button/Button";
import CustomLink from "../link/CustomLink";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

function Nav() {
  let history = useHistory();

  const onClickSignIn = () => {
    history.push("/signin");
  };

  const onClickSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <b>EasyCare</b>
      </div>
      <div className="navbar-head">
        <div className="navbar-signIn">
          <CustomLink onClick={onClickSignIn} color="secondary">
            Sign In
          </CustomLink>
        </div>
        <div className="navbar-signUp">
          <Button onClick={onClickSignUp}>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
