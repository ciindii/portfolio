import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Styles = styled.div`
  p {
    font-size: 13px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 20px;
  }
  .copyrightdiv {
    width: 100%;
    text-align: center;
    position: relative;
  }
  .flex {
    display: flex;
    margin: 0 auto;
    width: 250px;
    padding-top: 50px;
  }
  .mr-3 {
    padding: 5px;
    font-size: 13px;
    text-align: center;
    margin: 0 10px;
    color: gray;
      &:hover {
        opacity: .6;
      }
  }
  .copyright {
    font-size: .7em;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  @media only screen and (min-width: 425px) {
    .mr-3 {
      padding: 15px;
      margin: 0px;
    }
    .flex {
      width: 300px;
    }
  }
`;

const Footer = () => (
  <Styles>
    <div className="center">
      <div className="flex">
        <a href="https://www.linkedin.com/in/cindy-truong-848002156/" target="_blank" className="li-ic mr-3">
            <MDBIcon fab icon="linkedin-in" /> Linkedin
          </a>
        <a href="#!" className="git-ic mr-3">
          <MDBIcon fab icon="github" /> github
        </a>
        <a href="#!" className="email-ic mr-3">
          <MDBIcon icon="envelope" /> email
        </a>
      </div>
    </div>
  <div className="copyrightdiv">
    <p className="copyright">cindy truong &copy; {(new Date().getFullYear())}</p>
  </div>
  </Styles>
)

export default Footer;
