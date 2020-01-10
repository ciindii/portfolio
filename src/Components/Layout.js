import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`

@media only screen and (min-width: 900px) {

  .container {
    max-width: 900px;

  }
}

@media only screen and (min-width: 1120px) {

  .container {
    max-width: 1100px;
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
