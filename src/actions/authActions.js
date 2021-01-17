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

export const signIn = ({ email, password }) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(authRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authSuccess("Successfully Logged in"));
      })
      .catch((error) => {
        dispatch(authFailure("Login Failed"));
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
        dispatch(authSuccess("Logged Out"));
      })
      .catch((error) => {
        dispatch(authFailure("Logging out failed"));
      });
  };
};

export const signUp = ({
  fullName,
  email,
  password,
  isDoctor,
  specialization,
  registrationNumber,
  registrationCouncil,
  registrationYear,
}) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        // Deriving first name, last name and initials....
        const name = fullName.split(" ");
        const firstName = name[0];
        let lastName = "";
        if (name[1]) {
          lastName = name[1];
        }
        const initials = name[0][0];

        // Setting all user data...
        return firestore.collection("users").doc(resp.user.uid).set({
          fullName: fullName,
          firstName: firstName,
          lastName: lastName,
          initials: initials,
          isDoctor: isDoctor,
          email: email,
        });

        // TODO: Have to put doctors and patient data separately...
      })
      .then(() => {
        dispatch(authSuccess("Successfully Signed up"));
      })
      .catch((error) => {
        dispatch(authFailure("Signing up failed"));
      });
  };
};
