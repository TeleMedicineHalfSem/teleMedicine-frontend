import React from "react";
import TextInput from "../input/TextInput";

function SignInView(){
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

export default SignInView;