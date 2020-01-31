import React, {Component} from 'react';
import styled from 'styled-components';
import NavigationBar from './Header';
import Toolbar from './SideNav/Navbar';
const Styles = styled.div `
  .sm {
    display: block;
  }
  .lg {
    display: none;
  }

  @media only screen and (min-width: 900px){
    .sm {
      display: none;
    }
    .lg {
      display: block;
    }
  }
`;

export default class MainNav extends Component {
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
      <div>
        <div className="sm">
          <Toolbar />
        </div>
        <div className="lg">
          <NavigationBar />
        </div>
      </div>
    )
  }
}
