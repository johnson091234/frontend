import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import rosie from '../assets/rosie.jpg';
import bruno from '../assets/bruno.jpg';
import ncf from '../assets/Ncf.jpg';
import ncf1 from '../assets/ncf2.jpg';
import '../educ.css';

function Education() {
    const currentYear = new Date().getFullYear();

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
                                {/* High School Section */}
                                <ListGroup.Item>
                                    <div className="d-flex gap-3 mb-3">
                                        <img src={rosie} width={200} alt="Camarines Sur National High School" className="rounded" />
                                        <img src={bruno} width={250} height={200} alt="Another image related to the high school" className="rounded" />
                                    </div>
                                    <h5>Camarines Sur National High School</h5>
                                    <p>
                                        I am a proud graduate of Camarines Sur National High School, where I completed the Humanities and Social Sciences strand in 2021. 
                                        The academic foundation I gained there has significantly shaped my critical thinking and problem-solving abilities, preparing me for my future endeavors.
                                    </p>
                                    <p><strong>Graduated:</strong> 2021</p>
                                </ListGroup.Item>
                                
                                {/* College Section */}
                                <ListGroup.Item>
                                    <div className="d-flex gap-3 mb-3">
                                        <img src={ncf} width={200} alt="College campus" className="rounded" />
                                        <img src={ncf1} width={250} height={200} alt="Additional college image" className="rounded" />
                                    </div>
                                    <h5>Naga College Foundation</h5>
                                    <p><strong>Bachelor of Science in Information System</strong></p>
                                    <p>
                                        I am currently pursuing a Bachelor of Science in Information System at Naga College Foundation. I am deeply committed to expanding my knowledge and skills in the field of information technology,
                                        with a strong focus on data management, software development, and system analysis. My goal is to contribute to technological advancements and innovations in the IT industry.
                                    </p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Footer Section */}
            <Row className="mt-5">
                <Col className="text-center">
                    <p>&copy; {currentYear} Your Name. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;
