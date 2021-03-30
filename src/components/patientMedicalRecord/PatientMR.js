import React from "react";
import "./PatientMR.css";

const PatientMR = ({ docName, date, problem, onClick, id }) => {
  return (
    <div id={id} onClick={onClick} className="patient-mr">
      <p id={id} className="mr-doc">
        {docName}
      </p>
      <p id={id} className="mr-date">
        {date}
      </p>
      <p id={id} className="mr-problem">
        {problem}
      </p>
    </div>
  );
};

export default PatientMR;
