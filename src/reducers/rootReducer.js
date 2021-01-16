import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import doctorReducer from "./doctorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
