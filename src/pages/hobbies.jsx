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
                                    <img src='https://images.unsplash.com/photo-1486916856992-e4db22c8df33?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={200} />
                                    <h5>Photography</h5>
                                    <p>Photography allows me to capture beautiful moments and see the world from a different perspective.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <img src='https://images.unsplash.com/photo-1592388748465-8c4dca8dd703?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={200} />
                                    <h5>Traveling</h5>
                                    <p>Exploring new places and cultures is one of my biggest passions. I love immersing myself in new experiences.</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <img src='https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={200} />
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
