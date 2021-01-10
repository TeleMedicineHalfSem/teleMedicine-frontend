import React ,{Component} from "react";
import "./SignUpPage.css";
import "../../App.css"
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import RadioInput from "../../components/input/RadioInput";
class SignUpPage extends Component {
  
  constructor() {
    super();
    this.state = {
      fullName: "",
      email:"",
      password:"",
      confirmPassword:"",
      selectedOption:"",
      specialisation:"",
      registration_number:"",
      registration_council:"",
      registration_year:""
    };
     this.DOCTOR="Doctor";
     this.PAITENT="Paitent";
    
     //binding all the events
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.forDoctor=this.forDoctor.bind(this);
    this.handleSpecialisation=this.handleSpecialisation.bind(this);
    this.handleRegistrationNumber=this.handleRegistrationNumber.bind(this);
    this.handleRegistrationCouncil=this.handleRegistrationCouncil.bind(this);
    this.handleRegistrationYear=this.handleRegistrationYear.bind(this);
  }

  //all handler functions
  handleFullName(event){
    this.setState({
      fullName:event.target.value
    });
  }
  
  handleEmail(event){
    this.setState({
      email:event.target.value
    });
  }

  handlePassword(event){
    this.setState({
      password:event.target.value      
    });
  }

  handleConfirmPassword(event){
    this.setState({
      confirmPassword:event.target.value
    });
  }

  handleSelectOption(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSpecialisation(event){
    this.setState({
      specialisation:event.target.value
    });
  }

  handleRegistrationNumber(event){
    this.setState({
      registration_number:event.target.value
    });
  }

  handleRegistrationCouncil(event){
    this.setState({
      registration_council:event.target.value
    });
  }

  handleRegistrationYear(event){
    this.setState({
      registration_year:event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('FullName: ' + this.state.fullName + '\nEmail:' +this.state.email+ '\nPassword:'+this.state.password+'\nConfirm Password:'+this.state.confirmPassword+'\nwho are you? '+this.state.selectedOption+'\nSpecialisation:'+this.state.specialisation+'\nRegistration Number :'+this.state.registration_number+'\nRegistrationCouncil :'+this.state.registration_council+'\nRegistration Year :'+this.state.registration_year);
  }
  
  //when doctor is selected
  forDoctor(event){
    return(
      <div>
        <TextInput placeholder={"Specialisation"} size={"medium"} type={"text"} onChange={this.handleSpecialisation}/><br/>
        <TextInput placeholder={"Registration Number"} size={"medium"} type={"text"} onChange={this.handleRegistrationNumber}/><br/>
        <TextInput placeholder={"Registration Council"} size={"medium"} type={"text"} onChange={this.handleRegistrationCouncil}/><br/>
        <TextInput placeholder={"Registration Year"} size={"medium"} type={"text"} onChange={this.handleRegistrationYear}/><br/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="body">
          <h3 className="head-color">Sign Up</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-margin content-color">
            <TextInput placeholder={"Full Name"} size={"medium"} type={"text"} onChange={this.handleFullName}/><br/>
            <TextInput placeholder={"Email"} size={"medium"} type={"email"} onChange={this.handleEmail} /><br/>
            <TextInput placeholder={"Password"} size={"medium"} type={"password"} onChange={this.handlePassword}/><br/>          
            <TextInput placeholder={"Confirm Password"} size={"medium"} type={"password"} onChange={this.handleConfirmPassword}/><br/>
            <RadioInput name={"Paitent"} children={"Paitent"} checked={this.state.selectedOption===this.PAITENT} onChange={this.handleSelectOption} value={"Paitent"} />
            <RadioInput name={"Doctor"} children={"Doctor"} checked={this.state.selectedOption===this.DOCTOR} onChange={this.handleSelectOption} value={"Doctor"} /><br/>
            {(this.state.selectedOption==="Doctor")?this.forDoctor():null}
          </div>
          <div className="button-align">
            <Button children={"Sign Up  "} color={"primary"} type={"submit"} size={"large"}/>
          </div>
        </form>
        
        <div>
        
        </div>
      </div>

    );
  }
}

export default SignUpPage;
