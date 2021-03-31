import React, { useState, useEffect } from "react";
import "./DoctorReportPage.css";
import Button from "../../components/button/Button";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BoderInput from "../../components/input/BoderInput";
import { setRecord } from "../../actions/recordActions";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import camelCaseText from "../../utils/camelCaseText";
import { getProfileByEmail } from "../../actions/authActions";

function DoctorReportPage({ setRecord, profile, getProfileByEmail, authData }) {
  const location = useLocation();
  let doctorName,
    doctorEmail,
    patientEmail,
    patientGender,
    patientDob,
    patientAge,
    patientName;
  const [doctorSpecialization, setDoctorSpecialization] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");

  const [disease, setDisease] = useState("");
  const [medication, setMedication] = useState("");
  const [extraPoints, setExtraPoints] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (location.state) {
      getProfileByEmail(location.state.patientEmail);
    }
  }, [getProfileByEmail, location]);

  if (!profile.isDoctor && !profile.isEmpty) {
    history.push("/signin");
  }

  if (!profile.isEmpty) {
    doctorName = camelCaseText(profile.fullName);
    doctorEmail = profile.email;
  }

  if (authData.success) {
    patientEmail = authData.success.email;
    patientName = camelCaseText(authData.success.fullName);
    patientGender = camelCaseText(authData.success.gender);
    patientDob = authData.success.dob;
    patientAge = new Date().getFullYear() - parseInt(patientDob.split("-")[0]);
  }

  const onClickSubmit = () => {
    setRecord({
      doctorName,
      doctorSpecialization,
      doctorEmail,
      doctorPhone,
      patientName,
      patientEmail,
      patientGender,
      patientDob,
      patientAge,
      disease,
      medication,
      extraPoints,
    });
    history.push("/");
  };

  return (
    <div className="doctor-report">
      <div className="doctor-report-header">
        <NavBar />
      </div>
      <div className="doctor-report-heading">
        <p>Medical Information</p>
      </div>
      <div className="doctor-details">
        <div>
          <p className="doctor-detail-heading">Doctor's Details</p>
          <div className="doctor-card">
            <div className="doctor-card-content">
              <table>
                <tr>
                  <td>
                    <label>Name:</label>
                  </td>
                  <td>{doctorName}</td>
                </tr>
                <tr>
                  <td>
                    <label>Email:</label>
                  </td>
                  <td>{doctorEmail}</td>
                </tr>
                <tr>
                  <td>
                    <label>Specialization:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={doctorSpecialization}
                      onChange={(e) => setDoctorSpecialization(e.target.value)}
                      type="text"
                    />
                  </td>
                </tr>
                <td>
                  <label>Phone:</label>
                </td>
                <td>
                  <BoderInput
                    value={doctorPhone}
                    onChange={(e) => setDoctorPhone(e.target.value)}
                    type="number"
                  />
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="patient-details">
        <div>
          <p className="patient-detail-heading">Patient's Details</p>
          <div className="patient-card">
            <div className="patient-card-content">
              <table>
                <tr>
                  <td>
                    <label>Name:</label>
                  </td>
                  <td>{patientName}</td>
                </tr>
                <tr>
                  <td>
                    <label>Email:</label>
                  </td>
                  <td>{patientEmail}</td>
                </tr>
                <tr>
                  <td>
                    <label>Gender:</label>
                  </td>
                  <td>{patientGender}</td>
                </tr>
                <tr>
                  <td>
                    <label>Date of birth:</label>
                  </td>
                  <td>{patientDob}</td>
                </tr>
                <tr>
                  <td>
                    <label>Age:</label>
                  </td>
                  <td>{patientAge}</td>
                </tr>
                <tr>
                  <td>
                    <label>Disease:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      type="text"
                      size="large"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Medication:</label>
                  </td>
                  <td>
                    <textarea
                      value={medication}
                      onChange={(e) => setMedication(e.target.value)}
                      name="medication"
                      className="doctor-text"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Extra points:</label>
                  </td>
                  <td>
                    <textarea
                      value={extraPoints}
                      onChange={(e) => setExtraPoints(e.target.value)}
                      name="extra-pts"
                      className="doctor-text"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="submit-btn">
        <Button
          onClick={onClickSubmit}
          color={"secondary"}
          type={"submit"}
          size={"medium"}
        >
          Submit
        </Button>
      </div>
      <div className="doctor-report-footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.auth);
  return {
    profile: state.firebase.profile,
    recordData: state.recordData,
    authData: state.auth,
  };
};

export default connect(mapStateToProps, { setRecord, getProfileByEmail })(
  DoctorReportPage
);
