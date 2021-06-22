import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NaviBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
      </Nav>
    </Navbar>
  );
}

export default NaviBar;
