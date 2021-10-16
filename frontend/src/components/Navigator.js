import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

export default function Navigator() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>charitable.io</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="findcause">Find a Cause</Nav.Link>
                    <Nav.Link href="createcause">Create a Cause</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link>Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
