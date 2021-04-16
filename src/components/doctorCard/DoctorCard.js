import React from "react";
import "./DoctorCard.css";
import Button from "../button/Button";
import DisplayPicture from "../displayPicture/DisplayPicture";
import { requestDoctor } from "../../actions/doctorActions";
import { connect } from "react-redux";

function DoctorCard({
  name,
  specialization,
  experience,
  initials,
  requestDoctor,
  email,
  doctorData,
  profile,
  id,
  onClick,
}) {
  const expString = `In practice since ${experience}`;
  const nameString = `Dr. ${name}`;

  return (
    <div className="doctor-card" id={id}>
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
          <Button color="secondary" id={id} onClick={onClick}>
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    doctorData: state.doctors,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, { requestDoctor })(DoctorCard);
