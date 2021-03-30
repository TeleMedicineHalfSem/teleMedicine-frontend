import React from "react";
import "./SignUpPage.css";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignUpView from "./SignUpView";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function SignUpPage({ profile }) {
  const history = useHistory();

  // if user is logged in....
  if (!profile.isEmpty) {
    if (profile.isDoctor) {
      history.push("/doctor");
    } else {
      history.push("/patient");
    }
  }
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

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(SignUpPage);
