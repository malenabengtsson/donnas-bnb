import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isLoggedIn, setUser, setIsLoggedIn } = useContext(UserContext)

  const logout = () => {
    fetch('/logout')
    setUser(null)
    setIsLoggedIn(false)
  }

  const logOutItem = () => {
    if(isLoggedIn){
      return (
        <NavItem className="mr-auto" navbar>
          <Link onClick={logout} className="nav-link" to="/">Logga ut</Link>
        </NavItem>
      )
    }
  }

  const loginItem = () => {
    if (!isLoggedIn) {
      return (
        <NavItem className="mr-auto" navbar>
          <Link to="/sign-in" className="nav-link">Logga in</Link>
        </NavItem>
      )
    }
  }

  const registerItem = () => {
    if (!isLoggedIn) {
      return (
        <NavItem className="mr-auto" navbar>
          <Link to="/sign-up" className="nav-link">Registrera dig</Link>
        </NavItem>
      )
    }
  }

  const myPageItem = () => {
    if (isLoggedIn){
      return (
        <NavItem className="mr-auto" navbar>
          <Link to="/my-page" className="nav-link">Mina sidor</Link>
        </NavItem>
      )
    }
  }

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
           
            {logOutItem()}
            {myPageItem()}
            {registerItem()}
            {loginItem()}
            <navItem>
            <Link to="/help" className="nav-link">Hjälp</Link>
            </navItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
