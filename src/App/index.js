//React Imports
import React, { Component } from "react";
import styled, { css } from "styled-components";

//Other Local File Imports
import "./App.css";

//Components Imports
import Welcome from "./WelcomeMessage";
import AppLayout from "./AppLayout";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
