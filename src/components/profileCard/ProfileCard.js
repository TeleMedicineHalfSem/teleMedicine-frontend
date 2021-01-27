import React from "react";
import "./ProfileCard.css";
import DisplayPicture from "../displayPicture/DisplayPicture";

function ProfileCard({ name, specialization, experience, dob, initials }) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(dob.split("-")[0]);
  name = "Dr. " + name;
  experience = currentYear - experience;

  return (
    <div className="profile-card">
      <img
        className="profile-card-back-image"
        src="./images/blue-background.jpg"
        alt=""
      />
      <div></div>
    </div>
  );
}

export default ProfileCard;
