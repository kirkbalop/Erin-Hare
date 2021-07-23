import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NaviBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Nav className="container-fluid">
        <Navbar.Brand href="#home" id="logoNav">
          <img
            src={process.env.PUBLIC_URL + `/assets/images/EH-logo.png`}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="Erin Hare logo"
          />{" "}
          Erin Hare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                We'll figure this one out
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Nav>
    </Navbar>
  );
}

export default NaviBar;
