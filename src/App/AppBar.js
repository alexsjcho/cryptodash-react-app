import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 120px 120px;
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff;
    `}
`;

const ControlButton = ({ name, active }) => {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
};

const toProperCase = lower => {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
};

const AppBar = () => {
  return (
    <Bar>
      <div>AppBar Component</div>
      <Logo>CryptoDash</Logo>
      <ControlButton active name="dashboard" />
      <ControlButton name="setting" />
    </Bar>
  );
};

export default AppBar;
