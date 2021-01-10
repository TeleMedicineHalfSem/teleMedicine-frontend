import React ,{Component} from "react";
import "./SignUpPage.css";
import "../../App.css"
import Button from "../../components/button/Button";
import TextInput from "../../components/input/TextInput";
import RadioInput from "../../components/input/RadioInput";
class SignupPage extends Component {
  
  constructor() {
    super();
    this.state = {
      fullName: "",
      email:"",
      password:"",
      confirmPassword:"",
      selectedOption:"",
      specialisation:"",
    };
     this.DOCTOR="Doctor";
     this.PAITENT="Paitent";
    
    this.handleSelectOption = this.handleSelectOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.forDoctor=this.forDoctor.bind(this);
    this.handleSpecialisation=this.handleSpecialisation.bind(this);
    //this.abc = this.abc.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('FullName: ' + this.state.fullName + '\nEmail:' +this.state.email+ '\nPassword:'+this.state.password+'\nConfirm Password:'+this.state.confirmPassword+'\nwho are you? '+this.state.selectedOption+'\nSpecialisation:'+this.state.specialisation);
  }
  handleSpecialisation(event){
    this.setState({
      specialisation:event.target.value
    });
  }
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
  forDoctor(event){
    return(
      <div>
        <TextInput placeholder={"Specialisation"} size={"medium"} type={"text"} onChange={this.handleSpecialisation}/><br/>
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
            <Button children={"Submit"} color={"primary"} type={"submit"} size={"large"}/>
          </div>
        </form>
        
        <div>
        
        </div>
      </div>

    );
  }
  /*return (
    <div className="body-format">
        
        {// TODO: Abhishek write here...
        // To see this page goto http://localhost:3000/signup
        }

    </div>
  );*/
}

export default SignupPage;
