import React from "react";
import "./DoctorPage.css";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function DoctorPage() {
  return (
    <div className="doctor-page">
      <div className="doctor-page-header">
        <Navbar />
      </div>
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
      </div>
      <div className="doctor-page-footer">
        <Footer />
      </div>
    </div>
  );
}

export default DoctorPage;
