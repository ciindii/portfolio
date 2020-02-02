import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .toggle-btn {
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 36px;
    background: transparent;
    border: none;
    z-index: 1;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  .toggle-btn_line {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

const TabToggleBtn = props => (
  <Styles>
    <button className="toggle-btn" onClick={props.click}>
      <div className="toggle-btn_line"></div>
      <div className="toggle-btn_line"></div>
      <div className="toggle-btn_line"></div>
    </button>
  </Styles>
);
export default TabToggleBtn;
