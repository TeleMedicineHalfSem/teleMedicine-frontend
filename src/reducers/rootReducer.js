import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import doctorReducer from "./doctorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  doctor: doctorReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
