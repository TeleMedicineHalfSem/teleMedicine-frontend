import React from "react";
import "./requestNotif.css";
import Divider from "../divider/Divider";

const requestNotif = ({patientName}) => {
    return(
        <div className="request">
        <div className="request-heading">
            <h5>Chat Requests</h5>
        </div>
        <div className="request-patient-name">
            <span>{patientName}</span>
        </div>
        <div>
            <button className ="request-button">Accept</button>
        </div>
    </div>
    );

};

export default requestNotif;