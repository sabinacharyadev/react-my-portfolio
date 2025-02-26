/* eslint-disable react/prop-types */

import { Navbar, Container, Nav } from "react-bootstrap";
import NavItem from "./NavItem";
const NavigationComponent = () => {
  return (
    <Navbar
      className="rounded-top"
      fixed="bottom"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="rounded">
        <Nav className="d-flex justify-content-around p-2 vw-100">
          <NavItem path="/aboutme" title="About Me" />
          <NavItem path="/resume" title="Resume" />
          <NavItem path="/portfolio" title="Portfolio" />
          <NavItem path="/contact" title="Contact" />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationComponent;
