import React, {Fragment, useState, useRef} from 'react'
import {Card, Form, Button, Container} from 'react-bootstrap'
import { createCause } from '../firebase'

export default function CauseCreate() {
    const [cause, setCause] = useState()
    const nameRef = useRef();
    const descRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault()
        createCause(nameRef.current.value, descRef.current.value)

      }

    return (
        <Container style={{maxWidth: 800}}>
        <Card>
            <h2 className="text-center">Create a Cause</h2>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name Your Cause</Form.Label>
                        <Form.Control placeholder="Enter cause name" ref={nameRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="causeDescription">
                        <Form.Label>Describe Your Cause</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={descRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="causeImage">
                        <Form.Label>Cause Post Image</Form.Label>
                        <Form.Control type="file" size="lg"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        </Container>
        
    )
}
