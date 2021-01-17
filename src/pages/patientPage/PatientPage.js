import React from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SearchBar } from "../../components/input/inputs";
function PatientPage() {
  return (
    <div className="patient-page">
      <div className="patient-page-header">
        <Navbar />
      </div>
      <div className="patient-page-body">
        <div className="patient-page-search">
          <SearchBar placeholder="Search for a specialization..." />
        </div>
        <div className="patient-page-card-container"></div>
      </div>
      <div className="patient-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default PatientPage;
