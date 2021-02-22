import React from "react";
import "./DoctorCard.css";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import DisplayPicture from "../displayPicture/DisplayPicture";
import { requestDoctor } from "../../actions/doctorActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function DoctorCard({
  name,
  specialization,
  experience,
  initials,
  requestDoctor,
  email,
  doctorData,
}) {
  const expString = `In practice since ${experience}`;
  const nameString = `Dr. ${name}`;
  const history = useHistory();

  const onClickChat = () => {
    requestDoctor({ email });
  };

  // Navigating to chat page...
  if (doctorData.success && doctorData.success === "REQUEST_DOCTOR") {
    history.push("/chat");
  }

  return (
    <div className="doctor-card">
      <div className="doctor-card-main">
        <div className="doctor-card-display-pic">
          <DisplayPicture height="130px" width="130px" initials={initials} />
        </div>
        <div className="doctor-card-specs">
          <div>
            <span className="doctor-card-specs-name">
              <b>{nameString}</b>
            </span>
            <br />
            <span className="doctor-card-specs-spec">{specialization}</span>
            <p className="doctor-card-specs-exp">{expString}</p>
          </div>
        </div>
        <div className="doctor-card-button">
          <Button color="secondary" onClick={onClickChat}>
            Chat
          </Button>
        </div>
      </div>
      <Divider
        margin={{ top: "20px", bottom: "10px", left: "10px", right: "10px" }}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    doctorData: state.doctors,
  };
};

export default connect(mapStateToProps, { requestDoctor })(DoctorCard);
