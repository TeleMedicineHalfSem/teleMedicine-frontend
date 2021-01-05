import React from "react";
import "./App.css";

import FrontPage from "./pages/frontPage/FrontPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
