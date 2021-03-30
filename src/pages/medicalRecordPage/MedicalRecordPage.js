import React, { useEffect } from "react";
import "./MedicalRecordPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import Label from "../../components/label/Label";
import FormField from "../../components/formField/FormField";
import Button from "../../components/button/Button";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getRecordById } from "../../actions/recordActions";
import { useHistory } from "react-router-dom";

function MedicalRecord({ getRecordById, recordData, profile }) {
  const location = useLocation();
  let id = null;
  let record;
  let doctorName, doctorEmail, specialization, doctorPhone;
  let patientName, patientDob, patientGender, patientAge;
  let disease, medication, extraPoints, date;
  const history = useHistory();

  if (location.state) {
    id = location.state.id;
  } else {
    if (!profile.isEmpty) {
      if (profile.isDoctor) {
        history.push("/doctor");
      } else {
        history.push("/patient");
      }
    }
  }

  useEffect(() => {
    if (id) {
      getRecordById(id);
    }
  }, [id, getRecordById]);

  if (recordData.success && !Array.isArray(recordData.success)) {
    record = recordData.success;
    doctorName = record.doctorDetails.name;
    doctorEmail = record.doctorEmail;
    specialization = record.doctorDetails.specialization;
    doctorPhone = record.doctorDetails.phone;
    patientName = record.patientDetails.name;
    patientDob = record.patientDetails.dob;
    patientAge = record.patientDetails.age;
    patientGender = record.patientDetails.gender;
    disease = record.medicalInfo.disease;
    medication = record.medicalInfo.medication;
    extraPoints = record.medicalInfo.extraPoints;
    date = record.date;
  }

  const onClickPrint = () => {
    window.print();
  };

  return (
    <div className="medical-record">
      <div className="medical-record-header">
        <Navbar />
      </div>
      <div className="medical-record-body">
        <Banner date={date} />
        <hr className="blue-line"></hr>
        <div className="doctor-info">
          <Label labelName="DOCTOR INFORMATION" />
          <FormField
            label1="Name"
            label2="Email"
            label3="Specialization"
            label4="Phone"
            content1={doctorName}
            content2={doctorEmail}
            content3={specialization}
            content4={doctorPhone}
          />
        </div>
        <div className="patient-info">
          <Label labelName="PATIENT INFORMATION" />
          <FormField
            label1="Name"
            label2="Date of Birth"
            label3="Gender"
            label4="Age"
            content1={patientName}
            content2={patientDob}
            content3={patientGender}
            content4={patientAge}
          />
        </div>
        <div className="Medication">
          <Label labelName="MEDICAL INFORMATION" />
          <FormField
            label1="Disease"
            label2="Medication"
            label3="Extra Points"
            label4=""
            content1={disease}
            content2={medication}
            content3={extraPoints}
            content4=""
          />
        </div>
      </div>
      <div className="print-btn">
        <Button onClick={onClickPrint} color={"secondary"} size={"small"}>
          Print
        </Button>
      </div>
      <div className="medical-record-footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    recordData: state.recordData,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps, { getRecordById })(MedicalRecord);
