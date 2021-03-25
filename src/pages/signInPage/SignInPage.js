import React from "react";
import "./SignInPage.css";
import { connect } from "react-redux";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SignInView from "./signinView";
import LoadingBar from "../../components/loadingBar/LoadingBar";

function SignInPage({ authData }) {
  let loading = false;

  if (authData && authData.loading) {
    loading = true;
  } else {
    loading = false;
  }

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
      <LoadingBar visible={loading} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps)(SignInPage);
