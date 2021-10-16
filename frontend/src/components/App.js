import React from "react";
import Test from "./Test";
import Signup from "./Signup"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import Navigator from "./Navigator";
import Login from "./Login"

function App() {
  return (
    <Router>
      <Container fluid className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>  
        <div className="w-100">  
          <Navigator/>
          <Signup/>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
