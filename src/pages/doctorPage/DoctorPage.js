import React from "react";
import "./DoctorPage.css";
import ProfileCard from "../../components/profileCard/ProfileCard";

function DoctorPage() {
  return (
    <div>
      {
        // Test your codes here... Anugya & Slokha
      }
      <ProfileCard
        name="Mayur"
        specialization="Dentist"
        experience="2019"
        dob="2000-10-22"
        initials="M"
      />
    </div>
  );
}

export default DoctorPage;
