import React, { useEffect } from "react";
import "./DoctorPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ChatRequestCard from "../../components/chatRequest/ChatRequestCard";
import RecordCard from "../../components/recordCard/RecordCard";
import { connect } from "react-redux";
import { getProfileDoctor } from "../../actions/authActions";

function DoctorPage({ getProfileDoctor, profileData }) {
  //initialization...
  let name, specialization, gender, experience, dob, initials;

  //getting profile data...
  useEffect(() => {
    getProfileDoctor();
  }, [getProfileDoctor]);

  if (profileData) {
    name = profileData.fullName;
    specialization = profileData.specialization;
    gender = profileData.gender;
    experience = profileData.registrationYear;
    dob = profileData.dob;
    initials = profileData.initials;
  }

  // Sample data for chat requests...
  const listReq = [];

  // Sample data for medical records...
  const listRecord = [
    { key: "1", patientName: "Slokha Iyer", patientProblem: "Fever" },
    { key: "2", patientName: "Abhishek Ranjan", patientProblem: "Cough" },
    { key: "3", patientName: "Mayur", patientProblem: "Headache" },
  ];

  const recordView = listRecord.map((record) => (
    <RecordCard
      key={record.key}
      patientName={record.patientName}
      patientProblem={record.patientProblem}
    />
  ));

  const requestView = listReq.map((request) => (
    <ChatRequestCard key={request.key} patientName={request.patientName} />
  ));

  return (
    <div className="doctor-page">
      <div className="doctor-page-header">
        <Navbar />
      </div>
      <div className="doctor-page-body-container">
        <div className="doctor-page-body">
          <div className="doctor-page-profile">
            <ProfileCard
              name={name}
              specialization={specialization}
              experience={experience}
              dob={dob}
              gender={gender}
              initials={initials}
            />
          </div>
          <div className="doctor-page-contents">
            <div className="doctor-page-contents-left-container">
              <div className="doctor-page-contents-left">
                <p className="doctor-page-heading">Medical Record</p>
                {recordView}
              </div>
            </div>
            <div className="doctor-page-contents-right-container">
              <div className="doctor-page-contents-right">
                <p className="doctor-page-heading">Chat Requests</p>
                {requestView}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="doctor-page-footer">
        <Footer />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profileData: state.auth.success,
  };
};

export default connect(mapStateToProps, { getProfileDoctor })(DoctorPage);
