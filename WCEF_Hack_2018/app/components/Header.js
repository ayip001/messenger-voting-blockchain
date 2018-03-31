import React from 'react';
import StickyHeader from 'react-sticky-header';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Header = ({ toggleLogin, loggedIn }) => {
  let menuItems = null;

  if (loggedIn) {
    menuItems = (
    <Nav pullRight>
      <NavItem>
        <Link to="/" onClick={() => toggleLogin(!loggedIn)}>Active</Link>
      </NavItem>
      <NavItem>
        <Link to="/signup">Completed</Link>
      </NavItem>
    </Nav>
    );
  } else {
    menuItems = (
    <Nav pullRight>
      <NavItem onClick={() => {window.location.replace("/");setTimeout(() => {toggleLogin(!loggedIn)}, 2000)}}>
        Logout
      </NavItem>
    </Nav>
    );
  };

  return (
    <Navbar staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href='#' onClick={() => {window.location.replace("/");setTimeout(() => {toggleLogin(!loggedIn)}, 2000)}}>Open Ballot</a>
        </Navbar.Brand>
      </Navbar.Header>
      {menuItems}
    </Navbar>
  );
};

export default Header;
