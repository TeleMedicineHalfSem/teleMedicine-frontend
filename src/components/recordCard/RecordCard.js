import React from "react";
import "./RecordCard.css";

const doctorRecord = ({ patientName, patientProblem }) => {
  return (
    <div className="record-card">
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
