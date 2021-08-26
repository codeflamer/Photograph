import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'

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
          {/* <Route path="/" exact>
            <Home />
          </Route> */}
        </Switch>
    </Router>
  );
}

export default App;
