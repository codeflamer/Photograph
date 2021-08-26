import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import Home from "./pages/Home";

const App = () =>  {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <RegistrationPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
