import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/navbar.css';

interface NavBarIF {
    name: string;
    user: string;
}

const NavBar: React.FC<NavBarIF> = ({ name, user }) => {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <Container className="navbar-box">
          <Navbar.Brand className="textStyle">Manual Tagger</Navbar.Brand>
          <Link id="linkToLogout" to="/logout" className="textStyle" >Logout</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Navbar.Text className="textStyle">Signed in as: {name}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;