import React from "react";
import Button from "../button/Button";
import CustomLink from "../link/CustomLink";
import "./Navbar.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <b>EasyCare</b>
      </div>
      <div className="navbar-head">
        <div className="navbar-signIn">
          <CustomLink color="secondary">Sign In</CustomLink>
        </div>
        <div className="navbar-signUp">
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
