import React from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function PatientPage() {
  return (
    <div className="patient-page">
      <div className="patient-page-header">
        <Navbar />
      </div>
      <div className="patient-page-body"></div>
      <div className="patient-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default PatientPage;
