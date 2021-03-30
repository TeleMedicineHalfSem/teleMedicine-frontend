import React from "react";
import "./PatientMRPage.css";
import PatientMR from "../../components/patientMedicalRecord/PatientMR";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function PatientMRPage(){
    return(
        <div className="mr-page">
            <div className="mr-page-header">
                <NavBar />
            </div>
            <div className="mr-page-contents">
                <p className="mr-page-heading">Medical Records</p>
                <div className="patient-mr-card">
                    <PatientMR docName="Sawarni" date="22/10/2020" problem="Cold, cough, fever" />
                    <PatientMR docName="Sawarni" date="22/10/2020" problem="Cold, cough, fever" />
                </div>
            </div>
            <div className="mr-page-footer">
                <Footer />
            </div>
        </div>
    );
}

export default PatientMRPage;