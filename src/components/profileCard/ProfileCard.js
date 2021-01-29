import React from "react";
import "./ProfileCard.css";
import DisplayPicture from "../displayPicture/DisplayPicture";
import camelCaseText from "../../utils/camelCaseText";

function ProfileCard({
  name,
  specialization,
  experience,
  dob,
  initials,
  gender,
}) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(dob.split("-")[0]);
  name = "Dr. " + name;
  experience = currentYear - experience;
  gender = camelCaseText(gender);

  return (
    <div className="profile-card">
      <img
        className="profile-card-back-image"
        src="./images/blue-background.jpg"
        alt=""
      />
      <div className="profile-card-dp">
        <DisplayPicture initials={initials} height="150px" width="150px" />
      </div>
      <div className="profile-card-details">
        <div className="profile-card-details-left">
          <h4>{name}</h4>
          {specialization}
        </div>
        <div className="profile-card-details-right">
          Age: {age}
          <br />
          Experience: {experience} years
          <br />
          Gender: {gender}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
