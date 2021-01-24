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
      <div className="profile-card-dp">
        <DisplayPicture initials={initials} width="145px" height="145px" />
      </div>
      <div className="profile-card-text-name">{name}</div>
      <div className="profile-card-text-spec">{specialization}</div>
      <div className="profile-card-text-age">Age: {age}</div>
      <div className="profile-card-text-exp">{experience} year experience</div>
    </div>
  );
}

export default ProfileCard;
