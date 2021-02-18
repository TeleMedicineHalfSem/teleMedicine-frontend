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
  let age, currentYear;
  if (
    name !== undefined &&
    specialization !== undefined &&
    experience !== undefined &&
    dob !== undefined &&
    initials !== undefined &&
    gender !== undefined
  ) {
    currentYear = new Date().getFullYear();
    age = currentYear - parseInt(dob.split("-")[0]);
    name = "Dr. " + camelCaseText(name);
    experience = currentYear - experience;
    gender = camelCaseText(gender);
    specialization = camelCaseText(specialization);
  }

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
