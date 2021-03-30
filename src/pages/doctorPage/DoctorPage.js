import React, { useEffect } from "react";
import "./DoctorPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProfileCard from "../../components/profileCard/ProfileCard";
import ChatRequestCard from "../../components/chatRequest/ChatRequestCard";
import RecordCard from "../../components/recordCard/RecordCard";
import { connect } from "react-redux";
import { getProfileDoctor } from "../../actions/authActions";
import { delRequestedDoctor } from "../../actions/doctorActions";
import { connectSocket } from "../../actions/socketActions";
import { getRecordsByEmail } from "../../actions/recordActions";
import { useHistory } from "react-router-dom";

function DoctorPage({
  getProfileDoctor,
  profileData,
  connectSocket,
  profile,
  getRecordsByEmail,
  recordData,
  delRequestedDoctor,
}) {
  //initialization...
  let name, specialization, gender, experience, dob, initials;
  const ENDPOINT = "http://127.0.0.1:2500";
  const history = useHistory();

  // If not doctor then go to patient page...
  if (!profile.isDoctor) {
    history.push("/patient");
  }

  // Connect to socket...
  useEffect(() => {
    if (!profile.isEmpty && profile.isDoctor) {
      connectSocket({ ENDPOINT, name: profile.email });
    } else {
      console.log("Not a Doctor..");
    }
  }, [ENDPOINT, connectSocket, profile]);

  //getting profile data...
  useEffect(() => {
    getRecordsByEmail();
    getProfileDoctor();
  }, [getProfileDoctor, getRecordsByEmail]);

  // Chat requests...
  let listReq = [];
  if (profileData !== undefined && profileData.requests) {
    let i = 0;
    for (let request of profileData.requests) {
      listReq.push({ key: i, patientName: request });
      i++;
    }
  }

  const requestAccepted = (event) => {
    delRequestedDoctor(event.target.id);
    history.push("/chat", { patientEmail: event.target.id });
  };

  // On Click record card...
  const onClickRecord = (event) => {
    const id = event.target.id;
    history.push("/medicalRecord", { id: id });
  };

  if (profileData) {
    name = profileData.fullName;
    specialization = profileData.specialization;
    gender = profileData.gender;
    experience = profileData.registrationYear;
    dob = profileData.dob;
    initials = profileData.initials;
  }

  // Medical Records from firebase....
  let listRecord = [];
  if (recordData.success && Array.isArray(recordData.success)) {
    listRecord = recordData.success;
    for (let i = 0; i < listRecord.length; i++) {
      listRecord[i].key = i + 1;
    }
  }
  const recordView = listRecord.map((record) => (
    <RecordCard
      key={record.key}
      patientName={record.patientDetails.name}
      patientProblem={record.medicalInfo.disease}
      id={record.id}
      onClick={onClickRecord}
    />
  ));

  const requestView = listReq.map((request) => (
    <ChatRequestCard
      id={request.patientName}
      key={request.key}
      patientName={request.patientName}
      onClick={requestAccepted}
    />
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
    profile: state.firebase.profile,
    recordData: state.recordData,
  };
};

export default connect(mapStateToProps, {
  getProfileDoctor,
  connectSocket,
  getRecordsByEmail,
  delRequestedDoctor,
})(DoctorPage);
