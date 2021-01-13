import React from "react";
import "./SignInPage.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignInView from "./signinView";

function SignInPage() {
  return (
    <div className="sign-in">
      <div className="sign-in-header">
        <NavBar />
      </div>
      <div className="sign-in-body">
        <div className="sign-in-body-left">
          <img
            src="./images/sign-in.svg"
            alt=""
            style={{ height: "100%", width: "90%" }}
          />
        </div>
        <div className="sign-in-body-right">
          <SignInView />
        </div>
      </div>
      <div className="sign-in-footer">
        <Footer />
      </div>
    </div>
  );
}

export default SignInPage;
