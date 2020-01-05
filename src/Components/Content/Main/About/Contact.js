import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';
import '../../fonts.css';
import worldmap from '../../../../img/worldmap.png';
import avatar from '../../../../img/avatar.png';
const Styles = styled.div`
  div {
    padding: 20px;
    margin: 0 auto;
    height: auto;
  }
  h2 {
    ${'' /* text-align: center;
    font-family: 'Sacramento', cursive;
    padding-top: 10px; */}
    color: gray;
    text-align: right;
    border-bottom: solid 1px gray;
    padding: 10px;
    margin-bottom: 40px;
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
  button {
    background-color: pink;
    border: none;
    color: white;
    width: 100%;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
      &:hover {
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
      }
  }
  button a {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
  .mr-3 {
    margin-right: 0px !important;
  }

  @media only screen and (min-width: 900px) {
    div {
      padding-top: 0px;
      float: right;
    }
    h2 {
      opacity: .9;
    }
    hr {
      width: 20%;
    }
    button {
      color: white;
      width: 100%;
      opacity: .8;
      padding: 15px 13px;
      text-align: center;
      display: block;
      font-size: 16px;
      margin-bottom: 7px;
    }
    button a {
      letter-spacing: 1.5px;
    }
  }
  @media only screen and (min-width: 768px) {
    div {

      max-width: 600px;
      height: 100%;
      margin: 0 auto;

  }
  @media only screen and (min-width: 1120px) {
  }

`;

const Contact = () => (
  <Styles>
    <div>
      <h2>contact me</h2>
      <div className="contactButton">
          <button>
            <a href="#!" className="email-ic mr-3">
              <MDBIcon icon="envelope" /> email me </a>
         </button>
         <button>
           <a href="#!" className="email-ic mr-3">
             <MDBIcon fab icon="instagram" /> follow me </a>
        </button>
        <button>
          <a href="#!" className="email-ic mr-3">
            <MDBIcon icon="download" /> Résumé </a>
       </button>
      </div>
    </div>
  </Styles>
);

export default Contact;