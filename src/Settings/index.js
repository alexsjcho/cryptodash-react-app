import React from "react";
import WelcomeMessage from "../Settings/WelcomeMessage";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

const index = () => {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
};

export default index;
