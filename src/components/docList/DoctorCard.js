import React from "react";
import "./DoctorCard.css";
import Button from "../button/Button";
import Divider from "../divider/Divider";

function DoctorCard({ name, src, specialization, experience }) {
  const expString = `${experience} years experience overall`;
  const nameString = `Dr. ${name}`;

  const onClickChat = () => {
    // Write code to redirect to chatRoom...
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card-main">
        <div className="doctor-card-image-container">
          <img className="doctor-card-image" src={src} alt="" />
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

export default DoctorCard;
