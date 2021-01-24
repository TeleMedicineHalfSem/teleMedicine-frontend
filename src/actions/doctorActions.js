import { FireSQL } from "firesql";
import camelCaseText from "../utils/camelCaseText";

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

export const getDoctors = (limit) => {
  return (dispatch, getState, { getFirestore }) => {
    dispatch(doctorRequest());
    const firestore = getFirestore();
    let doctors = [];
    firestore
      .collection("doctors")
      .limit(limit)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const document = doc.data();

          // Making first letter of all the text as capital...
          document.fullName = camelCaseText(document.fullName);
          document.specialization = camelCaseText(document.specialization);
          doctors.push(document);
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
    searchText = searchText.toLowerCase();
    let doctors = [];

    const doctorQuery = fireSQL.query(
      `SELECT * FROM doctors WHERE 
      specialization LIKE '${searchText}%' OR 
      fullName LIKE '${searchText}%' OR 
      gender LIKE '${searchText}%' OR
      email LIKE '${searchText}%'`
    );
    doctorQuery
      .then((snapshot) => {
        snapshot.forEach((document) => {
          // Making first letter of all the text as capital...
          document.fullName = camelCaseText(document.fullName);
          document.specialization = camelCaseText(document.specialization);
          doctors.push(document);
        });
        dispatch(doctorSuccess(doctors));
      })
      .catch((error) => {
        dispatch(doctorFailure("Unable to retrieve data"));
      });
  };
};
