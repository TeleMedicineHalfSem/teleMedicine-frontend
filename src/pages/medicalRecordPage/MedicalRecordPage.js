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
                <div className="medical-record-heading">
                    <p>Easy Care</p>
                </div>
            </div>
            <div className="medical-record-footer">
                <Footer />
            </div>
        </div>
    )
}

export default MedicalRecord;