import React from "react";
import "./App.css";

import FrontPage from "./pages/frontPage/FrontPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/SignInPage";
import PatientPage from "./pages/patientPage/PatientPage";
import DoctorPage from "./pages/doctorPage/DoctorPage";

import DoctorReportPage from "./pages/doctorReportPage/DoctorReportPage";
import PatientMRPage from "./pages/patientMRPage/PatientMRPage";

import ChatPage from "./pages/chatPage/ChatPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MedicalRecord from "./pages/medicalRecordPage/MedicalRecordPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/patientMR">
          <PatientMRPage />
        </Route>
        <Route path="/doctorReport">
          <DoctorReportPage />
        </Route>
        <Route path="/medicalRecord">
          <MedicalRecord />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="/doctor">
          <DoctorPage />
        </Route>
        <Route path="/patient">
          <PatientPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
