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
import Toolbar from './SideNav/Navbar';

import TabToggleBtn from './SideNav/SideTab/SideTab';
// import Toggle from '../Landing/Toggle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Styles = styled.div `
  .navbar-lg {
    display: none;
  }

  .navbar-sm {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    height: 100px;
    background-color: rgb(206, 132, 96);
  }

  .spacer {
    flex: 1;
  }
  .toolbar {
    ${'' /* position: fixed;
    top: 0;
    left: 0; */}
    background-color: rgb(206, 132, 96);
    height: 100px;
  }

  .toolbar-logo {
    margin-left: 1rem;
  }

  .toolbar-nav {
    display: flex;
    align-items: center;
    ${'' /* height: 100%; */}
  }
  .toolbar-links ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .toolbar-links {
    text-decoration: none;
    max-width: 350px;
    &:hover {
      color: red;
    }
    &:active{

    }
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

    .navbar-lg{
      display: block;
      background-color: rgb(206, 132, 96);
      height: 100%;
      width: auto;
      overflow: hidden;
      height: 100%;
      width: 30%;
      position: fixed;
    }

    .navbar-sm {
      display: none;
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
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    return (
      <Styles>
        <Router>

          <div className="navbar-sm toolbar">
            <div className="toolbar-nav">
              <div>
                <TabToggleBtn />
              </div>
              <div className="toolbar-logo"><Logo /></div>
              <div className="spacer"/>
              <div className="toolbar-links">
                  <ul>
                    {/* <div className="logo">
                      <Logo />
                    </div> */}
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
              </div>
            </div>
          </div>


          {/* +900px width screen nav */}
          <div className="navbar-lg">
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
