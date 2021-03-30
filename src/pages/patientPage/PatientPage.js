import React, { useState, useEffect } from "react";
import "./PatientPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { SearchBar } from "../../components/input/inputs";
import {
  getDoctors,
  searchDoctor,
  requestDoctor,
} from "../../actions/doctorActions";
import { connect } from "react-redux";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import { connectSocket } from "../../actions/socketActions";
import { useHistory } from "react-router-dom";

function PatientPage({
  doctors,
  getDoctors,
  searchDoctor,
  connectSocket,
  profile,
  requestDoctor,
}) {
  const ENDPOINT = "http://127.0.0.1:2500";
  const [searchText, setSearchText] = useState("");
  const [doctorEmail, setDoctorEmail] = useState(null);
  let doctorListView = null;
  const history = useHistory();

  // Checking if the user is not a patient....
  if (profile.isDoctor || profile.isEmpty) {
    history.push("/signin");
  }

  // Connect to socket...
  useEffect(() => {
    if (!profile.isEmpty && !profile.isDoctor) {
      connectSocket({ ENDPOINT, name: profile.email });
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

  // Navigating to chat page...
  if (doctors.success && doctors.success === "REQUEST_DOCTOR" && doctorEmail) {
    history.push({
      pathname: "/chat",
      state: { patientEmail: profile.email, doctorEmail: doctorEmail },
    });
  }

  // On click chat button....
  const onClickChat = (event) => {
    requestDoctor({ email: event.target.id });
    setDoctorEmail(event.target.id);
  };

  if (doctors && doctors.data) {
    doctorListView = doctors.data.map((doctor) => (
      <DoctorCard
        id={doctor.email}
        key={doctor.email}
        email={doctor.email}
        name={doctor.fullName}
        specialization={doctor.specialization}
        experience={doctor.registrationYear}
        initials={doctor.initials}
        onClick={onClickChat}
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
  requestDoctor,
})(PatientPage);
