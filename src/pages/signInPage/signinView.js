import React, { useState } from "react";
import "./SignInPage.css";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button/Button";
import CustomLink from "../../components/link/CustomLink";
import { Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import { validateEmail, validatePassword } from "../../utils/validations";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

function SignInView({ signIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  let history = useHistory();
  let alertMessage = "Required input not satisfied.";

  const onClickSignIn = (event) => {
    event.preventDefault();
    const validated =
      validateEmail(email).valid && validatePassword(password).valid;
    if (!validated) {
      setAlertVisible(true);
      return;
    }
    signIn({ email, password });
  };

  const onClickSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <Alert
        color="danger"
        isOpen={alertVisible}
        toggle={() => setAlertVisible(false)}
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

export default connect(null, { signIn })(SignInView);
