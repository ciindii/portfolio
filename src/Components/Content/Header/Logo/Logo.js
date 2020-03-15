import React from 'react';
import './Logo.css'
import {  MDBNavbarBrand } from 'mdbreact';
import styled from 'styled-components';
const Styles = styled.div`
  ${'' /* .logo {
    height: 100%;
  }
    @media only screen and (min-width: 900px) {
      .logo {
        height: 20% !important;
      }
    } */}
`;
// import ctLogo from '../../../img/ctLogo.svg';

const Logo = () => {
  return (
    <Styles>

      <img className="logo" src={require('../../../../img/ctLogo.svg')} />

    </Styles>
  )
}

export default Logo;
