import React, { Component } from "react";
import Dropdown from "react-dropdown";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import SelectBar from "./SelectBar";

import "react-dropdown/style.css";

// const defaultOption = options[0];

class App extends Component {
  render() {
    return (
      <DropdownBtn>
        <SelectBar />
        <SelectBar />
      </DropdownBtn>
    );
  }
}

const DropdownBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 1500px;
  margin: auto;
  margin-top: 100px;
`;

export default App;
