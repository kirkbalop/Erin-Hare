import React from "react";
import { Navbar, Form } from "react-bootstrap";

function Nav(props) {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home" id="logoNav">
        <img
          src={process.env.PUBLIC_URL + `/assets/images/EH-logo.png`}
          width="120"
          height="120"
          className="d-inline-block align-top"
          alt="Erin Hare logo"
        />{" "}
        <span id="logoNavText">Erin Hare</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;
