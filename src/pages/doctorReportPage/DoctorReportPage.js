import React from "react";
import DoctorDetail from "../../components/Report/DoctorDetail";
import PatientDetail from "../../components/Report/PatientDetail";

function DoctorReportPage() {
  return (
    <div>
      <DoctorDetail docName="Anugya" specilization="dentist" email="abc@mail.com"/>
      <PatientDetail pName="Mayur" gender="male" dob="22-10-2000" age="21" />
    </div>
  );
}

export default DoctorReportPage;