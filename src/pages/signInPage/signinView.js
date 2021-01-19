import React, { useState, useEffect } from "react";
import "./SignInPage.css";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button/Button";
import CustomLink from "../../components/link/CustomLink";
import { Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validations";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

function SignInView({ signIn, authData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertState, setAlertState] = useState({
    alertMessage: "",
    alertVisible: false,
    alertColor: "danger",
  });
  let history = useHistory();

  // Destructuring data...
  const { alertMessage, alertVisible, alertColor } = alertState;

  useEffect(() => {
    // Checking if signing up gave an error...
    if (authData.error) {
      setAlertState({
        alertColor: "danger",
        alertMessage: authData.error,
        alertVisible: true,
      });
    }

    // Checking if signed up successfully...
    if (authData.success) {
      setAlertState({
        alertColor: "success",
        alertMessage: authData.success,
        alertVisible: true,
      });
    }
  }, [authData.error, authData.success]);

  // Validations...
  const validations = () => {
    const validated =
      validateEmail(email).valid && validatePassword(password).valid;
    return validated;
  };

  const onClickSignIn = (event) => {
    event.preventDefault();

    // Checking validations...
    if (!validations()) {
      setAlertState({
        alertMessage: "Please fulfill all input criteria.",
        alertVisible: true,
        alertColor: "danger",
      });
      return;
    }

    // Signing in...
    signIn({ email, password });
  };

  const onClickSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <Alert
        color={alertColor}
        isOpen={alertVisible}
        toggle={() => setAlertState({ ...alertState, alertVisible: false })}
      >
        {alertMessage}
      </Alert>
      <div className="sign-in-heading">Sign in to EasyCare</div>
      <form className="sign-in-form" onSubmit={onClickSignIn}>
        <div>
          <TextInput
            type="email"
            placeholder="Email"
            className="sign-in-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextInput
            type="password"
            placeholder="Password"
            className="sign-in-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <Button size="medium">Sign in</Button>
        </div>
      </form>
      <div className="sign-in-link">
        New User?{" "}
        <CustomLink color="secondary" onClick={onClickSignup}>
          Sign up
        </CustomLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, { signIn })(SignInView);
