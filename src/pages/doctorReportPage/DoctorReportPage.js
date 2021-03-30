import React, { useState } from "react";
import "./DoctorReportPage.css";
import Button from "../../components/button/Button";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BoderInput from "../../components/input/BoderInput";
import RadioInput from "../../components/input/RadioInput";
import { setRecord } from "../../actions/recordActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function DoctorReportPage({ setRecord, profile }) {
  const [doctorName, setDoctorName] = useState("");
  const [doctorSpecialization, setDoctorSpecialization] = useState("");
  const [doctorEmail, setDoctorEmail] = useState("");
  const [doctorPhone, setDoctorPhone] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientGender, setPatientGender] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [disease, setDisease] = useState("");
  const [medication, setMedication] = useState("");
  const [extraPoints, setExtraPoints] = useState("");
  const history = useHistory();

  if (!profile.isDoctor) {
    history.push("/patient");
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
                  <td>
                    <BoderInput
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                      type="text"
                    />
                  </td>
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
                <tr>
                  <td>
                    <label>Email:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={doctorEmail}
                      onChange={(e) => setDoctorEmail(e.target.value)}
                      type="email"
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
                  <td>
                    <BoderInput
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      type="text"
                      size="medium"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Email:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      type="text"
                      size="medium"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Gender:</label>
                  </td>
                  <td>
                    <RadioInput
                      checked={patientGender === "male"}
                      onChange={(e) => setPatientGender(e.target.value)}
                      type="radio"
                      value="male"
                    >
                      Male
                    </RadioInput>
                    <RadioInput
                      checked={patientGender === "female"}
                      onChange={(e) => setPatientGender(e.target.value)}
                      type="radio"
                      value="female"
                    >
                      Female
                    </RadioInput>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Date of birth:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={patientDob}
                      onChange={(e) => setPatientDob(e.target.value)}
                      type="date"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Age:</label>
                  </td>
                  <td>
                    <BoderInput
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      type="number"
                      size="small"
                    />
                  </td>
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
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, { setRecord })(DoctorReportPage);
