import "./App.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NaviBar from "./Components/Nav";
import ApptForm from "./Components/ApptForm";
import Button from "./Components/UIKit/Button";

function App() {
  return (
    <>
      <NaviBar></NaviBar>
      <ApptForm />
      <Button>Button</Button>
    </>
  );
}

export default App;
