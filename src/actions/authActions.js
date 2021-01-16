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

        // Checking if doctor...
        if (isDoctor) {
          return firestore.collection("doctors").doc(resp.user.uid).set({
            name: fullName,
            firstName: firstName,
            lastName: lastName,
            initials: initials,
            specialization: specialization,
            registrationCouncil: registrationCouncil,
            registrationNumber: registrationNumber,
            registrationYear: registrationYear,
          });
        } else {
          return firestore.collection("patients").doc(resp.user.uid).set({
            name: fullName,
            firstName: firstName,
            lastName: lastName,
            initials: initials,
          });
        }
      })
      .then(() => {
        dispatch(authSuccess());
        console.log("Signed up Success");
      })
      .catch((error) => {
        dispatch(authFailure(error));
        console.log("signing up failed");
      });
  };
};
