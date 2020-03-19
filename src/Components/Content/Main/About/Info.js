import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';
import '../../fonts.css';
import worldmap from '../../../../img/worldmap.png';
import avatar from '../../../../img/avatar.png';
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
  .cindy {
    font-family: 'Sacramento', cursive;
    font-size: 20px;
    text-align: right;
    padding-top: 2px;
    opacity: .7;
  }
  .avatar {
    background: url(${avatar}) no-repeat;
    background-size: 30%;
    padding: 0;
    height: 170px;
    background-position: center;
  }
  .map {
    background: url(${worldmap}) no-repeat;
    background-size: 65%;
    margin-top: -40px;
    height: 250px;
    background-position: center;
  }
  .location {
    text-align: center;
    margin-top: -60px;
    font-family: 'Montserrat', sans-serif;
    font-size: .8em;
  }
  .location span {
    color: red;
    opacity: .6;
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
  @media only screen and (min-width: 600px) {
    h2 {
      margin-top: 0px;
    }
  }
  @media only screen and (min-width: 900px) {
    .wrapper {
      padding-right: 70px;
      margin: 0 auto;
      text-align: center;
    }
    h2 {
      opacity: .9;
      padding-top: 50px;
    }
    hr {
      width: 20%;
    }
    .avatar {
      background-size: 30%;
      margin: 30px;
      height: 170px;
      background-position: center;
    }
    .map {
      margin: 20px 0;
      background-size:75%;
      height: 250px;
    }
    .location {
      text-align: center;
      margin-bottom: 20px;
      font-family: 'Montserrat', sans-serif;
      font-size: .8em;
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
    .wrapper {
      position: relative;
      right: -5rem;
    }
    div {
      max-width: 600px;
      height: 100%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1120px) {

    .map {
      margin-top: -30px;
      background-size: 100%;
      height: 250px;
    }
    .location {
      text-align: center;
      margin-top: -25px;
      font-family: 'Montserrat', sans-serif;
      font-size: .8em;
    }
    p {
      font-size: .9em;
      text-align: center;
    }
}
`;

const Info = () => (
  <Styles>
    <div className="wrapper">
      <h2>about me</h2>
      <div className="avatar" />
      <p>
      "Hello I'm Cindy, a web developer based in Seattle, WA. I recently fell in love with the React.js libary. I also use Git for version control, CSS frameworks such as Bootstrap 4 and Materialize, and some farmility with Node.js. On my free time I like to mess around with vector graphics or doodle with Procreate."
        <br/>

      </p>
      <div className="cindy">-cindy</div>


      <h2>location</h2>
      <div className="map" />
      <div className="location">
        <span><MDBIcon icon="map-marker-alt" /></span> Seattle, Wa
      </div>
      </div>
  </Styles>
);

export default Info;
