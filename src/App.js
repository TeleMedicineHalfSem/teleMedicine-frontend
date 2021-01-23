import React from "react";
import "./App.css";

import FrontPage from "./pages/frontPage/FrontPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import SignInPage from "./pages/signInPage/SignInPage";
import PatientPage from "./pages/patientPage/PatientPage";
import DoctorPage from "./pages/doctorPage/DoctorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
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
