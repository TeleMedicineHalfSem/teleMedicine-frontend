import React from "react";
import "./SignUpPage.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignUpView from "./SignUpView";

function SignUpPage() {
  return (
    <div className="sign-up">
      <div className="sign-up-header">
        <NavBar />
      </div>
      <div className="sign-up-body">
        <div className="sign-up-body-left">
          <img
            src="./images/sign-in.svg"
            alt=""
            style={{ height: "100%", width: "90%" }}
          />
        </div>
        <div className="sign-up-body-right">
          <SignUpView />
        </div>
      </div>
      <div className="sign-up-footer">
        <Footer />
      </div>
    </div>
  );
}

export default SignUpPage;
