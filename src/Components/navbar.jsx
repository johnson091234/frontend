import { NavLink } from 'react-router-dom';  // Use NavLink for active link styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="danger" variant="light">  {/* Use variant="dark" */}
      <Container>
        <Navbar.Brand href="#home">Johnson</Navbar.Brand>
        <Nav className="me-auto">
          {/* Use NavLink instead of Link for active link styling */}
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/hobbies">Hobbies</Nav.Link>
          <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          <Nav.Link as={NavLink} to="/education">Education</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;