import { dateToday } from "../utils/currentDate";

const recordRequest = () => {
  return {
    type: "RECORD_REQUEST",
  };
};
const recordSuccess = (data) => {
  return {
    type: "RECORD_SUCCESS",
    payload: data,
  };
};
const recordFailure = (error) => {
  return {
    type: "RECORD_FAIL",
    payload: error,
  };
};
export const recordReset = () => {
  return {
    type: "RECORD_RESET",
  };
};

export const setRecord = ({
  doctorName,
  doctorSpecialization,
  doctorEmail,
  doctorPhone,
  patientName,
  patientGender,
  patientDob,
  patientAge,
  disease,
  medication,
  extraPoints,
}) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(recordRequest());
    const firestore = getFirestore();
    const date = dateToday();
    const data = {
      doctorDetails: {
        name: doctorName,
        specialization: doctorSpecialization,
        email: doctorEmail,
        phone: doctorPhone,
      },
      patientDetails: {
        name: patientName,
        gender: patientGender,
        dob: patientDob,
        age: patientAge,
      },
      medicalInfo: {
        disease: disease,
        medication: medication,
        extraPoints: extraPoints,
      },
      date: date,
    };
    firestore
      .collection("records")
      .add(data)
      .then(() => {
        console.log("Success");
        dispatch(recordSuccess(data));
      })
      .catch(() => {
        console.log("Failed");
        dispatch(recordFailure("Medical Records failed to set data"));
      });
  };
};
