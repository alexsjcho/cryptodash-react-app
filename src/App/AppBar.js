import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px 120px 120px 120px;
`;

const AppBar = () => {
  return (
    <Bar>
      <div>AppBar Component</div>
      <div>CyptoDash</div>
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  );
};

export default AppBar;
