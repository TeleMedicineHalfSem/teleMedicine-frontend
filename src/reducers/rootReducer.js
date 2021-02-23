import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import doctorReducer from "./doctorReducer";
import socketReducer from "./socketReducer";
import roomReducer from "./roomReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
  socketData: socketReducer,
  roomData: roomReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
