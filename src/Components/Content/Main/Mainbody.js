import React from 'react';
import styled from 'styled-components';
import Info from './About/Info';
import Projectcard from './Projects/Projectcard';

const Styles = styled.div`

  .wrapper {

  }
  .projectContainer {
    width: 100%;
    height: auto;
    background-color: #fff;
    margin-right: 40px;
  }
  .sidebarContainer {
    width: 100%;

     /* background-color: #FAFAFA; */
  }

  @media only screen and (min-width: 900px) {
    .wrapper {
      display: flex;

    }
    .projectContainer {
      width: 75%;
      ${'' /* height: 1800px; */}
      background-color: #fff;
      margin-right: 10px;
    }
    .sidebarContainer {
      width: 25%;
      height: 800px;
      background-color: #fff;
    }
  }
`;
const Main = () => (
  <Styles>
    <div className="wrapper">
      <div className="projectContainer">
        <Projectcard />
      </div>
      <div className="sidebarContainer">
        <Info />
      </div>
    </div>
  </Styles>
)

export default Main;
