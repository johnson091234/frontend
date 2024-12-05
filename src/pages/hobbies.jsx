import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hobbies() {
    return (
        <Container className="my-5">
            {/* Heading Section */}
            <Row className="mb-4">
                <Col>
                    <h2 className="text-center text-primary">My Hobbies & Interests</h2>
                    <p className="text-center text-muted">
                        Here are some of my favorite pastimes and activities that I enjoy doing in my free time.
                    </p>
                </Col>
            </Row>

            {/* Hobbies Card Section */}
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title as="h3" className="mb-4">My Favorite Hobbies</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h5>Photography</h5>
                                    <p>Photography allows me to capture beautiful moments and see the world from a different perspective.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>Traveling</h5>
                                    <p>Exploring new places and cultures is one of my biggest passions. I love immersing myself in new experiences.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>Basketball</h5>
                                    <p>Basketball is making me a stress-free when i play</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="mt-4">
                <Col className="text-center">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Hobbies;
