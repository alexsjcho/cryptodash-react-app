//React Imports
import React, { Component } from "react";
// import styled, { css } from "styled-components";

//Other Local File Imports
import "./App.css";

//Components Imports
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import { AppProvider } from "./AppProvider";
import Settings from "../Settings";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
