import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
.container {
  ${'' /* background-color: red; */}
}

@media only screen and (min-width: 600px) {
  ${'' /* .container {
    margin-right: 0;
  } */}
}
@media only screen and (min-width: 900px) {

  .container {
    max-width: 900px;
      ${'' /* background-color: blue; */}
  }
}

@media only screen and (min-width: 1120px) {

  .container {
    max-width: 1100px;
      ${'' /* background-color: green; */}
  }
}
`;
const Layout = (props) => (
  <Styles>
    <Container className="container">
      {props.children}
    </Container>
  </Styles>
)

export default Layout;
