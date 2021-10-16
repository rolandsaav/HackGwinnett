import React from "react";
import Test from "./Test";
import Signup from "./Signup"
import CauseView from "./CauseView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import Navigator from "./Navigator";

function App() {
  return (
      <Container fluid className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>  
        <div className="w-100">  
          <Router>
            <Navigator/>
            <Switch>
              <CauseView/>
            </Switch>
          </Router>
        </div>
      </Container>
    
  );
}

export default App;
