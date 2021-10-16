import React from "react";
import Test from "./Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"
import Navigator from "./Navigator";

function App() {
  return (
    <Router>
      <Container className="d-flex justify-content-center"
      style={{ minHeight: "100vh" }}>  
        <div className="w-100">  
          <Navigator/>
          <Test/>
        </div>
      </Container>
    </Router>
    
  );
}

export default App;
