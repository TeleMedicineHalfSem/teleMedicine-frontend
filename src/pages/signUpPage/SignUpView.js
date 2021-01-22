import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";
import { signUp, authReset } from "../../actions/authActions";

function SignUpView({ signUp, authData, authReset }) {
  // Constants...
  const PATIENT = "patient";
  const DOCTOR = "doctor";
  const MALE = "male";
  const FEMALE = "female";

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
  const [selectedGender, handleGender] = useState(MALE);
  const [dob, handleDob] = useState("");
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
    let validated =
      validateName(fullName).valid &&
      validateEmail(email).valid &&
      validatePassword(password).valid &&
      validateConfirmPassword(password, confirmPassword).valid &&
      validateText(dob).valid;
    if (selectedOption === DOCTOR) {
      validated =
        validated &&
        validateText(specialization).valid &&
        validateYear(registrationYear).valid;
    }
    return validated;
  };

  // onClick Submit button...
  const handleSubmit = (event) => {
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

    // Signing up...
    const isDoctor = selectedOption === DOCTOR;
    const gender = selectedGender;

    signUp({
      fullName,
      gender,
      dob,
      email,
      password,
      isDoctor,
      specialization,
      registrationCouncil,
      registrationNumber,
      registrationYear,
    });
  };

  // onClick sign in link...
  const handleSignInLink = () => {
    history.push("/signin");
  };

  const removeAlert = () => {
    authReset();
    setAlertState({ ...alertState, alertVisible: false });
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
        <Alert color={alertColor} isOpen={alertVisible} toggle={removeAlert}>
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
              type="date"
              onChange={(e) => handleDob(e.target.value)}
              value={dob}
            />
          </div>
          <div>
            <RadioInput
              checked={selectedGender === MALE}
              onChange={(e) => handleGender(e.target.value)}
              value={MALE}
            >
              Male
            </RadioInput>
            <RadioInput
              checked={selectedGender === FEMALE}
              onChange={(e) => handleGender(e.target.value)}
              value={FEMALE}
            >
              Female
            </RadioInput>
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

const mapStateToProps = (state) => {
  return {
    authData: state.auth,
  };
};

export default connect(mapStateToProps, { signUp, authReset })(SignUpView);
