import "./App.css";
import React from "react";
import { Nav, Navbar, NavbarBrand, NavLink } from "reactstrap";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Our Team</NavbarBrand>
        <Nav className="mr-auto">
          <NavLink href="">Hridyesh</NavLink>
          <NavLink href="">Kavya</NavLink>
          <NavLink href="">Tanvi</NavLink>
        </Nav>
      </Navbar>
      <Cards />
    </div>
  );
}

export default App;
