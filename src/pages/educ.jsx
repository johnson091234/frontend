import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function Education() {
    return (
        <Container className="my-5">
            {/* Title Section */}
            <Row className="mb-4">
                <Col>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title as="h2" className="text-center mb-4">Education</Card.Title>
                            <Card.Text className="text-center text-muted">
                                Below is a summary of my educational background.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Education List Section */}
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title as="h3" className="mb-4">My Education Journey</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h5>Camarines Sur National High School</h5>
                                    <p>Humanities and Social Sciences</p>
                                    <p>Graduated: 2021</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>College</h5>
                                    <p>Bachelor in Science in Information System</p>
                                    <p>Currently pursuing BSIS</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="mt-5">
                <Col className="text-center">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;
