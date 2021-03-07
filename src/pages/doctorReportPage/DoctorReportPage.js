import React from "react";
import "./DoctorReportPage.css";
import DoctorDetail from "../../components/Report/DoctorDetail";
import PatientDetail from "../../components/Report/PatientDetail";
import Button from "../../components/button/Button";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function DoctorReportPage() {
  return (
    <div className="doctor-report">
      <div className="doctor-report-header">
        <NavBar />
      </div>
      <div className="doctor-report-heading">
        <p>Medical Information</p>
      </div>
      <div className="doctor-details">
        <DoctorDetail docName="Anugya" specilization="dentist" email="abc@mail.com"/>
      </div>
      <div className="patient-details">
        <PatientDetail pName="Mayur" gender="male" dob="22-10-2000" age="21" />
      </div>
      <div className="submit-btn">
        <Button color={"secondary"} type={"submit"} size={"medium"}>Submit</Button>
      </div>
      <div className="doctor-report-footer">
        <Footer />
      </div>
    </div>
  );
}

export default DoctorReportPage;