import React from 'react';
import * as RB from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import '../css/navbar.css';

const NavBar = ({ name, user }) => {
  return (
    <div className="App">
      <RB.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <RB.Container>
          <RB.Navbar.Brand className="textStyle">Manual Tagger</RB.Navbar.Brand>
          <Link id="linkToLogout" to="/logout" className="textStyle" >Logout</Link>
          <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <RB.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <RB.Navbar.Text className="textStyle">Signed in as: {name}</RB.Navbar.Text>
          </RB.Navbar.Collapse>
        </RB.Container>
      </RB.Navbar>
    </div>
  )
}

export default NavBar;