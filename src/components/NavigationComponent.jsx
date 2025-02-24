import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationComponent = () => {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
      <Container className="rounded">
        <Nav className="d-flex justify-content-around vw-100">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">Resume</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationComponent;
