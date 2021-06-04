import React from "react";
import Signup from "./Signup";
import { Container, container } from "react-bootstrap";
import { AuthProvider } from "../Contex/Authcontex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashbord";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
