import React from "react";
import "./RecordCard.css";

const doctorRecord = ({ patientName, patientProblem }) => {
  const onClickRecord = () => {
    console.log("Medical record...");
  };

  return (
    <div onClick={onClickRecord} className="record-card">
      <div className="record-card-body-heading">
        <span>{patientName}</span>
      </div>
      <div className="record-card-body-description">
        <p>{patientProblem}</p>
      </div>
    </div>
  );
};

export default doctorRecord;
