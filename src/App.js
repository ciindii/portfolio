import React from 'react';
import './App.css';
import './index.css';
import NavigationBar from './Components/Content/Header/Header';
import Toolbar from './Components/Content/Header/SideNav/Navbar';
import Layout from './Components/Layout';
import Landing from './Components/Content/Landing/Landing';
import Info from './Components/Content/Main/About/Info';
import Projectcard from './Components/Content/Main/Projects/Projectcard';
import Main from './Components/Content/Main/Mainbody';
import Footer from './Components/Content/Footer/Footer';
import MainNav from './Components/Content/Header/Navmain';
import NoMatch from './Components/NoMatch';
import ToggleTab from './Components/Content/Header/SideNav/SideTab/ToggleTab';
import OverlayBg from './Components/Content/Header/SideNav/SideTab/Overlay';

import Nav from './Components/Content/Nav/Nav';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class App extends React.Component {
  // state = {
  //   sideTabOpen: false
  // };
  //
  // tabToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {sideTabOpen: !prevState.sideTabOpen};
  //   });
  // };
  //
  // backdropClickHandler = () => {
  //   this.setState({sideTabOpen: false})
  // }

  render() {
    // let sideTab;
    // let backdrop;
    //
    // if (this.state.sideTabOpen) {
    //   sideTab = <ToggleTab />;
    //   backdrop = <OverlayBg click={this.backdropClickHandler} />;
    // }
    return (
      <React.Fragment>
        <div style={{height: '100%'}}>
        {/* <NavigationBar /> */}
        {/* <Toolbar tabClickHandler={this.tabToggleClickHandler} />
        {sideTab}
        {backdrop} */}

          {/* <MainNav /> */}
          <Layout>
            <Nav />
              <Footer />
          </Layout>
          </div>
      </React.Fragment>
  )}
};

export default App;
