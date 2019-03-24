import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

const ConfirmButton = () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmedButtonStyled onClick={confirmFavorites}>
            Confirmed Favorites
          </ConfirmedButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};

export default ConfirmButton;
