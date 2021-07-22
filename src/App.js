import "./App.css";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NaviBar from "./Components/Nav";
import ApptForm from "./Components/ApptForm";

function App() {
  return (
    <>
      <NaviBar></NaviBar>
      <ApptForm />
    </>
  );
}

export default App;
