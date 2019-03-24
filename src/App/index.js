//React Imports
import React, { Component } from "react";
import styled, { css } from "styled-components";

//Other Local File Imports
import "./App.css";

//Components Imports
import Welcome from "./WelcomeMessage";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
