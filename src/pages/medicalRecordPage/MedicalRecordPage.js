import React from "react";
import "./MedicalRecordPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function MedicalRecord(){
    return(
        <div className="medical-record">
            <div className="medical-record-header">
                <Navbar />
            </div>
            <div className="medical-record-body">
                <div className="medical-record-banner">
                    <div className="medical-record-heading">
                        <p className="medical-record-heading-left">Easy Care</p>
                        <p className="medical-record-heading-right">Medical Record</p>
                    </div>
                    <p className="medical-record-sub-heading">Online Consultancy Service</p>
                    <p className="medical-record-date">14 November 2020</p>
                </div>
                <hr className="blue-line"></hr>
            </div>
            <div className="medical-record-footer">
                <Footer />
            </div>
        </div>
    )
}

export default MedicalRecord;