import React from 'react';
import * as RB from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/navbar.css';

const NavBar = () => {
  return (
    <div className="App">
      <RB.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <RB.Container>
          <RB.Navbar.Brand>Manual Tagger</RB.Navbar.Brand>
          <Link id="linkToLogout" to="/logout">Logout</Link>
          <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <RB.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <RB.Navbar.Text>Signed in as: NameOfUser</RB.Navbar.Text>
          </RB.Navbar.Collapse>
        </RB.Container>
        {/* <img src='../images/tag.png' alt="tag logo" /> */}
        {/* <h1>Manual Tagger</h1>
          <RB.Nav className="mr-auto">
            <Link to="/logout">
              <RB.Nav.Link href="#logout">logout</RB.Nav.Link>
            </Link>
            <RB.NavDropdown title="DropDown" id="collasible-nav-dropdown">
              <RB.NavDropdown.Item href="#action/3.1">Link 1</RB.NavDropdown.Item>
              <RB.NavDropdown.Item href="#action/3.2">Link 2</RB.NavDropdown.Item>
              <RB.NavDropdown.Item href="#action/3.3">Link 3</RB.NavDropdown.Item>
              <RB.NavDropdown.Divider />
              <RB.NavDropdown.Item href="#action/3.4">Link 4</RB.NavDropdown.Item>
            </RB.NavDropdown>
          </RB.Nav>
          <RB.Nav>

          </RB.Nav>
        </RB.Navbar.Collapse> */}
      </RB.Navbar>
    </div>
  )
}

export default NavBar;