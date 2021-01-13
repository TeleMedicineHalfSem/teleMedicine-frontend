import React, { useState } from "react";
import "./SignUpPage.css";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import RadioInput from "../../components/input/RadioInput";
import CustomLink from "../../components/link/CustomLink";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateYear,
  validateText,
} from "../../utils/validations";

function SignUpView() {
  // Constants...
  const PATIENT = "patient";
  const DOCTOR = "doctor";

  // Initializations...
  const [fullName, handleFullName] = useState("");
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");
  const [confirmPassword, handleConfirmPassword] = useState("");
  const [selectedOption, handleSelectOption] = useState(PATIENT);
  const [specialization, handleSpecialization] = useState("");
  const [registrationNumber, handleRegistrationNumber] = useState("");
  const [registrationCouncil, handleRegistrationCouncil] = useState("");
  const [registrationYear, handleRegistrationYear] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  let alertMessage = "Please fulfill all input conditions.";
  let history = useHistory();

  // onClick Submit button...
  const handleSubmit = (event) => {
    event.preventDefault();
    let validated =
      validateName(fullName).valid &&
      validateEmail(email).valid &&
      validatePassword(password).valid &&
      validateConfirmPassword(password, confirmPassword).valid;
    if (selectedOption === DOCTOR) {
      validated =
        validated &&
        validateText(specialization).valid &&
        validateYear(registrationYear).valid;
    }
    if (!validated) {
      setAlertVisible(true);
      return;
    }
    console.log(registrationCouncil, registrationNumber);
    // TODO: Do the works here...
  };

  // onClick sign in link...
  const handleSignInLink = () => {
    history.push("/signin");
  };

  // Doctor's details view....
  const doctorDetailView = (
    <div>
      <div>
        <TextInput
          placeholder={"Specialization"}
          size={"medium"}
          onChange={(e) => handleSpecialization(e.target.value)}
        />
      </div>
      <div>
        <TextInput
          placeholder={"Registration Number"}
          size={"medium"}
          onChange={(e) => handleRegistrationNumber(e.target.value)}
        />
      </div>
      <div>
        <TextInput
          placeholder={"Registration Council"}
          size={"medium"}
          onChange={(e) => handleRegistrationCouncil(e.target.value)}
        />
      </div>
      <div>
        <TextInput
          placeholder={"Registration Year"}
          size={"medium"}
          type={"year"}
          onChange={(e) => handleRegistrationYear(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <div className="sign-up-view">
      <div>
        <Alert
          color="danger"
          isOpen={alertVisible}
          toggle={() => setAlertVisible(false)}
        >
          {alertMessage}
        </Alert>
        <h3 className="sign-up-view-head">Sign Up</h3>
        <form className="sign-up-view-form" onSubmit={handleSubmit}>
          <div>
            <TextInput
              placeholder={"Full Name"}
              size={"medium"}
              onChange={(e) => handleFullName(e.target.value)}
              type={"name"}
            />
          </div>
          <div>
            <TextInput
              placeholder={"Email"}
              type={"email"}
              size={"medium"}
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>
          <div>
            <TextInput
              placeholder={"Password"}
              size={"medium"}
              type={"password"}
              onChange={(e) => handlePassword(e.target.value)}
            />
          </div>
          <div>
            <TextInput
              placeholder={"Confirm Password"}
              size={"medium"}
              type={"password"}
              confirm={password}
              onChange={(e) => handleConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <RadioInput
              checked={selectedOption === PATIENT}
              onChange={(e) => handleSelectOption(e.target.value)}
              value={PATIENT}
            >
              Patient
            </RadioInput>
            <RadioInput
              checked={selectedOption === DOCTOR}
              onChange={(e) => handleSelectOption(e.target.value)}
              value={DOCTOR}
            >
              Doctor
            </RadioInput>
          </div>
          <div>{selectedOption === DOCTOR ? doctorDetailView : null}</div>
          <Button color={"primary"} type={"submit"} size={"large"}>
            Sign Up
          </Button>
        </form>
        <div className="sign-up-view-link">
          Already a User? {"   "}
          <CustomLink onClick={handleSignInLink} color="secondary">
            Sign In
          </CustomLink>
        </div>
      </div>
    </div>
  );
}

export default SignUpView;
