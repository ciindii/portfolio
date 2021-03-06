import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';
import Logo from '../Header/Logo/Logo';
import Projectcard from '../Main/Projects/Projectcard';
import Landing from '../Landing/Landing';
import Main from '../Main/Mainbody';
import Info from '../Main/About/Info';
import Contact from '../Main/About/Contact';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Styles = styled.div`
  * {
    box-sizing: content-box;
  }
  .navbar {
    position: fixed;
    left: 0;
    background-color: var(--bg-primary);
    padding: 0;
  }
  .navbar .nav-item .nav-link {
    display: flex;
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
    transition: var(--transition-speed);
  }
  .navbar:hover .link-text {
    display: block;
  }

  .nav-item {
    width: 100%;
    box-sizing: border-box;
  }
  ${'' /* .nav-item:last-child {
    margin-top: auto;
  } */}
  .nav-link {
    display: flex;
    align-items: center;
    text-align: left;
    margin: 0 auto;
    height: 4rem;
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
    margin: 0 .25rem;
    text-align: center;
  }
  .svg {
    width: 2rem;
    min-width: 2rem;
    margin: 0 auto;
    text-align: left;
  }

  .fa-primary {
    color: #ff7ee;
  }
  .fa-secondary {
    color: rgb(206, 132, 96);
  }
  .fa-primary,
  .fa-secondary {
    transition: var(--transition-speed);
  }
  .logo {
    height: 5rem;
    margin-top: .5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 600px) {
    .navbar {
      width: 100vw;
      height: 5rem;
    }

    .logo {
      display: none;
    }

    .navbar:hover{
      width: 100%;
      transition: none;
    }

    .navbar:hover .link-text {
      display: none;
    }

    .navbar-ul {
      flex-direction: row;
    }

    .nav-link {
      justify-content: center;
    }
    .nav-item {
      padding 0 25px;
    }
    .svg {
      text-align: center;
      margin: 0 auto;
    }

    main {
      margin: 0;
    }

  }
  @media only screen and (min-width: 600px) {
    .navbar {
      width: 5rem;
      top: 0;
      height: 100%;
      padding: 1rem;
    }

    .navbar:hover {
      width: 16rem;
    }

    .navbar:hover .link-text {
      display: inline;
      transition: opacity var(--transition-speed);
    }

    .navbar:hover .logo svg
    {
      margin-left: 11rem;
    }

    .navbar:hover .logo-text
    {
      left: 0px;
    }
  }
`;
const Nav = () => (
  <Styles>
    <Router>
    <div className="navbar">
      <ul className="navbar-ul">
        <li className="logo">
          <Logo />
        </li>

        <li className="nav-item">
          <Link to="/">
            <a href="#" className="nav-link">
              <MDBIcon className="svg fa-primary fa-secondary" icon="home" />
              <span class="link-text">Home</span>
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Projects">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="laptop-code" />
            <span class="link-text">Portfolio</span>
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="laugh" />
            <span class="link-text">About</span>
          </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">
          <a href="#" className="nav-link">
            <MDBIcon className="svg fa-primary fa-secondary" icon="envelope" />
            <span class="link-text">Contact</span>
          </a>
          </Link>
        </li>
      </ul>
    </div>

                    <Route exact path='/' component={Landing}></Route>
                    <Route exact path='/Projects' component={Projectcard}></Route>
                    <Route exact path='/About' component={Info}></Route>
                    <Route exact path='/Contact' component={Contact}></Route>
    </Router>
  </Styles>
)

export default Nav;
