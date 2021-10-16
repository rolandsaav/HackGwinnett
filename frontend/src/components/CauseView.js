import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CauseScroll from './CauseScroll'

export default function CauseView() {
    const [selectedCause, setSelectedCause] = useState({})

    return (
        <Container fluid>
            <Row>
                <Col sm={6}>
                    <CauseScroll update={setSelectedCause}/>
                </Col>

                <Col sm={6}>
                    {!selectedCause && <h2>Select a Cause</h2>}
                    <h1>{selectedCause.name}</h1>
                </Col>
            </Row>

        </Container>
    )
}
