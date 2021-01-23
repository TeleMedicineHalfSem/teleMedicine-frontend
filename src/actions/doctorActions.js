import { FireSQL } from "firesql";

const doctorRequest = () => {
  return {
    type: "DOCTOR_LOADING",
  };
};
const doctorSuccess = (data) => {
  return {
    type: "DOCTOR_SUCCESS",
    payload: data,
  };
};
const doctorFailure = (error) => {
  return {
    type: "DOCTOR_FAIL",
    payload: error,
  };
};
export const doctorReset = () => {
  return {
    type: "DOCTOR_RESET",
  };
};

export const getDoctors = () => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch(doctorRequest());
    const firestore = getFirestore();
    let doctors = [];
    firestore
      .collection("doctors")
      .limit(10)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          doctors.push(doc.data());
        });
        dispatch(doctorSuccess(doctors));
      })
      .catch((error) => {
        dispatch(doctorFailure("Unable to retrieve data"));
      });
  };
};

export const searchDoctor = ({ searchText }) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch(doctorRequest());
    const firestore = getFirestore();
    const fireSQL = new FireSQL(firestore);
    let doctors = [];

    const doctorQuery = fireSQL.query(
      `SELECT * FROM doctors WHERE specialization LIKE '${searchText}%' 
      OR fullName LIKE '${searchText}%' 
      OR gender LIKE '${searchText}%'`
    );
    doctorQuery
      .then((doctorList) => {
        doctors = doctorList;
        dispatch(doctorSuccess(doctors));
      })
      .catch((error) => {
        dispatch(doctorFailure("Unable to retrieve data"));
      });
  };
};