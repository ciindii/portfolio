import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';
import Logo from '../Header/Logo/Logo';

const Styles = styled.div`
  * {
    box-sizing: content-box;
  }
  .navbar {
    width: 5rem;
    height: 100vh;
    position: fixed;
    left: 0;
    background-color: var(--bg-primary);
  }
  .navbar-ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .navbar:hover{
    width: 16rem;
  }
  .navbar:hover .link-text {
    display: block;
  }

  .nav-item {
    width: 100%;
  }
  .nav-item:last-child {
    margin-top: auto;
  }
  .nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
  }
  .nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }
  .link-text {
    display: none;
    margin-left: 1rem;
  }
  .svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  }

  .fa-primary {
    color: #ff7ee;
  }
  .fa-secondary {
    color: #df49a6;
  }
  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }
  .logo {
    height: 4rem;
    margin-bottom: 1rem;

  }

  @media only screen and (min-width: 425px) {

  }
  @media only screen and (min-width: 900px) {

  }
`;
const Nav = () => (
  <Styles>
    <div className="navbar">
      <ul className="navbar-ul">
        <li className="logo">
          <Logo />
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="home" />
            <span class="link-text">Cats</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="home" />
            <span class="link-text">Cats</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="home" />
            <span class="link-text">Cats</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <MDBIcon className="svg" icon="home" />
            <span class="link-text">Cats</span>
          </a>
        </li>
      </ul>
    </div>
  </Styles>
)

export default Nav;
