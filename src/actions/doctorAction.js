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
  export const dotorReset = () => {
    return {
      type: "DOCTOR_RESET",
    };
  };
  
  export const getDoctor = () => {
    return (dispatch, getState, { getFirestore }) => {
      dispatch(doctorRequest());
      const db = getFirestore();
      let list=[]
      db.collection("doctors")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              list.push(doc.data())
            });   
            dispatch(doctorSuccess(list));
        })
        .catch((error) => {
          dispatch(doctorFailure("Unable to retrieve data"));
        });
    };
  };