import React from "react";
import "./PatientPage.css";
import DocList from "../../components/docList/DoctorCard";
function PatientPage() {
  return (
    <div>
      <DocList
        src="/images/card-img1.jpg"
        name="Mayur"
        specialization="Dentist"
        experience="5"
      />
    </div>
  );
}

export default PatientPage;
