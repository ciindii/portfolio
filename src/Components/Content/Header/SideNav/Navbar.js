import React from 'react';
import Logo from '../Logo/Logo';
import Projectcard from '../../Main/Projects/Projectcard';
import Landing from '../../Landing/Landing';
import Main from '../../Main/Mainbody';
import Info from '../../Main/About/Info';
import Contact from '../../Main/About/Contact';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.div ``;

const Toolbar = props => (
  <Styles>
  <header>
    <nav>
      <div></div>
      <div><Logo /></div>
      <div>
        <Router>
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
                        <Route exact path='/' component={Landing}></Route>
                        <Route exact path='/Projects' component={Projectcard}></Route>
                        <Route exact path='/About' component={Info}></Route>
                        <Route exact path='/Contact' component={Contact}></Route>

        </Router>
      </div>
    </nav>
  </header>
  </Styles>
);
export default Toolbar;
