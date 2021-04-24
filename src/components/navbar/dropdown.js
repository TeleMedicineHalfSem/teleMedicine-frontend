import React from "react";
import "./Navbar.css";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import { useHistory } from "react-router-dom";

function Dropdown({ username, email, isVisible, toggle, signOut, profile }) {
  const history = useHistory();
  let buttonView = null;
  const onClickLogOut = () => {
    signOut();
  };

  const onClickProfile = () => {
    history.push("/doctor");
  };

  const onClickMedicalRecords = () => {
    history.push("/patientMR");
  };

  const onClickDoctors = () => {
    history.push("/patient");
  };

  if (!profile.isEmpty && profile.isDoctor) {
    buttonView = (
      <div onClick={onClickProfile} className="dropdown-button">
        Profile
      </div>
    );
  } else {
    buttonView = (
      <div>
        <div onClick={onClickMedicalRecords} className="dropdown-button">
          Medical Records
        </div>
        <div onClick={onClickDoctors} className="dropdown-button">
          Doctors
        </div>
      </div>
    );
  }

  return (
    <>
      {isVisible ? (
        <div onClick={() => toggle(false)} className="dropdown-card">
          <div className="dropdown-detail">
            <div>
              <div className="dropdown-name">
                <b>{username}</b>
              </div>
              <div className="dropdown-email">{email}</div>
            </div>
          </div>
          {buttonView}
          <div onClick={onClickLogOut} className="dropdown-button">
            Log Out
          </div>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, { signOut })(Dropdown);
