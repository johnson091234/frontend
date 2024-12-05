import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <Container className="text-center">
            {/* Welcome Section */}
            <Row className="justify-content-center mt-5">
                <Col md={8} lg={6}>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title as="h1" className="mb-4">
                                Welcome to My Website
                            </Card.Title>
                            <Card.Text className="mb-4">
                                Thank you for visiting! This is the homepage of my awesome website.
                                Explore more and discover the amazing features we offer.
                            </Card.Text>
                            {/* Button with a sample action */}
                            <Button variant="primary" onClick={() => alert('Learn More Button Clicked!')}>
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {/* Image Section */}
            <Row className="mt-5">
                <Col>
                    <img
                        src="src\assets\crawl.jpg"
                        alt="Website Logo"
                        className="rounded-circle"
                        width={200}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
