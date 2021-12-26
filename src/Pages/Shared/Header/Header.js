import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from '../../../images/logo1.png'
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="dark" fixed="top" className="details">
        <Container fluid className="nav-detail text-white">
          <Navbar.Brand href="#home">
              <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle className="tog" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#projects">Projects</Nav.Link>
            <Nav.Link as={HashLink} to="/home#abouts">About</Nav.Link>
            <Nav.Link as={HashLink} to="/home#info">Contact</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
