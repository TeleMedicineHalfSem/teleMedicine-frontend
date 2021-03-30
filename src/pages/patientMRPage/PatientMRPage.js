import React from "react";
import "./PatientMRPage.css";
import PatientMR from "../../components/patientMedicalRecord/PatientMR";

function PatientMRPage(){
    return(
        <div className="patient-mr-page">
            <div className="mr-page-contents">
                <p className="mr-page-heading">Medical Records</p>
                <div className="patient-mr-card">
                    <PatientMR docName="Sawarni" date="22/10/2020" problem="Cold, cough, fever" />
                    <PatientMR docName="Sawarni" date="22/10/2020" problem="Cold, cough, fever" />
                </div>
            </div>
        </div>
    );
}

export default PatientMRPage;