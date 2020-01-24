import React from 'react';
import './App.css';
import NavigationBar from './Components/Content/Header/Header';
import Toolbar from './Components/Content/Header/SideNav/Navbar';
import Layout from './Components/Layout';
import Landing from './Components/Content/Landing/Landing';
import Info from './Components/Content/Main/About/Info';
import Projectcard from './Components/Content/Main/Projects/Projectcard';
import Main from './Components/Content/Main/Mainbody';
import Footer from './Components/Content/Footer/Footer';
import NoMatch from './Components/NoMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const App = () => (

  <React.Fragment>
    {/* <NavigationBar /> */}
    <Toolbar />
      <Layout>
          {/* <Landing />
          <Main /> */}
          <Footer />
      </Layout>

  </React.Fragment>
);

export default App;
