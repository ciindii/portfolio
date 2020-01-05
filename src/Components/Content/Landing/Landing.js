import React, { Fragment } from "react";
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import computer from '../../../img/computer.webp';
import { MDBBtn } from "mdbreact";
// import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import './Landing.css';

const Styles = styled.div`
  .jumbo {
    background: url(${computer}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  h1, p {
      font-family: 'Libre Baskerville';
      text-align: center;
  }
  h1 {
    font-weight: bolder;
    letter-spacing: 2px;
    font-family: 'Libre Baskerville';
    margin-bottom: 0;
    margin-top: 130px;
  }
  p {
    padding-top: 0;
    font-size: 1.5em;
  }
  @media only screen and (min-width: 900px) {
    .jumbo {
      float: right;
    }
  }
`;

const Landing = () => (
  <Styles>
    <Jumbotron fluid className="jumbo">
      <div className="overlay">
      </div>
      <Container>
        <h1>Cindy Truong</h1>
        <p>web developer.</p>

      </Container>
    </Jumbotron>
  </Styles>
)

export default Landing;
