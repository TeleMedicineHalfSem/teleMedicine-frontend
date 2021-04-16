import React, { useEffect } from "react";
import "./PatientMRPage.css";
import PatientMR from "../../components/patientMedicalRecord/PatientMR";
import NavBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRecordsByEmail } from "../../actions/recordActions";

function PatientMRPage({ profile, getRecordsByEmail, recordData }) {
  const history = useHistory();
  let records = [];
  let patientMRs = [];
  if (profile.isDoctor && !profile.isEmpty) {
    history.push("/signin");
  }

  // Getting the data...
  useEffect(() => {
    getRecordsByEmail();
  }, [getRecordsByEmail]);

  // on clicking the medical record card...
  const onClickPatientMR = (event) => {
    history.push("/medicalRecord", { id: event.target.id });
  };

  // Adding record data into array...
  if (recordData && Array.isArray(recordData.success)) {
    records = recordData.success;
    for (let i = 0; i < records.length; i++) {
      records[i].key = i + 1;
    }
    // Array of patientMR...
    patientMRs = records.map((record) => (
      <PatientMR
        docName={record.doctorDetails.name}
        date={record.date}
        problem={record.medicalInfo.disease}
        id={record.id}
        onClick={onClickPatientMR}
      />
    ));
  }

  return (
    <div className="mr-page">
      <div className="mr-page-header">
        <NavBar />
      </div>
      <div className="mr-page-contents">
        <p className="mr-page-heading">Medical Records</p>
        <div className="patient-mr-card">{patientMRs}</div>
      </div>
      <div className="mr-page-footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    recordData: state.recordData,
  };
};

export default connect(mapStateToProps, { getRecordsByEmail })(PatientMRPage);
