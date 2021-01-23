const authRequest = () => {
    return {
      type: "AUTH_LOADING",
    };
  };
  const authSuccess = (data) => {
    return {
      type: "AUTH_SUCCESS",
      payload: data,
    };
  };
  const authFailure = (error) => {
    return {
      type: "AUTH_FAIL",
      payload: error,
    };
  };
  export const authReset = () => {
    return {
      type: "AUTH_RESET",
    };
  };
  
  export const doctorList = () => {
    return (dispatch, getState, { getFirestore }) => {
      dispatch(authRequest());
      const db = getFirestore();
      db.collection("doctor")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              
            });    
        })
        .catch((error) => {
          dispatch(authFailure("Login Failed"));
        });
      dispatch(authReset());
    };
  };