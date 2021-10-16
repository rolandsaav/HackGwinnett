import React from "react";
import Test from "./Test";
import Signup from "./Signup"
import CauseView from "./CauseView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import Navigator from "./Navigator";
import Login from "./Login"
import CauseCreate from "./CauseCreate";

function App() {
  return (
      <Container fluid className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>  
        <Router>
          <div className="w-100">  
            <Navigator/>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/findcause" component={CauseView}/>
              <Route path="/createcause" component={CauseCreate}/>
            </Switch>
          </div>
        </Router>
      </Container>
  );
}

export default App;
