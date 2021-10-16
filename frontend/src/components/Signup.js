import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import {Card, Container, Form, Button} from 'react-bootstrap'

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    const register = () => {
        if (!email){ 
            alert("Please enter a valid email address");
            registerWithEmailAndPassword(email, password);
        }
        else if(!password){
            alert("Please enter a password of your choice");
            registerWithEmailAndPassword(email, password);
        } 
      };

      useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
      }, [user, loading]);

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{maxWidth: 800}}>
            <Card className="w-100">
                <Card.Body>
                    <h2 className="text-center">Sign Up</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            *<Form.Control type="email" placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)}/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick = {register}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
