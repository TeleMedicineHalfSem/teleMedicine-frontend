import React from "react";
import "./MedicalRecordPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";

function MedicalRecord(){
    return(
        <div className="medical-record">
            <div className="medical-record-header">
                <Navbar />
            </div>
            <div className="medical-record-body">
                <Banner />
                <hr className="blue-line"></hr>
            </div>
            <div className="medical-record-footer">
                <Footer />
            </div>
        </div>
    )
}

export default MedicalRecord;