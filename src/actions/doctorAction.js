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
  
  export const getDoctor = () => {
    return (dispatch, getState, { getFirestore }) => {
      dispatch(authRequest());
      const db = getFirestore();
      let list=[]
      db.collection("doctors")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              list.push(doc.data())
              console.log(doc);
            });   
            console.log(list); 
        })
        .catch((error) => {
          dispatch(authFailure("Login Failed"));
        });
      dispatch(authReset());
    };
  };