import React, { useState } from "react";
import "./SignUpPage.css";
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import RadioInput from "../../components/input/RadioInput";
import CustomLink from "../../components/link/CustomLink";

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

  // onClick Submit button...
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      fullName,
      email,
      password,
      confirmPassword,
      specialization,
      registrationNumber,
      registrationCouncil,
      registrationYear
    );
  };

  // onClick sign in link...
  const handleSignInLink = () => {
    //TODO: Here we have to write code to redirect this page to sign in page...
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

/*
export class SignUpView extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      selectedOption: "",
      specialization: "",
      registration_number: "",
      registration_council: "",
      registration_year: "",
      fields: {},
      errors: {},
    };
    this.DOCTOR = "Doctor";
    this.PATIENT = "Patient";

    //binding all the events
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.forDoctor = this.forDoctor.bind(this);
    this.handleSpecialization = this.handleSpecialization.bind(this);
    this.handleRegistrationNumber = this.handleRegistrationNumber.bind(this);
    this.handleRegistrationCouncil = this.handleRegistrationCouncil.bind(this);
    this.handleRegistrationYear = this.handleRegistrationYear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignInLinkClick = this.handleSignInLinkClick.bind(this);
  }

  // all handler functions
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  handleFullName(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      ...fields,
      fullName: event.target.value,
    });
  }

  handleEmail(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      ...fields,
      email: event.target.value,
    });
  }

  handlePassword(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      ...fields,
      password: event.target.value,
    });
  }

  handleConfirmPassword(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      ...fields,
      confirmPassword: event.target.value,
    });
  }

  handleSelectOption(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  handleSpecialization(event) {
    this.setState({
      specialization: event.target.value,
    });
  }

  handleRegistrationNumber(event) {
    this.setState({
      registration_number: event.target.value,
    });
  }

  handleRegistrationCouncil(event) {
    this.setState({
      registration_council: event.target.value,
    });
  }

  handleRegistrationYear(event) {
    this.setState({
      registration_year: event.target.value,
    });
  }

  handleSignInLinkClick() {
    // TODO: Redirect to sign in page...
    console.log("Hello");
  }

  //validation
  handleSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["email"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (fields["password"].length < 8) {
        formIsValid = false;
        errors["password"] = "*Your password should be of 8 or more characters";
      }
    }
    if (fields["confirmPassword"] !== fields["password"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Both Password should be same";
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  //when doctor is selected
  forDoctor(event) {
    return (
      <div>
        <Form>
          <FormGroup>
            <TextInput
              placeholder={"Specialization"}
              size={"medium"}
              type={"text"}
              onChange={this.handleSpecialization}
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              placeholder={"Registration Number"}
              size={"medium"}
              type={"number"}
              onChange={this.handleRegistrationNumber}
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              placeholder={"Registration Council"}
              size={"medium"}
              type={"text"}
              onChange={this.handleRegistrationCouncil}
            />
          </FormGroup>
          <FormGroup>
            <TextInput
              placeholder={"Registration Year"}
              size={"medium"}
              type={"number"}
              onChange={this.handleRegistrationYear}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }

  render() {
    return (
      <div className="sign-up-view">
        <div>
          <div className="body">
            <h3 className="head-color">Sign Up</h3>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <TextInput
                name={"fullName"}
                placeholder={"Full Name"}
                size={"medium"}
                type={"text"}
                onChange={this.handleFullName}
              />
            </FormGroup>
            <FormGroup>
              <TextInput
                name={"email"}
                placeholder={"Email"}
                size={"medium"}
                onChange={this.handleEmail}
              />
              <div className="errorMsg">{this.state.errors.email}</div>
            </FormGroup>
            <FormGroup>
              <TextInput
                placeholder={"Password"}
                name={"password"}
                size={"medium"}
                type={"password"}
                onChange={this.handlePassword}
              />
              <div className="errorMsg">{this.state.errors.password}</div>
            </FormGroup>
            <FormGroup>
              <TextInput
                placeholder={"Confirm Password"}
                size={"medium"}
                type={"password"}
                name={"confirmPassword"}
                onChange={this.handleConfirmPassword}
              />
              <div className="errorMsg">
                {this.state.errors.confirmPassword}
              </div>
            </FormGroup>
            <FormGroup>
              <RadioInput
                name={"Patient"}
                children={"Patient"}
                checked={this.state.selectedOption === this.PATIENT}
                onChange={this.handleSelectOption}
                value={"Patient"}
              />
              <RadioInput
                name={"Doctor"}
                children={"Doctor"}
                checked={this.state.selectedOption === this.DOCTOR}
                onChange={this.handleSelectOption}
                value={"Doctor"}
              />
            </FormGroup>
            <FormGroup>
              {this.state.selectedOption === "Doctor" ? this.forDoctor() : null}
            </FormGroup>
            <FormGroup>
              <Button color={"primary"} type={"submit"} size={"large"}>
                Sign Up
              </Button>
            </FormGroup>
          </Form>
          <div>
            Already a User? {"   "}
            <CustomLink onClick={this.handleSignInLinkClick} color="secondary">
              Sign In
            </CustomLink>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpView;
*/
