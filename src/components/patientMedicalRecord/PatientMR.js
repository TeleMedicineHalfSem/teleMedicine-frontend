import React from "react";
import "./PatientMR.css";
import Divider from "../divider/Divider";

const PatientMR = ({docName, date, problem}) => {
    return(
        <div className="patient-mr">
            <p className="mr-doc">{docName}</p>
            <p className="mr-date">{date}</p>
            <p className="mr-problem">{problem}</p>
            <Divider margin={{ top: "25px", bottom: "30px" }} />
        </div>
    )
}

export default PatientMR;