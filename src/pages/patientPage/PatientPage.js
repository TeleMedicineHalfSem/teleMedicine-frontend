import React, { useState, useEffect } from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SearchBar } from "../../components/input/inputs";
import { getDoctors, searchDoctor } from "../../actions/doctorActions";
import { connect } from "react-redux";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import { connectSocket } from "../../actions/socketActions";

function PatientPage({
  doctors,
  getDoctors,
  searchDoctor,
  connectSocket,
  profile,
}) {
  const ENDPOINT = "http://127.0.0.1:2500";
  const [searchText, setSearchText] = useState("");
  let doctorListView = null;

  // Connect to socket...
  useEffect(() => {
    if (!profile.isEmpty && !profile.Doctor) {
      connectSocket({ ENDPOINT });
    } else {
      console.log("Not a Patient..");
    }
  }, [ENDPOINT, connectSocket, profile]);

  // Retrieving data from database...
  useEffect(() => {
    if (searchText === "") {
      getDoctors(5);
    } else {
      searchDoctor({ searchText });
    }
  }, [searchText, getDoctors, searchDoctor]);

  if (doctors && doctors.success) {
    doctorListView = doctors.success.map((doctor) => (
      <DoctorCard
        key={doctor.email}
        email={doctor.email}
        name={doctor.fullName}
        specialization={doctor.specialization}
        experience={doctor.registrationYear}
        initials={doctor.initials}
      />
    ));
  }

  return (
    <div className="patient-page">
      <div className="patient-page-header">
        <Navbar />
      </div>
      <div className="patient-page-body">
        <div className="patient-page-search">
          <SearchBar
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by name, specialization, email..."
            value={searchText}
          />
        </div>
        <p className="patient-page-text">Select a doctor to chat</p>
        <div className="patient-page-card-container">{doctorListView}</div>
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
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, {
  getDoctors,
  searchDoctor,
  connectSocket,
})(PatientPage);
