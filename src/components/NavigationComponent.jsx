/* eslint-disable react/prop-types */
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationComponent = ({ handleOnClick }) => {
  return (
    <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
      <Container className="rounded">
        <Nav className="d-flex justify-content-around vw-100">
          <Nav.Link href="#about" onClick={() => handleOnClick("aboutme")}>
            About
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => handleOnClick("resume")}>
            Resume
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => handleOnClick("portfolio")}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => handleOnClick("contact")}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationComponent;
