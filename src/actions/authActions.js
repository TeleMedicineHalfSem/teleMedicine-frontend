const authRequest = () => {
  return {
    type: "AUTH_LOADING",
  };
};
const authSuccess = () => {
  return {
    type: "AUTH_SUCCESS",
  };
};
const authFailure = (error) => {
  return {
    type: "AUTH_FAIL",
    payload: error,
  };
};

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(authRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("login success");
        dispatch(authSuccess());
      })
      .catch((error) => {
        console.log("login failed");
        dispatch(authFailure(error));
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(authRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(authSuccess());
        console.log("logged out");
      })
      .catch((error) => {
        dispatch(authFailure(error));
        console.log("logging out failed");
      });
  };
};
