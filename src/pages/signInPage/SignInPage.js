import React from "react";
import TextInput from "../../components/input/TextInput";

function SignInPage() {
  return (
    <div>
    <div>
      <TextInput type="text" placeholder="Email" className="sign-in-email"/>
    </div>
    <div>
        <TextInput type="password" placeholder="Password" className="sign-in-password"/>
    </div>
    </div>
  );
}

export default SignInPage;
