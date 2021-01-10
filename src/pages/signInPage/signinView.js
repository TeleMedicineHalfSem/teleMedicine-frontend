import React,{useState} from "react";
import TextInput from "../../components/input/TextInput";
import Button from "../../components/button/Button";
import CustomLink from "../../components/link/CustomLink";

function SignInView(){

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const onClickSignin = () => {
        console.log(" hello ")
    }

    const onClickSignup = () => {
        console.log(" hello ")
    }

    return (
        <div>
            <div className="sign-in-heading">
                Sign in to EasyCare
            </div>
            <div>
            <TextInput type="text" placeholder="Email" className="sign-in-email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <br />
            <div>
                <TextInput type="password" placeholder="Password" className="sign-in-password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br />
            <br />
            <div>
                <Button size="medium" onClick={onClickSignin}>Sign in</Button>
            </div>
            <div>
                New User? <CustomLink color="secondary" onClick={onClickSignup}> Sign up</CustomLink>
            </div>
        </div>
      );
}

export default SignInView;