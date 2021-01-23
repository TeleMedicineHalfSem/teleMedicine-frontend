import React, { useState, useEffect } from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SearchBar } from "../../components/input/inputs";
import { getDoctors, searchDoctor } from "../../actions/doctorActions";
import { connect } from "react-redux";

function PatientPage({ doctors, getDoctors, searchDoctor }) {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText === "") {
      getDoctors();
    } else {
      searchDoctor({ searchText });
    }
  }, [searchText, getDoctors, searchDoctor]);

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
            value={searchText}
          />
        </div>
        <p className="patient-page-text">Select a doctor to chat</p>
        <div className="patient-page-card-container"></div>
        <br />
        <br />
      </div>
      <div className="patient-page-footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    doctors: state.doctors,
  };
};

export default connect(mapStateToProps, { getDoctors, searchDoctor })(
  PatientPage
);
