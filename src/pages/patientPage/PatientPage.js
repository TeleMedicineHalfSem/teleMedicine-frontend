import React, { useState } from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SearchBar } from "../../components/input/inputs";
import DoctorList from "./DoctorList";
import {connect} from "react-redux";
import {getDoctor} from "../../actions/doctorAction";
function PatientPage({getDoctor}) {
  const [searchText, setSearchText] = useState("");
  getDoctor()
  return (
    <div className="patient-page">
      <div className="patient-page-header">
        <Navbar />
      </div>
      <div className="patient-page-body">
        <div className="patient-page-search">
          <SearchBar
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for a specialization..."
          />
        </div>
        <p className="patient-page-text">Select a doctor to chat</p>
        <div className="patient-page-card-container">
          <DoctorList searchText={searchText} />
        </div>
        <br />
        <br />
      </div>
      <div className="patient-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default connect(null,{getDoctor}) (PatientPage);
