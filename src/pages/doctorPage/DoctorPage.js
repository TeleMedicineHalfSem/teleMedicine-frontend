import React from "react";
import "./DoctorPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ChatRequestCard from "../../components/chatRequest/ChatRequestCard";

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
            <div className="doctor-page-contents-left"></div>
            <div className="doctor-page-contents-right">
              <p className="doctor-page-heading">
                <u>Chat Requests</u>
              </p>
              <ChatRequestCard patientName="mayur" />
              <ChatRequestCard patientName="mayur" />
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
