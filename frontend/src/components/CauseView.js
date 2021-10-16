import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function CauseView() {
    return (
        <Container fluid>
            <Row>
                <Col sm={8}>
                    <h2>Cause Scroll</h2>
                </Col>

                <Col sm={4}>
                    <h2>Cause Focus</h2>
                </Col>
            </Row>

        </Container>
    )
}
