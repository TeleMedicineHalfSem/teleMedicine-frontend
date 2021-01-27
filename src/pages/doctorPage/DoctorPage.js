import React from "react";
import "./DoctorPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ChatRequestCard from "../../components/chatRequest/ChatRequestCard";
import RecordCard from "../../components/recordCard/RecordCard";

function DoctorPage() {
  return (
    <div className="doctor-page">
      <div className="doctor-page-header">
        <Navbar />
      </div>
      <div className="doctor-page-body-container">
        <div className="doctor-page-body">
          <div className="doctor-page-profile">
            <ProfileCard
              name="Anugya Ram"
              specialization="Dentist"
              experience="2019"
              dob="2000-10-22"
              gender="female"
              initials="A"
            />
          </div>
          <div className="doctor-page-contents">
            <div className="doctor-page-contents-left-container">
              <div className="doctor-page-contents-left">
                <p className="doctor-page-heading">Medical Record</p>
                <RecordCard patientName="Mayur" patientProblem="Cough" />
                <RecordCard patientName="Mayur" patientProblem="Cough" />
                <RecordCard patientName="Mayur" patientProblem="Cough" />
              </div>
            </div>
            <div className="doctor-page-contents-right-container">
              <div className="doctor-page-contents-right">
                <p className="doctor-page-heading">Chat Requests</p>
                <ChatRequestCard patientName="Mayur" />
                <ChatRequestCard patientName="Mayur" />
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

export default DoctorPage;
