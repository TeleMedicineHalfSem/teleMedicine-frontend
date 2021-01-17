import React from "react";
import DoctorCard from "../../components/doctorCard/DoctorCard";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function DoctorList({ doctors }) {
  let doctorView = null;

  if (doctors !== undefined) {
    doctorView = doctors.map((doctor) => (
      <div key={doctor.email}>
        <DoctorCard
          name={doctor.fullName}
          specialization={doctor.specialization}
          experience={doctor.registrationYear}
        />
      </div>
    ));
  }
  return <div>{doctorView}</div>;
}
const mapStateToProps = (state) => {
  return {
    doctors: state.firestore.ordered.doctors,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "doctors", limit: 5 }])
)(DoctorList);
