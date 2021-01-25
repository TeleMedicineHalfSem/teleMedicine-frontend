import React from "react";
import "./DoctorMedicalRecord.css";
import Divider from "../divider/Divider";

const doctorRecord = ({patientName, patientProblem}) => {
    return(        
        <div className="card">
            <div className="card-heading">
                <h5>Recent Medical Cases</h5>
            </div>
            <div className="card-body-heading">
                <span>{patientName}</span>
            </div>
            <div className="card-body-description">
                <p>{patientProblem}</p>
            </div>
            <Divider
                margin={{
                top: "0px",
                bottom: "10px",
                left: "0px",
                right: "5px",
                }}
            />
        </div>
    );
};

export default doctorRecord;