import React from "react";
// import DoctorCard from "../../components/doctorCard/DoctorCard";

function DoctorList({ doctors, searchText }) {
  let doctorView = null;

  // if (doctors !== undefined) {
  //   doctorView = doctors.map((doctor) => (
  //     <div key={doctor.email}>
  //       <DoctorCard
  //         name={doctor.fullName}
  //         specialization={doctor.specialization}
  //         experience={doctor.registrationYear}
  //         initials={doctor.initials}
  //       />
  //     </div>
  //   ));
  // }
  return <div>{doctorView}</div>;
}

export default DoctorList;
