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

export const addDoctor = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(doctorRequest);
    const firestore = getFirestore();
    firestore
      .collection("doctors")
      .add({
        ...data,
        name: "Anugya",
        specialization: "Surgeon",
        experience: "10",
      })
      .then(() => {
        dispatch(doctorSuccess(data));
        console.log("Doctor Added successfully");
      })
      .catch((error) => {
        dispatch(doctorFailure(error));
        console.log("Doctor Adding failed");
      });
  };
};
