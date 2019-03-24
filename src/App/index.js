//React Imports
import React, { Component } from "react";
import styled, { css } from "styled-components";

//Other Local File Imports
import "./App.css";

//Components Imports
import Welcome from "./WelcomeMessage";

class App extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

export default App;
