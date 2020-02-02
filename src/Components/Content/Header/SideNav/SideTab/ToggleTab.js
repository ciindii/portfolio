import React from 'react';
import styled from 'styled-components';
import { MDBIcon, MDBContainer } from 'mdbreact';

const Styles = styled.div`
  .toggleTab {
    height: 100%;
    background: rgb(206, 132, 96);
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
  }
  li {
    margin: 0.25rem 0;
  }
 li a {
   color: #fff;
   font-size: 1.5em;
   text-transform: uppercase;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: 1px;
   cursor: pointer;
   font-family: 'Montserrat';
     &:hover {
       opacity: .5;
       padding-left: 10px;
       letter-spacing: .5px;
       cursor: pointer;
     }
 }
 ul {
    list-style: none !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

`;

const ToggleTab = props => (
  <Styles>
    <nav className="toggleTab">
      <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li>
            <div className="lgNavResume">
              <button className="lgNavResume">
                <a href="#!" className="email-ic mr-3">
                  <MDBIcon icon="download" /> Résumé </a>
             </button>
           </div>
          </li>
      </ul>
    </nav>
  </Styles>
);
export default ToggleTab;
