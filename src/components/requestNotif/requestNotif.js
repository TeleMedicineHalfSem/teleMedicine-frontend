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
        <div className="request-button">
            <button>Accept</button>
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

export default requestNotif;