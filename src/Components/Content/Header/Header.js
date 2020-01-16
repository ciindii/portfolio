import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from "./Logo/Logo";
import Projectcard from '../Main/Projects/Projectcard';
import Landing from '../Landing/Landing';
import Main from '../Main/Mainbody';
import Info from '../Main/About/Info';
import Contact from '../Main/About/Contact';
import Footer from '../Footer/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Styles = styled.div `
  .navbar {
    background-color: rgb(206, 132, 96);
    height: 100%;
    width: auto;
    overflow: hidden;
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
  }
    ul {
      list-style: none !important;
    }

  }
  @media only screen and (min-width: 900px){
    .navbar{
      height: 100%;
      width: 30%;
      position: fixed;
    }

    .logo {
      ${'' /* margin: 0 auto; */}
      padding-bottom: 10px;
      opacity: .8;
      width: 105px;
    }
    li a {
      color: #fff;
      font-size: 1.5em;
        &:hover {
          opacity: .5;
          padding-left: 10px;
          letter-spacing: .5px;
          cursor: pointer;
        }
    }

    .lgNavResume {
      margin: 0 auto;
      display: block;
    }
    .lgNavResume button,
    .lgNavResume a {
      font-size: .9em;
      margin: 20px;
      border: none;
      color: #fff;
      background-color: transparent;
    }
  }
`;

class NavigationBar extends React.Component {
  render() {
    return (
      <Styles>
        {/* <Router>
        <Navbar expand="lg">
          <Navbar.Brand href ="/"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to='/Projects'>Projects</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/About">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
            </Nav.Item>
            </Nav>
            <Router>
              <Route exact path='/' component={Landing}></Route>
              <Route exact path='/Projects' component={Projectcard}></Route>
              <Route exact path='/About' component={Info}></Route>
              <Route exact path='/Contact' component={Info}></Route>
            </Router>

          </Navbar.Collapse>
        </Navbar>
      </Router> */}

        <Router>

          <div className="navbar">

            <ul>
              <div className="logo">
                <Logo />
              </div>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Projects">Projects</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li>
                <div className="lgNavResume">
                  <button className="lgNavResume">
                    <a href="#!" className="email-ic mr-3">
                      <MDBIcon icon="download" /> Résumé </a>
                 </button>
               </div>
              </li>
            </ul>
            {/* <Footer /> */}

            </div>
                <Route exact path='/' component={Landing}></Route>
                <Route exact path='/Projects' component={Projectcard}></Route>
                <Route exact path='/About' component={Info}></Route>
                <Route exact path='/Contact' component={Contact}></Route>

        </Router>


      </Styles>
    )
  }
}

export default NavigationBar;
