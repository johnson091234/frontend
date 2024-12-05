import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-5">
      {/* About Content Section */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-lg p-4 bg-light">
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4" style={{ color: '#1a73e8' }}>
                About Us
              </Card.Title>
              <Card.Text className="lead text-justify mb-4">
                We are a dedicated team committed to providing top-tier services. Our company was founded with the aim to deliver excellent solutions to meet the needs of our clients and help them succeed in the digital world.
              </Card.Text>
              <Card.Text className="lead text-justify mb-4">
                Our mission is to help businesses grow by delivering innovative technology solutions, exceptional customer service, and a tailored approach to meet each client’s specific needs.
              </Card.Text>
              <Card.Text className="lead text-justify mb-4">
                We envision a future where every business, regardless of size, has access to high-quality solutions that help them thrive in an ever-changing marketplace.
              </Card.Text>
              <Card.Text className="text-center mb-4" style={{ fontSize: '1.2rem', color: '#444' }}>
                <strong>CEO & Founder</strong> <br />
                <strong>Chief Operating Officer</strong> <br />
                <strong>Head of Marketing</strong> <br />
                &copy; 2024 Your Company Name
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
