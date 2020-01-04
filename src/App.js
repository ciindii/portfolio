import React from 'react';
import './App.css';
import NavigationBar from './Components/Content/Header/Header';
import Layout from './Components/Layout';
import Projectcard from './Components/Content/Main/Projects/Projectcard'
import Landing from './Components/Content/Landing/Landing';
import Main from './Components/Content/Main/Mainbody';
import Info from './Components/Content/Main/About/Info';
import Footer from './Components/Content/Footer/Footer';
import NoMatch from './Components/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (

  <React.Fragment>
      <Router>
        <NavigationBar />
          <Layout>
            <Landing />
            <Main />
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/Project" component={Projectcard} />
          <Route path="/About" component={Info} />
          <Route path="/Contact" component={Info} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Layout>
  </Router>
  </React.Fragment>
);
export default App;
