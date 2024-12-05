import React from 'react';
import { Table, Container, Row, Col, Card } from 'react-bootstrap';

function Contact() {
    return (
        <Container className="my-5">
            {/* Title Section */}
            <Row className="mb-4">
                <Col>
                    <Card className="shadow-lg">
                        <Card.Body>
                            <Card.Title as="h2" className="text-center mb-4">Contact Information</Card.Title>
                            <Card.Text className="text-center text-muted">
                                Below is the contact information for our users and team members.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Table Section */}
            <Row>
                <Col>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Johnson Deborde</td>
                                <td>jdeborde@gbox.ncf.edu.ph</td>
                                <td>09519602618</td>
                                <td>Mangga Street Liboton Naga City Philippines</td>
                            </tr>
  
                        </tbody>
                    </Table>
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

export default Contact;
