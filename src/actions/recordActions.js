import { dateToday } from "../utils/currentDate";
import { FireSQL } from "firesql";

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
  patientEmail,
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
      doctorEmail: doctorEmail,
      patientEmail: patientEmail,
      doctorDetails: {
        name: doctorName,
        specialization: doctorSpecialization,
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
      .then((resp) => {
        const uid = resp.id;
        return firestore.collection("records").doc(uid).update({
          id: uid,
        });
      })
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

export const getRecordsByEmail = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(recordRequest());
    const records = [];
    const email = getFirebase().auth().currentUser.email;
    const firestore = getFirestore();
    const fireSQL = new FireSQL(firestore);
    const query = fireSQL.query(
      `SELECT * FROM records WHERE 
      doctorEmail = '${email}' OR 
      patientEmail = '${email}'`
    );
    query
      .then((snapshot) => {
        snapshot.forEach((data) => {
          records.push(data);
        });
        dispatch(recordSuccess(records));
      })
      .catch(() => {
        dispatch(recordFailure("Medical Records failed to get data"));
      });
  };
};

export const getRecordById = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(recordRequest());
    const firestore = getFirestore();
    firestore
      .collection("records")
      .doc(id)
      .get()
      .then((snap) => {
        const data = snap.data();
        dispatch(recordSuccess(data));
      })
      .catch(() => {
        dispatch(recordFailure("Medical Records failed to get data"));
      });
  };
};
