import React, { Fragment } from "react";
// import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import computer from '../../../img/computer.webp';
// import { MDBBtn } from "mdbreact";
import './Landing.css';


const Styles = styled.div`
  .wrapper {
    ${'' /* background: url(${computer}) no-repeat fixed bottom; */}
    ${'' /* background-size: cover; */}
    text-align: center;
    margin: 0 auto;
    padding: 50px;
    z-index: -2;
  }
  .landingimg {
    width: 100%;
    margin-top: 70px;
  }
  h1, p {
      font-family: 'Libre Baskerville';
      text-align: center;
  }
  h1 {
    font-weight: bolder;
    letter-spacing: 2px;
    font-family: 'Libre Baskerville';
    padding-top: 20px;
    margin-bottom: 0;
    color: rgb(206, 132, 96);
  }
  p {
    padding-top: 0;
    font-size: 1.5em;
    color: #494749;
  }
  @media only screen and (min-width: 600px) {
    .wrapper {
      margin-left: 5rem;
    }
    .landingimg {
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 900px) {
    .wrapper {
      color: #efefef;
      text-align: center;
      margin: 0 auto;
      padding: 50px;
    }
  }
`;

const Landing = () => (
  <Styles>
    <div fluid className="wrapper">
      <div className="overlay">
      </div>
      <div>
        <img className="landingimg" src={require('../../../img/computer.webp')} />
        <h1>Cindy Truong</h1>
        <p>web developer.</p>

      </div>
    </div>
  </Styles>
)

export default Landing;
