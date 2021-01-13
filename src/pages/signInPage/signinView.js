import React, { useState } from "react";
import "./SignInPage.css";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button/Button";
import CustomLink from "../../components/link/CustomLink";

function SignInView() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onClickSignIn = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const onClickSignup = () => {
    //TODO: Here we have to write code to redirect this page to sing up page...
  };

  return (
    <div>
      <div className="sign-in-heading">Sign in to EasyCare</div>
      <form className="sign-in-form" onSubmit={onClickSignIn}>
        <div>
          <TextInput
            type="text"
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

export default SignInView;
