import React from "react";
import Test from "./Test";
import Signup from "./Signup"
import CauseView from "./CauseView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import Navigator from "./Navigator";
import Login from "./Login"
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";

function App() {
  return (
      <Container fluid className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>  
        <Router>
          <div className="w-100">  
            <Navigator/>
            <Signup/>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/reset" component={Reset} />
              <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Container>
  );
}

export default App;
