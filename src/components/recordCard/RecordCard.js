import React from "react";
import "./RecordCard.css";

const doctorRecord = ({ patientName, id, patientProblem, onClick }) => {
  return (
    <div onClick={onClick} id={id} className="record-card">
      <div id={id} className="record-card-body-heading">
        <span id={id}>{patientName}</span>
      </div>
      <div id={id} className="record-card-body-description">
        <p id={id}>{patientProblem}</p>
      </div>
    </div>
  );
};

export default doctorRecord;
