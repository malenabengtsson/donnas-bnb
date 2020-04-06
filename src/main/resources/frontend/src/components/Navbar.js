import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from 'react-router-dom'

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" dark expand="md">
        <NavbarBrand href="/">Donnas Bnb</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Hem</Link>
            </NavItem>
            <NavItem className="mr-auto" navbar>
              <Link to="/sign-up" className="nav-link">Registrera dig</Link>
            </NavItem>
            <NavItem className="mr-auto" navbar>
              <Link to="/sign-in" className="nav-link">Logga in</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
