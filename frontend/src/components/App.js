import React from "react";
import Test from "./Test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {Container} from "react-bootstrap"

function App() {
  return (
    <Router>
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>  
          <Test/>
        </div>
      </Container>
    </Router>
    
  );
}

export default App;
