import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from "./Logo/Logo";

const Styles = styled.div `
  .navbar {
    background-color: #fff;
  }

   a, .navbar-brand, .navbar-nav .nav-link {
    border-width: .5px;
    border-color: rgba(0,0,0,.2);
    font-family: 'Montserrat';
    color: #2c2e30;
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      opacity: .5;
      letter-spacing: .5px;
      cursor: pointer;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href ="/"><Logo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="./Main/Projects/Projectcard.js">Projects</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav.Item>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;
