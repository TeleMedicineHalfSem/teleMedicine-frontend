import React from "react";
import "./MedicalRecordPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Label from "../../components/label/Label";
import FormField from "../../components/formField/FormField";

function MedicalRecord(){
    return(
        <div className="medical-record">
            <div className="medical-record-header">
                <Navbar />
            </div>
            <div className="medical-record-body">
                <Banner />
                <hr className="blue-line"></hr>
                <div className="doctor-info">
                    <Label labelName="DOCTOR INFORMATION" />
                    <FormField 
                    label1="Name" 
                    label2="Email"
                    label3="Specilization"
                    label4="Phone"   

                    content1="Slokha Iyer"
                    content2="abc@gmail.com"
                    content3="Dentist"
                    content4="123456789"
                    />
                </div> 
                <div className="patient-info">
                <Label labelName="PATIENT INFORMATION" />
                    <FormField 
                    label1="Name" 
                    label2="Date of Birth"
                    label3="Gender"
                    label4="Age"   

                    content1="Anugya Ram"
                    content2="08-02-1999"
                    content3="Female"
                    content4="22"
                    />
                </div>
                <div className="Medication">
                <Label labelName="MEDICAL INFORMATION" />
                    <FormField 
                    label1="Disease" 
                    label2="Medication"
                    label3="Extra Points"
                    label4=""   

                    content1="Cough"
                    content2="Cough Syrup"
                    content3="Eat healthy food"
                    content4=""
                    />
                </div>
            </div>
            <div className="medical-record-footer">
                <Footer />
            </div>
        </div>
    )
}

export default MedicalRecord;