import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

export default function Navigator() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>charitable.io</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Find a Cause</Nav.Link>
                    <Nav.Link>Creat a Cause</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
