import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';
import '../../fonts.css';

const Styles = styled.div`
  div {
    padding: 50px;
    margin: 0 auto;
    height: auto;
  }
  h2 {
    color: gray;
    text-align: right;
    border-bottom: solid 1px gray;
    padding: 10px;
    margin-bottom: 40px;
    margin-top: 70px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 1.1em;
    letter-spacing: 1.5px;
  }
  p {
    font-size: .9em;
    text-align: center;
    font-family: 'Helvetica',serif;
    letter-spacing: 1px;
    font-size: 13px;
    line-height: 20px;
  }
  .contactButton {
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button {
    background-color: rgb(206, 132, 96);
    border: none;
    color: white;
    width: 100%;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
      &:hover {
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }
  }
  .button a {
    color: #fff;
    font-size: 12px;
    padding: 15px 20px;
  }
  .mr-3 {
    margin-right: 0px !important;
  }

  @media only screen and (min-width: 900px) {
    .wrapper {
      padding-top: 0px;
      padding-right: 70px;
      margin: 0 auto;
      margin-bottom: 150px;
      text-align: center;
    }
    h2 {
      opacity: .9;
    }
    hr {
      width: 20%;
    }
    .button {
      color: white;
      width: 100%;
      opacity: .8;
      padding: 15px 13px;
      text-align: center;
      display: block;
      font-size: 14px;
      margin-bottom: 7px;
      letter-spacing: 1.5px;
    }
  }
  @media only screen and (min-width: 768px) {
    div {

      max-width: 600px;
      height: 100%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1120px) {
  }

`;

const Contact = () => (
  <Styles>
    <div className="wrapper">
      <h2>contact me</h2>
      <div className="contactButton">

            <a href="mailto:cindythitruong@gmail.com" className="email-ic mr-3 button">
              <MDBIcon icon="envelope" /> email me </a>

           <a href="https://www.instagram.com/ciindiicodes/?hl=en" target="_blank"  className="email-ic mr-3 button">
             <MDBIcon fab icon="instagram" /> follow me </a>

          <a href="#" className="email-ic mr-3 button">
            <MDBIcon icon="download" /> résumé </a>

      </div>
    </div>
  </Styles>
);

export default Contact;
