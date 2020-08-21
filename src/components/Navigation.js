import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    font-size:25px;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;

    }
  }
`;

export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Winnie's Pizzeria</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/Pizza">Create a Pizza</Link>
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)