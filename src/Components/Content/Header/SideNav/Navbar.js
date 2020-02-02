import React from 'react';
import Logo from '../Logo/Logo';
import Projectcard from '../../Main/Projects/Projectcard';
import Landing from '../../Landing/Landing';
import Main from '../../Main/Mainbody';
import Info from '../../Main/About/Info';
import Contact from '../../Main/About/Contact';
import TabToggleBtn from './SideTab/ToggleTab';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { MDBIcon, MDBContainer } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.div `
  .toolbar {
    ${'' /* position: fixed;
    top: 0;
    left: 0; */}
    width: 100%;
    background-color: rgb(206, 132, 96);
    height: 100px;
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
    &:hover {
      color: red;
    }
    &:active{

    }
  }
`;

const Toolbar = props => (
  <Styles>
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div></div>
      <div className="toolbar-logo"><Logo /></div>
      <div className="toolbar-links">
        <Router>
          <div>
            <TabToggleBtn click={props.tabClickHandler} />
          </div>
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
