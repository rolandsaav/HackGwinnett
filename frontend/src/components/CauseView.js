import React, {useState} from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import CauseScroll from './CauseScroll'
import { db } from '../firebase'

export default function CauseView() {
    const [selectedCause, setSelectedCause] = useState({})


    return (
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <CauseScroll update={setSelectedCause}/>
                </Col>

                <Col sm={6}>
                    {!selectedCause.name && <h1>Select a Cause</h1>}
                    {selectedCause.name && 
                    <Card className="text-center mt-5">
                        <Card.Body>
                            <Card.Title> {selectedCause.name} </Card.Title>
                            <h1>{selectedCause.name}</h1>
                            <h3>{selectedCause.desc}</h3>
                            <Button variant="primary" size="lg" type="button" >
                            Join this cause
                            </Button>
                        </Card.Body>
                    </Card>
                    }
                    
                </Col>
            </Row>

        </Container>
    )
}